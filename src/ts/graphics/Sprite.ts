import { Animation } from "./Animation";

export class Sprite{
   image: CanvasImageSource;

   offsetX: number = 0;
   offsetY: number = 0;

   sourceX: number = 0;
   sourceY: number = 0;
   sourceWidth: number = 0;
   sourceHeight: number = 0;
   
   constructor(image: CanvasImageSource){
      this.image = image;

      this.sourceWidth = image.width as number;
      this.sourceHeight = image.height as number;
   }

   get width() { return this.sourceWidth; }
   get height() { return this.sourceHeight; }

   center(){
      this.offsetX = this.width / 2;
      this.offsetY = this.height / 2;

      return this;
   }
}

export class SpriteSheet{
   image: CanvasImageSource;

   constructor(image: CanvasImageSource){
      this.image = image;
   }

   getSprite(x: number, y: number, w: number, h: number){
      let sprite = new Sprite(this.image);

      sprite.sourceX = x;
      sprite.sourceY = y;
      sprite.sourceWidth = w;
      sprite.sourceHeight = h;

      return sprite;
   }
   
   getAnimation(x: number, y: number, w: number, h: number, count: number){
      let animation = new Animation();

      for(let i = 0; i < count; i++){
         let sprite = new Sprite(this.image);
   
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