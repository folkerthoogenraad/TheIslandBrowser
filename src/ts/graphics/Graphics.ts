import { AABB } from "math/AABB";
import { BlendMode } from "./BlendMode";
import { Camera } from "./Camera";
import { Effect } from "./Effect";
import { NineSideSprite } from "./NineSideSprite";
import { Sprite } from "./Sprite";
import { Surface } from "./Surface";
import { Texture } from "./Texture";

export abstract class Graphics{

   public abstract begin(): void;
   public abstract clear(): void;
   public abstract end(): void; 

   public drawSprite(sprite: Sprite, x: number, y: number, scaleX: number = 1, scaleY: number = 1, rotation: number = 0){
      this.drawSpriteRaw(sprite, x, y, scaleX, scaleY, rotation);
   }
   public abstract drawSpriteSimple(sprite: Sprite, x: number, y: number): void;
   
   public abstract drawSpriteRaw(sprite: Sprite, x: number, y: number, scaleX: number, scaleY: number, rotation: number): void;
   public abstract drawTexture(texture: Texture, x: number, y: number, scaleX: number, scaleY: number): void;

   public drawSurface(surface: Surface, x: number, y: number, scaleX: number, scaleY: number){
      if(surface.texture === undefined){ throw new Error("Can't draw empty surface"); }
      this.drawTexture(surface.texture, x, y, scaleX, scaleY);
   }

   public drawSpriteTiled(sprite: Sprite, x: number, y: number, w: number, h: number, scaleX: number = 1, scaleY: number = 1){
      let spriteWidth = sprite.width * scaleX;
      let spriteHeight = sprite.height * scaleY;

      let tileX = w / spriteWidth;
      let tileY = h / spriteHeight;

      for(let i = 0; i < tileX; i++){
         for(let j = 0; j < tileY; j++){
            this.drawSprite(sprite, i * spriteWidth + x, j * spriteHeight + y, scaleX, scaleY);
         }
      }
   }

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
      this.drawSpriteTiled(buffer, x + xMiddle, y, xSize, buffer.height);

      //Bottom
      buffer = sprite.getSprite(1, 2, buffer);
      this.drawSpriteTiled(buffer, x + xMiddle, y + yMiddle + ySize, xSize, buffer.height);

      // Left
      buffer = sprite.getSprite(0, 1, buffer);
      this.drawSpriteTiled(buffer, x, y + yMiddle, buffer.width, ySize);
      
      // Right
      buffer = sprite.getSprite(2, 1, buffer);
      this.drawSpriteTiled(buffer, x + xMiddle + xSize, y + yMiddle, buffer.width, ySize);

      // Center
      buffer = sprite.getSprite(1, 1, buffer);
      this.drawSpriteTiled(buffer, x + xMiddle, y + yMiddle, xSize, ySize);
   }

   public abstract push(): void;
   public abstract pop(): void;
   
   public abstract setSurface(surface?: Surface): void;
   
   public setCamera(camera: Camera){
      this.setView(camera.center.x - camera.width / 2, camera.center.y - camera.height / 2, camera.width, camera.height);
   }
   public abstract setView(x: number, y: number, w: number, h: number): void;
   public setColor(r: number, g: number, b: number, a: number = 1){
      this.setColorRaw(r, g, b, a);
   }
   public abstract setAlpha(a: number): void;

   public abstract setColorRaw(r: number, g: number, b: number, a: number): void;

   public abstract updateSize(): void;

   public abstract setBlendMode(blendMode: BlendMode): void;
   
   abstract get viewWidth(): number;
   abstract get viewHeight(): number;

   abstract setSecondaryTexture(texture?: Texture): void;

   abstract setEffect(effect?: Effect): void;

   resetEffect(){
      this.setEffect(undefined);
   }
}