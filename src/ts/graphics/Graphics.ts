import { AABB } from "math/AABB";
import { Camera } from "./Camera";
import { Sprite } from "./Sprite";

export abstract class Graphics{

   public abstract reset(): void;
   public abstract clear(): void;

   public abstract drawSprite(sprite: Sprite, x: number, y: number, scaleX: number, scaleY: number, rotation: number): void;
   public abstract drawSpriteSimple(sprite: Sprite, x: number, y: number): void;

   public abstract drawRectangle(x: number, y: number, w: number, h: number, fill: boolean): void;

   public drawAABB(aabb: AABB, fill: boolean){
      this.drawRectangle(aabb.left, aabb.top, aabb.width, aabb.height, fill);
   }

   public abstract setCamera(camera: Camera): void;
   public abstract setColor(color: string): void;

   public abstract updateSize(): void;
}