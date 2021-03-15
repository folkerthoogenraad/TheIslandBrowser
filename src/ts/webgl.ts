const vsSource = `
attribute vec4 position;
attribute vec4 color;
attribute vec2 uv;

uniform mat4 u_MatrixModelView;
uniform mat4 u_MatrixProjection;

varying highp vec4 v_Color;
varying highp vec2 v_UV;

void main() {
   v_Color = color;
   v_UV = uv;
   gl_Position = u_MatrixProjection * u_MatrixModelView * position;
}
`;

const fsSource = `
varying highp vec4 v_Color;
varying highp vec2 v_UV;

uniform sampler2D u_Texture;

void main() {
   gl_FragColor = texture2D(u_Texture, v_UV) * v_Color;
}
`;

type ShaderType = number;

class Shader {
   static readonly Vertex: ShaderType = 0; 
   static readonly Fragment: ShaderType = 1; 

   gl: WebGLRenderingContext;
   id: WebGLShader;

   compiled: boolean;

   constructor(gl: WebGLRenderingContext, type: ShaderType, source: string){
      this.gl = gl;

      this.id = this.gl.createShader(type === Shader.Vertex ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER)!;
   
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

class ShaderProgram {
   shaders: Shader[];
   gl: WebGLRenderingContext;
   id: WebGLProgram;
   compiled: boolean;

   constructor(gl: WebGLRenderingContext, vertexSource: string, fragmentSource: string) {
      this.shaders = [];
      this.gl = gl;
      this.compiled = true;

      this.shaders.push(new Shader(gl, Shader.Vertex, vertexSource));
      this.shaders.push(new Shader(gl, Shader.Fragment, fragmentSource));
   
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
   setUniformTexture(uniform: WebGLUniformLocation, texture: Texture){
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

class Texture{
   gl: WebGLRenderingContext;
   id: WebGLTexture;

   constructor(gl: WebGLRenderingContext){
      this.gl = gl;

      this.id = gl.createTexture()!;

      this.bind();
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
   }

   setData(width: number, height: number, data: Uint8Array){
      this.bind();
      this.gl.texImage2D(this.gl.TEXTURE_2D,
         0, this.gl.RGBA, width, height, 0, 
         this.gl.RGBA, this.gl.UNSIGNED_BYTE, data);
   }

   bind(){
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.id);
   }

   destroy(){
      this.gl.deleteTexture(this.id);
   }

   static checkerboardData(width: number, height: number){
      let data = new Uint8Array(width * height * 4);


      for(let i = 0; i < width; i++){
         for(let j = 0; j < height; j++){
            let index = (i + j * width) * 4;
            
            let dark = ((i + j) % 2) == 0;
            
            let value = dark ? 100 : 255;

            data[index + 0] = value;
            data[index + 1] = value;
            data[index + 2] = value;
            data[index + 3] = 255;

         }
      }

      return data;
   }
}

export function initWebgl(canvas: HTMLCanvasElement){
   canvas.width = canvas.offsetWidth;
   canvas.height = canvas.offsetHeight;
   
   let gl = canvas.getContext("webgl")!;

   if(gl === null){
      return;
   }
   
   let program = new ShaderProgram(gl, vsSource, fsSource);

   let positionAttribute = program.getAttributeLocation("position");
   let colorAttribute = program.getAttributeLocation("color");
   let uvAttribute = program.getAttributeLocation("uv");

   let modelViewUniform = program.getUniformLocation("u_MatrixModelView");
   let projectionUniform = program.getUniformLocation("u_MatrixProjection");
   let textureUniform = program.getUniformLocation("u_Texture");

   const vertexBuffer = gl.createBuffer();

   gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);


   let triangleCount = 6;
   let triangleData = [
      0, 0, 0,  1, 0, 0, 1,   0, 0,
      0, 1, 0,  0, 1, 0, 1,   0, 1,
      1, 1, 0,  0, 0, 1, 1,   1, 1,
      
      0, 0, 0,  1, 0, 0, 1,   0, 0,
      1, 1, 0,  0, 0, 1, 1,   1, 1,
      1, 0, 0,  0, 1, 0, 1,   1, 0,
   ];

   gl.bufferData(gl.ARRAY_BUFFER,
      new Float32Array(triangleData),
      gl.STATIC_DRAW);

   
   let texture = new Texture(gl);
   texture.setData(16, 16, Texture.checkerboardData(16, 16));

   const projectionMatrix = new Float32Array([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
   ]);
   const modelViewMatrix = new Float32Array([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
   ]);

   let drawScene = () => {
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      // Setup array buffers
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

      const floatSize = 4;
      const positionSize = 3;
      const colorSize = 4;
      const uvSize = 2;
      const stride = (positionSize + colorSize + uvSize) * floatSize;
      
      // Vertex
      gl.vertexAttribPointer(positionAttribute, 3, gl.FLOAT, false, stride, 0);
      gl.vertexAttribPointer(colorAttribute, 4, gl.FLOAT, false, stride, positionSize * floatSize);
      gl.vertexAttribPointer(uvAttribute, 2, gl.FLOAT, false, stride, (positionSize + colorSize) * floatSize);

      // Enable all
      gl.enableVertexAttribArray(positionAttribute);
      gl.enableVertexAttribArray(colorAttribute);
      gl.enableVertexAttribArray(uvAttribute);

      program.use();
      program.setUniformMatrix(modelViewUniform!, modelViewMatrix);
      program.setUniformMatrix(projectionUniform!, projectionMatrix);

      program.setUniformTexture(textureUniform!, texture);

      gl.drawArrays(gl.TRIANGLES, 0, triangleCount);
   }

   drawScene();
}