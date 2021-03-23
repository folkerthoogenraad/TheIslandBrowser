import { ResourceManager } from "graphics/ResourceManager";
import { Texture } from "graphics/Texture";
import { Canvas2DSurface } from "./Canvas2DSurface";

/**
 * @deprecated The method should not be used
 */
export class Canvas2DResourceManager extends ResourceManager{
   constructor(){
      super();
   }

   loadTextureRaw(src: string): Texture{
      let image = new Image();
      image.src = src;

      return image;
   }
   
   loadTextureFromImage(img: HTMLImageElement){
      this.loadTexture(img.src);
   }
   
   createSurface(width: number, height: number){
      return new Canvas2DSurface();   
   }
}