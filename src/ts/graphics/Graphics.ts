import { AABB } from "math/AABB";
import { Camera } from "./Camera";
import { NineSideSprite } from "./NineSideSprite";
import { Sprite } from "./Sprite";

export abstract class Graphics{

   public abstract begin(): void;
   public abstract clear(): void;
   public abstract end(): void; 

   public drawSprite(sprite: Sprite, x: number, y: number, scaleX: number = 1, scaleY: number = 1, rotation: number = 0){
      this.drawSpriteRaw(sprite, x, y, scaleX, scaleY, rotation);
   }
   public abstract drawSpriteSimple(sprite: Sprite, x: number, y: number): void;
   
   public abstract drawSpriteRaw(sprite: Sprite, x: number, y: number, scaleX: number, scaleY: number, rotation: number): void;

   public abstract drawRectangle(x: number, y: number, w: number, h: number, fill: boolean): void;

   public drawAABB(aabb: AABB, fill: boolean){
      this.drawRectangle(aabb.left, aabb.top, aabb.width, aabb.height, fill);
   }

   public drawSpriteNineSide(sprite: NineSideSprite, x: number, y: number, w: number, h: number){
      let buffer = new Sprite(sprite.texture);

      let xMiddle = 0;
      let yMiddle = 0;
      let xSize = w;
      let ySize = h;

      // Corners and setup
      buffer = sprite.getSprite(0, 0, buffer);
      this.drawSprite(buffer, x, y);
      xSize -= buffer.width;
      xMiddle = buffer.width;
      yMiddle = buffer.height;
      
      buffer = sprite.getSprite(2, 0, buffer);
      this.drawSprite(buffer, x + w - buffer.width, y);
      xSize -= buffer.width;
      
      buffer = sprite.getSprite(0, 2, buffer);
      this.drawSprite(buffer, x, y + h - buffer.height);
      ySize -= buffer.height;

      buffer = sprite.getSprite(2, 2, buffer);
      this.drawSprite(buffer, x + w - buffer.width, y + h - buffer.height);
      ySize -= buffer.height;

      // Top
      buffer = sprite.getSprite(1, 0, buffer);
      this.drawSprite(buffer, x + xMiddle, y, xSize / buffer.width, 1);

      //Bottom
      buffer = sprite.getSprite(1, 2, buffer);
      this.drawSprite(buffer, x + xMiddle, y + yMiddle + ySize, xSize / buffer.width, 1);

      // Left
      buffer = sprite.getSprite(0, 1, buffer);
      this.drawSprite(buffer, x, y + yMiddle, 1, ySize / buffer.height);
      
      // Right
      buffer = sprite.getSprite(2, 1, buffer);
      this.drawSprite(buffer, x + xMiddle + xSize, y + yMiddle, 1, ySize / buffer.height);

      // Center
      buffer = sprite.getSprite(1, 1, buffer);
      this.drawSprite(buffer, x + xMiddle, y + yMiddle, xSize / buffer.width, ySize / buffer.height);
   }

   public abstract setCamera(camera: Camera): void;
   public setColor(r: number, g: number, b: number, a: number = 1){
      this.setColorRaw(r, g, b, a);
   }
   public abstract setAlpha(a: number): void;

   public abstract setColorRaw(r: number, g: number, b: number, a: number): void;

   public abstract updateSize(): void;
}