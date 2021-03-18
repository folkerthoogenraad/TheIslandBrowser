import { Animation } from "./Animation";
import { Texture } from "./Texture";

export class Sprite{
   texture: Texture;

   offsetX: number = 0;
   offsetY: number = 0;

   sourceX: number = 0;
   sourceY: number = 0;
   sourceWidth: number = 0;
   sourceHeight: number = 0;
   
   constructor(texture: Texture){
      this.texture = texture;

      this.sourceWidth = texture.width as number;
      this.sourceHeight = texture.height as number;
   }

   get width() { return this.sourceWidth; }
   get height() { return this.sourceHeight; }

   center(){
      this.offsetX = this.width / 2;
      this.offsetY = this.height / 2;

      return this;
   }
   setOffset(x: number, y: number){
      this.offsetX = x;
      this.offsetY = y;

      return this;
   }
}

export class SpriteSheet{
   texture: Texture;

   constructor(texture: Texture){
      this.texture = texture;
   }

   getSprite(x: number, y: number, w: number, h: number){
      let sprite = new Sprite(this.texture);

      sprite.sourceX = x;
      sprite.sourceY = y;
      sprite.sourceWidth = w;
      sprite.sourceHeight = h;

      return sprite;
   }
   
   getAnimation(x: number, y: number, w: number, h: number, count: number){
      let animation = new Animation();

      for(let i = 0; i < count; i++){
         let sprite = new Sprite(this.texture);
   
         sprite.sourceX = x + i * w;
         sprite.sourceY = y;
         sprite.sourceWidth = w;
         sprite.sourceHeight = h;

         animation.addFrame(sprite);
      }

      return animation;
   }

   static fromHTML(id: string){
      let element = document.getElementById(id) as HTMLImageElement;

      return new SpriteSheet(element);
   }
}