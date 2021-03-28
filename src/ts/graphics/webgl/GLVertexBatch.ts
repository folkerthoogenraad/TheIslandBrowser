
export class GLVertexBatch{
   public static readonly FloatSizeInBytes = 4;

   public static readonly PositionSize = 3;
   public static readonly ColorSize = 4;
   public static readonly UVSize = 2;
   
   public static readonly PositionOffset = 0;
   public static readonly ColorOffset = GLVertexBatch.PositionSize;
   public static readonly UVOffset = GLVertexBatch.PositionSize + GLVertexBatch.ColorSize;

   public static readonly PositionOffsetInBytes = GLVertexBatch.PositionOffset * GLVertexBatch.FloatSizeInBytes;
   public static readonly ColorOffsetInBytes = GLVertexBatch.ColorOffset * GLVertexBatch.FloatSizeInBytes;
   public static readonly UVOffsetInBytes = GLVertexBatch.UVOffset * GLVertexBatch.FloatSizeInBytes;

   public static readonly Stride = GLVertexBatch.PositionSize + GLVertexBatch.ColorSize + GLVertexBatch.UVSize;
   public static readonly StrideInBytes = GLVertexBatch.Stride * GLVertexBatch.FloatSizeInBytes;

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

   get left() { return this.data.length / GLVertexBatch.StrideInBytes - this.index - 1; }

   constructor(gl: WebGLRenderingContext){
      this.gl = gl;
      
      this.data = new Float32Array(3 * 1024);
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
      let idx = this.index * GLVertexBatch.Stride + GLVertexBatch.PositionOffset;

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
      if(this.index === 0){
         this.length = this.index;
         return;
      }
      
      // This is nice to optimize with webgl2 to get buffersubdata with offsets and whatnot
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);


      this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, this.data.subarray(0, this.index * GLVertexBatch.Stride));

      this.length = this.index;
      this.index = 0;
   }

   destroy(){
      this.gl.deleteBuffer(this.buffer);
   }
}