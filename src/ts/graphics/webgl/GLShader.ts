import { GLTexture } from "./GLTexture";

export const DefaultVertexSource = `
attribute vec3 position;
attribute vec4 color;
attribute vec2 uv;

uniform mat4 u_MatrixModelView;
uniform mat4 u_MatrixProjection;

varying highp vec4 v_Color;
varying highp vec2 v_UV;

void main() {
   v_Color = color;
   v_UV = uv;
   gl_Position = u_MatrixProjection * u_MatrixModelView * vec4(position, 1.0);
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

   modelViewUniform : WebGLUniformLocation = 0;
   projectionUniform : WebGLUniformLocation = 0;
   textureUniform : WebGLUniformLocation = 0;

   load(program: GLShaderProgram){
      this.positionAttribute = program.getAttributeLocation("position");
      this.colorAttribute = program.getAttributeLocation("color");
      this.uvAttribute = program.getAttributeLocation("uv");

      this.modelViewUniform = program.getUniformLocation("u_MatrixModelView")!;
      this.projectionUniform = program.getUniformLocation("u_MatrixProjection")!;
      this.textureUniform = program.getUniformLocation("u_Texture")!;
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

   setUniformMatrix(uniform: WebGLUniformLocation, matrix: Float32Array){
      this.gl.uniformMatrix4fv(uniform, false, matrix);
   }
   setUniformTexture(uniform: WebGLUniformLocation, texture: GLTexture){
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