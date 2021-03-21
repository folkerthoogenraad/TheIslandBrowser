import { AABB } from "math/AABB";
import { Camera } from "./Camera";
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

   public abstract setCamera(camera: Camera): void;
   public setColor(r: number, g: number, b: number, a: number = 1){
      this.setColorRaw(r, g, b, a);
   }
   public abstract setAlpha(a: number): void;

   public abstract setColorRaw(r: number, g: number, b: number, a: number): void;

   public abstract updateSize(): void;
}