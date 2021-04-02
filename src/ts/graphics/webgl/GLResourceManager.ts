import { ResourceManager } from "graphics/ResourceManager";
import { Texture } from "graphics/Texture";
import { GLShaderProgram } from "./GLShader";
import { GLFrameBufferSurface, GLSurface } from "./GLSurface";
import { GLTexture } from "./GLTexture";

export class GLResourceManager extends ResourceManager{
   gl: WebGLRenderingContext;

   constructor(gl: WebGLRenderingContext){
      super();

      this.gl = gl;
   }

   loadTextureRaw(src: string): Texture{
      let texture = new GLTexture(this.gl);
      this.textures[src] = texture;

      let img = new Image();
      img.onload = () =>{
         texture.setDataFromImage(img);
      };
      img.src = src;
      return texture;
   }

   createSurface(width: number, height: number){
      return new GLFrameBufferSurface(this.gl, width, height);
   }
   
   createEffect(vertexSource: string, fragmentSource: string){
      return new GLShaderProgram(this.gl, vertexSource, fragmentSource);
   }
}