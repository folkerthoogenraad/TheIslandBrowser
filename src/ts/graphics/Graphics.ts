import { Camera } from "./Camera";
import { Sprite } from "./Sprite";

export class Graphics{
   canvas: HTMLCanvasElement;
   context: CanvasRenderingContext2D;

   color: string;

   constructor(canvas: HTMLCanvasElement){
      this.canvas = canvas;
      this.context = canvas.getContext("2d");
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

   drawSprite(sprite: Sprite, x: number, y: number){
      this.context.drawImage(sprite.image, x, y);
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

   setCamera(camera: Camera){
      this.context.resetTransform();

      this.context.scale(camera.width, camera.height);
      this.context.scale(1 / this.canvas.width, 1 / this.canvas.height);

      // this.context.translate(camera.center.x - camera.width / 2, camera.center.y - camera.height / 2);
   }

   setColor(color: string){
      this.color = color;
   }
   getColor(){
      return this.color;
   }
}