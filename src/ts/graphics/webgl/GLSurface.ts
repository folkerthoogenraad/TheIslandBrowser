import { Surface } from "graphics/Surface";
import { Texture } from "graphics/Texture";
import { GLTexture } from "./GLTexture";

export abstract class GLSurface extends Surface{

   abstract bind(): void;
   abstract unbind(): void;

   resize(width: number, height: number){
      
   }

   abstract destroy(): void;
}

export class GLFrameBufferSurface extends GLSurface{
   gl: WebGLRenderingContext;

   texture: GLTexture;
   id: WebGLFramebuffer;

   constructor(gl: WebGLRenderingContext, width: number, height: number){
      super();
      this.gl = gl;

      this.id = this.gl.createFramebuffer()!;
      this.bind();

      this.texture = new GLTexture(this.gl);
      this.resize(width, height);

      this.gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.id, 0);

      this.unbind();
   }

   bind(){
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.id);
   }
   unbind(){
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
   }

   resize(width: number, height: number){
      this.texture.setEmpty(width, height);
   }

   destroy(){
      this.gl.deleteBuffer(this.id);
      this.texture.destroy();
   }
}
export class GLWindowSurface extends GLSurface{
   gl: WebGLRenderingContext;

   get width(){ return this.gl.canvas.width; }
   get height(){ return this.gl.canvas.height; }

   constructor(gl: WebGLRenderingContext){
      super();

      this.gl = gl;

      this.texture = undefined;
   }

   bind(){
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
   }
   unbind(){
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
   }

   resize(width: number, height: number){
      this.gl.canvas.width = width;
      this.gl.canvas.height = height;
   }

   destroy(){
   }
}