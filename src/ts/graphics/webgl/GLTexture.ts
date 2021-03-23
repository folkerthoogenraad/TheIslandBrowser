import { Texture } from "graphics/Texture";

export class GLTexture implements Texture{
   gl: WebGLRenderingContext;
   id: WebGLTexture;

   width: number;
   height: number;

   constructor(gl: WebGLRenderingContext){
      this.gl = gl;

      this.id = gl.createTexture()!;

      this.width = 1;
      this.height = 1;

      this.setData(1, 1, new Uint8Array([255,0,255, 255]));

      this.bind();
      
      // TODO move this to constructor
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
   }

   setEmpty(width: number, height: number){
      this.width = width;
      this.height = height;
      
      this.bind();
      this.gl.texImage2D(this.gl.TEXTURE_2D,
         0, this.gl.RGBA, width, height, 0, 
         this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
   }

   setData(width: number, height: number, data: Uint8Array){
      this.width = width;
      this.height = height;

      this.bind();
      this.gl.texImage2D(this.gl.TEXTURE_2D,
         0, this.gl.RGBA, width, height, 0, 
         this.gl.RGBA, this.gl.UNSIGNED_BYTE, data);
   }
   setDataFromImage(image: HTMLImageElement){
      this.width = image.width;
      this.height = image.height;

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
            
            data[index + 0] = 255;
            data[index + 1] = 255;
            data[index + 2] = 255;
            data[index + 3] = 255;

         }
      }

      return data;
   }
}