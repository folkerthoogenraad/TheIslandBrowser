import { Surface } from "graphics/Surface";
import { Texture } from "graphics/Texture";
import { GLTexture } from "./GLTexture";

export class GLSurface extends Surface{
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