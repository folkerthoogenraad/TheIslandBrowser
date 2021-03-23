import { SpriteSheet } from "./Sprite";
import { Surface } from "./Surface";
import { Texture } from "./Texture";

export abstract class ResourceManager{
   textures: {[key: string]: Texture|undefined};

   constructor(){
      this.textures = {};
   }

   loadSpriteSheet(src: string): SpriteSheet{
      return new SpriteSheet(this.loadTexture(src));
   }

   loadTexture(src: string): Texture{
      if(this.textures[src] === undefined){
         this.textures[src] = this.loadTextureRaw(src);
      }

      return this.textures[src]!;
   }

   loadTextureFromImage(img: HTMLImageElement){
      this.loadTexture(img.src);
   }
   
   abstract loadTextureRaw(src: string): Texture;
   
   abstract createSurface(width: number, height: number): Surface;
}