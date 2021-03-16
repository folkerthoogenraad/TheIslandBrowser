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
   highp vec4 color = texture2D(u_Texture, v_UV) * v_Color;

   // Low color precision :)
   //color.r = floor(color.r * 8.0) / 8.0;
   //color.g = floor(color.g * 8.0) / 8.0;
   //color.b = floor(color.b * 8.0) / 8.0;

   gl_FragColor = color;
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
   setDataFromImage(image: HTMLImageElement){
      this.bind();
      this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image);
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

   static colorData(width: number, height: number){
      let data = new Uint8Array(width * height * 4);

      for(let i = 0; i < width; i++){
         for(let j = 0; j < height; j++){
            let index = (i + j * width) * 4;
            
            let value = 255;

            data[index + 0] = value;
            data[index + 1] = value;
            data[index + 2] = value;
            data[index + 3] = 255;

         }
      }

      return data;
   }
}

class ResourceManager{
   gl: WebGLRenderingContext;
   textures: {[key: string]: Texture|undefined};

   constructor(gl: WebGLRenderingContext){
      this.textures = {};
      this.gl = gl;
   }

   loadTexture(src: string): Texture{
      let found = this.textures[src];
      if(found !== undefined){
         return found;
      }

      let texture = new Texture(this.gl);
      this.textures[src] = texture;

      texture.setData(1, 1, Texture.colorData(1, 1));

      let img = new Image();
      img.onload = () =>{
         texture.setDataFromImage(img);
      };
      img.src = src;
      return texture;
   }
   loadTextureFromImage(img: HTMLImageElement){
      this.loadTexture(img.src);
   }
}

class VertexBatch{
   public static readonly FloatSizeInBytes = 4;

   public static readonly PositionSize = 3;
   public static readonly ColorSize = 4;
   public static readonly UVSize = 2;
   
   public static readonly PositionOffset = 0;
   public static readonly ColorOffset = VertexBatch.PositionSize;
   public static readonly UVOffset = VertexBatch.PositionSize + VertexBatch.ColorSize;

   public static readonly PositionOffsetInBytes = VertexBatch.PositionOffset * VertexBatch.FloatSizeInBytes;
   public static readonly ColorOffsetInBytes = VertexBatch.ColorOffset * VertexBatch.FloatSizeInBytes;
   public static readonly UVOffsetInBytes = VertexBatch.UVOffset * VertexBatch.FloatSizeInBytes;

   public static readonly Stride = VertexBatch.PositionSize + VertexBatch.ColorSize + VertexBatch.UVSize;
   public static readonly StrideInBytes = VertexBatch.Stride * VertexBatch.FloatSizeInBytes;

   gl: WebGLRenderingContext;

   buffer: WebGLBuffer;
   data: Float32Array;
   index: number;

   u: number = 0;
   v: number = 0;
   r: number = 1;
   g: number = 1;
   b: number = 1;
   a: number = 1;

   length: number = 0;

   constructor(gl: WebGLRenderingContext){
      this.gl = gl;
      
      this.data = new Float32Array(3 * 256);
      this.index = 0;

      this.buffer = gl.createBuffer()!;

      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.DYNAMIC_DRAW);
   }
   
   uv(u: number, v: number){
      this.u = u;
      this.v = v;
   }
   
   color(r: number, g: number, b: number, a: number){
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
   }

   vertex(x: number, y: number, z: number){
      let idx = this.index * VertexBatch.Stride + VertexBatch.PositionOffset;

      this.data[idx + 0] = x;
      this.data[idx + 1] = y;
      this.data[idx + 2] = z;
      
      this.data[idx + 3] = this.r;
      this.data[idx + 4] = this.g;
      this.data[idx + 5] = this.b;
      this.data[idx + 6] = this.a;
      
      this.data[idx + 7] = this.u;
      this.data[idx + 8] = this.v;

      // TODO should this submit?
      this.index++;
   }

   flush(){
      // This is nice to optimize with webgl2 to get buffersubdata with offsets and whatnot
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, this.data, this.gl.DYNAMIC_DRAW);

      this.length = this.index;
      this.index = 0;
   }

   destroy(){
      this.gl.deleteBuffer(this.buffer);
   }
}

export function initWebgl(canvas: HTMLCanvasElement){
   canvas.width = canvas.offsetWidth;
   canvas.height = canvas.offsetHeight;
   
   let gl = canvas.getContext("webgl")!;

   if(gl === null){
      return;
   }

   let resources = new ResourceManager(gl);
   
   let program = new ShaderProgram(gl, vsSource, fsSource);

   let positionAttribute = program.getAttributeLocation("position");
   let colorAttribute = program.getAttributeLocation("color");
   let uvAttribute = program.getAttributeLocation("uv");

   let modelViewUniform = program.getUniformLocation("u_MatrixModelView");
   let projectionUniform = program.getUniformLocation("u_MatrixProjection");
   let textureUniform = program.getUniformLocation("u_Texture");

   // const vertexBuffer = gl.createBuffer();

   // gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);


   // let triangleCount = 6;
   // let triangleData = [
   //    0, 0, 0,  1, 0, 0, 1,   0, 0,
   //    0, 1, 0,  0, 1, 0, 1,   0, 1,
   //    1, 1, 0,  0, 0, 1, 1,   1, 1,
      
   //    0, 0, 0,  1, 0, 0, 1,   0, 0,
   //    1, 1, 0,  0, 0, 1, 1,   1, 1,
   //    1, 0, 0,  0, 0, 0, 1,   1, 0,
   // ];

   // gl.bufferData(gl.ARRAY_BUFFER,
   //    new Float32Array(triangleData),
   //    gl.STATIC_DRAW);

   let texture = resources.loadTexture("/assets/img/Player.png");

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

   let batch = new VertexBatch(gl);

   gl.enable(gl.BLEND);
   gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);  

   let drawScene = () => {
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      // Setup array buffers
      // gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      batch.color(1, 0, 0, 1); batch.uv(0, 0); batch.vertex(0, 0, 0);
      batch.color(1, 0, 0, 1); batch.uv(1, 0); batch.vertex(1, 0, 0);
      batch.color(1, 0, 0, 1); batch.uv(1, 1); batch.vertex(1, 1, 0);
      batch.flush();

      // Vertex
      gl.vertexAttribPointer(positionAttribute, 3, gl.FLOAT, false, VertexBatch.StrideInBytes, VertexBatch.PositionOffsetInBytes);
      gl.vertexAttribPointer(colorAttribute, 4, gl.FLOAT, false, VertexBatch.StrideInBytes, VertexBatch.ColorOffsetInBytes);
      gl.vertexAttribPointer(uvAttribute, 2, gl.FLOAT, false, VertexBatch.StrideInBytes, VertexBatch.UVOffsetInBytes);

      // Enable all
      gl.enableVertexAttribArray(positionAttribute);
      gl.enableVertexAttribArray(colorAttribute);
      gl.enableVertexAttribArray(uvAttribute);

      program.use();
      program.setUniformMatrix(modelViewUniform!, modelViewMatrix);
      program.setUniformMatrix(projectionUniform!, projectionMatrix);

      program.setUniformTexture(textureUniform!, texture);

      gl.drawArrays(gl.TRIANGLES, 0, batch.length);
   }

   drawScene();

   (window as any).drawScene = drawScene;
}