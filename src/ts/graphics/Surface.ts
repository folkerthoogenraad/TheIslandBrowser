import { Texture } from "./Texture";

export abstract class Surface{
   texture!: Texture;
   
   get width(){ return this.texture.width; }
   get height(){ return this.texture.height; }

   resize(width: number, height: number){
      
   }
}