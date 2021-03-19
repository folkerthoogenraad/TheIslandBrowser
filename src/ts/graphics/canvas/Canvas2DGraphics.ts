import { Graphics } from "graphics/Graphics";
import { AABB } from "math/AABB";
import { Camera } from "graphics/Camera";
import { Sprite } from "graphics/Sprite";

export class Canvas2DGraphics extends Graphics{
   canvas: HTMLCanvasElement;
   context: CanvasRenderingContext2D;
   color: string = "white";

   constructor(canvas: HTMLCanvasElement){
      super();
      this.canvas = canvas;
      this.context = canvas.getContext("2d")!;

      this.updateSize();
   }

   begin(){
      this.context.resetTransform();
   }
   end(){
      
   }

   clear(){
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
   }

   drawSpriteRaw(sprite: Sprite, x: number, y: number, scaleX: number = 1, scaleY: number = 1, rotation: number = 0){
      this.context.save();

      this.context.translate(x, y);
      this.context.scale(scaleX, scaleY);
      this.context.rotate(rotation);

      this.context.drawImage(sprite.texture as HTMLCanvasElement, 
         sprite.sourceX, sprite.sourceY, sprite.sourceWidth, sprite.sourceHeight,
         - sprite.offsetX, - sprite.offsetY, sprite.width, sprite.height);

      this.context.restore();
   }

   drawSpriteSimple(sprite: Sprite, x: number, y: number){
      this.context.drawImage(sprite.texture as HTMLCanvasElement, 
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
      let cameraWidth = camera.width;//this.canvas.width / this.canvas.height * cameraHeight;

      this.context.scale(1 / cameraWidth, 1 / cameraHeight);
      this.context.scale(this.canvas.width, this.canvas.height);

      this.context.translate(-(camera.center.x - cameraWidth / 2), -(camera.center.y - cameraHeight / 2));
   }

   setColorRaw(r: number, g: number, b: number, a: number){
      this.color = `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${a})`;
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