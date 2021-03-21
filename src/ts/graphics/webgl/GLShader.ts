import { Vector2 } from "math/Vector2";
import { GLTexture } from "./GLTexture";

export const DefaultVertexSource = `
attribute vec3 position;
attribute vec4 color;
attribute vec2 uv;

uniform mat4 u_MatrixModelView;
uniform mat4 u_MatrixProjection;

uniform vec2 u_ScreenSize;

varying highp vec4 v_Color;
varying highp vec2 v_UV;

highp vec4 pixelPerfect(highp vec4 v){
   vec2 sp = vec2(v.x, v.y);

   vec2 ss = u_ScreenSize / 2.0;

   sp = floor(sp * ss) / ss;

   v.x = sp.x;
   v.y = sp.y;

   return v;
}

void main() {
   v_Color = color;
   v_UV = uv;
   
   gl_Position = pixelPerfect(u_MatrixProjection * u_MatrixModelView * vec4(position, 1.0));
}
`;

export const DefaultFragmentSource = `
varying highp vec4 v_Color;
varying highp vec2 v_UV;

uniform sampler2D u_Texture;

void main() {
   highp vec4 color = texture2D(u_Texture, v_UV) * v_Color;
   // highp vec4 color = texture2D(u_Texture, v_UV) * vec4(1.0, 0.0, 0.0, 1.0);

   // Low color precision :)
   // color.r = floor(color.r * 8.0) / 8.0;
   // color.g = floor(color.g * 8.0) / 8.0;
   // color.b = floor(color.b * 8.0) / 8.0;

   gl_FragColor = color;
}
`;

type ShaderType = number;

export class GLShaderAttributeSet{
   positionAttribute : number = 0;
   colorAttribute : number = 0;
   uvAttribute : number = 0;

   modelViewUniform: WebGLUniformLocation|null = null;
   projectionUniform: WebGLUniformLocation|null = null;
   textureUniform: WebGLUniformLocation|null = null;
   screenSizeUniform: WebGLUniformLocation|null = null;

   load(program: GLShaderProgram){
      this.positionAttribute = program.getAttributeLocation("position");
      this.colorAttribute = program.getAttributeLocation("color");
      this.uvAttribute = program.getAttributeLocation("uv");

      this.modelViewUniform = program.getUniformLocation("u_MatrixModelView");
      this.projectionUniform = program.getUniformLocation("u_MatrixProjection");
      this.textureUniform = program.getUniformLocation("u_Texture");
      this.screenSizeUniform = program.getUniformLocation("u_ScreenSize");
   }
}

class GLShader {
   static readonly Vertex: ShaderType = 0; 
   static readonly Fragment: ShaderType = 1; 

   gl: WebGLRenderingContext;
   id: WebGLShader;

   compiled: boolean;

   constructor(gl: WebGLRenderingContext, type: ShaderType, source: string){
      this.gl = gl;

      this.id = this.gl.createShader(type === GLShader.Vertex ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER)!;
   
      gl.shaderSource(this.id, source);
      gl.compileShader(this.id);

      this.compiled = true;

      if (!gl.getShaderParameter(this.id, gl.COMPILE_STATUS)) {
         console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(this.id));

         this.destroy();
      }
   }

   destroy(){
      this.gl.deleteShader(this.id);
      this.compiled = false;
   }
}

export class GLShaderProgram {
   shaders: GLShader[];
   gl: WebGLRenderingContext;
   id: WebGLProgram;
   compiled: boolean;

   constructor(gl: WebGLRenderingContext, vertexSource: string, fragmentSource: string) {
      this.shaders = [];
      this.gl = gl;
      this.compiled = true;

      this.shaders.push(new GLShader(gl, GLShader.Vertex, vertexSource));
      this.shaders.push(new GLShader(gl, GLShader.Fragment, fragmentSource));
   
      this.id = this.gl.createProgram()!;

      this.shaders.forEach(shader => {
         // TODO error checking and shit
         gl.attachShader(this.id, shader.id);
      });
      gl.linkProgram(this.id);

      if (!gl.getProgramParameter(this.id, gl.LINK_STATUS)) {
         console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(this.id));

         this.destroy();
      }
   }

   use(){
      this.gl.useProgram(this.id);
   }

   getAttributeLocation(name: string){
      return this.gl.getAttribLocation(this.id, name);
   }
   getUniformLocation(name: string){
      return this.gl.getUniformLocation(this.id, name);
   }

   setUniformVector2(uniform: WebGLUniformLocation|null, vector: Vector2){
      if(uniform === null) return;
      this.setUniformPosition(uniform, vector.x, vector.y);
   }
   setUniformPosition(uniform: WebGLUniformLocation|null, x: number, y: number){
      if(uniform === null) return;
      this.gl.uniform2f(uniform, x, y);
   }

   setUniformMatrix(uniform: WebGLUniformLocation|null, matrix: Float32Array){
      if(uniform === null) return;
      this.gl.uniformMatrix4fv(uniform, false, matrix);
   }
   setUniformTexture(uniform: WebGLUniformLocation|null, texture: GLTexture){
      if(uniform === null) return;
      this.gl.activeTexture(this.gl.TEXTURE0);

      texture.bind();
      this.gl.uniform1i(uniform, 0);
   }

   destroy(){
      this.shaders.forEach(shader => shader.destroy());
      this.gl.deleteProgram(this.id);
      this.compiled = false;
   }
}