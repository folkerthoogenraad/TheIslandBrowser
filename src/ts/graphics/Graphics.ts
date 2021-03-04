import { AABB } from "math/AABB";
import { Camera } from "./Camera";
import { Sprite } from "./Sprite";

export class Graphics{
   canvas: HTMLCanvasElement;
   context: CanvasRenderingContext2D;
   color: string = "white";

   constructor(canvas: HTMLCanvasElement){
      this.canvas = canvas;
      this.context = canvas.getContext("2d")!;

      this.updateSize();
   }

   reset(){
      this.context.resetTransform();
   }

   clearScreen(){
      this.clear(0, 0, this.canvas.width, this.canvas.height);
   }

   clear(x: number, y: number, width: number, height: number){
      this.context.clearRect(x, y, width, height);
   }

   drawSprite(sprite: Sprite, x: number, y: number, scaleX: number = 1, scaleY: number = 1, rotation: number = 0){
      this.context.save();

      this.context.translate(x, y);
      this.context.scale(scaleX, scaleY);
      this.context.rotate(rotation);

      this.context.drawImage(sprite.image, 
         sprite.sourceX, sprite.sourceY, sprite.sourceWidth, sprite.sourceHeight,
         - sprite.offsetX, - sprite.offsetY, sprite.width, sprite.height);

      this.context.restore();
   }

   drawSpriteSimple(sprite: Sprite, x: number, y: number){
      this.context.drawImage(sprite.image, 
         sprite.sourceX, sprite.sourceY, sprite.sourceWidth, sprite.sourceHeight,
         x - sprite.offsetX, y - sprite.offsetY, sprite.width, sprite.height);
   }

   drawRectangle(x: number, y: number, w: number, h: number, fill: boolean){
      if(fill){
         this.context.fillStyle = this.color;
         this.context.fillRect(x, y, w, h);
      }
      else{
         this.context.strokeStyle = this.color;
         this.context.rect(x, y, w, h);
      }
   }

   drawAABB(aabb: AABB, fill: boolean){
      this.drawRectangle(aabb.left, aabb.top, aabb.width, aabb.height, fill);
   }

   setCamera(camera: Camera){
      this.context.resetTransform();

      let cameraHeight = camera.height;
      let cameraWidth = this.canvas.width / this.canvas.height * cameraHeight;

      this.context.scale(1 / cameraWidth, 1 / cameraHeight);
      this.context.scale(this.canvas.width, this.canvas.height);

      this.context.translate(-(camera.center.x - cameraWidth / 2), -(camera.center.y - cameraHeight / 2));
   }

   setColor(color: string){
      this.color = color;
   }
   getColor(){
      return this.color;
   }

   updateSize(){
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
      this.context.imageSmoothingEnabled = false;
      this.context.imageSmoothingQuality = "low";
   }
}