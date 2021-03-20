import { ResourceManager } from "graphics/ResourceManager";
import { Texture } from "graphics/Texture";

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
}