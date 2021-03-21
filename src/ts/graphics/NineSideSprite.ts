import { Sprite } from "./Sprite";
import { Texture } from "./Texture";

export class NineSideSprite{
   texture: Texture;

   xLines: number[];
   yLines: number[];

   constructor(texture: Texture){
      this.texture = texture;

      this.xLines = new Array(4);
      this.yLines = new Array(4);
   }

   setup(x: number, y: number, w: number, h: number, left: number, top: number, right: number, bottom: number){
      this.xLines[0] = x;
      this.xLines[1] = x + left;
      this.xLines[2] = x + w - right;
      this.xLines[3] = x + w;

      this.yLines[0] = y;
      this.yLines[1] = y + top;
      this.yLines[2] = y + h - bottom;
      this.yLines[3] = y + h;
   }

   getSprite(x: number, y: number, sprite: Sprite){
      sprite.offsetX = 0;
      sprite.offsetY = 0;

      sprite.texture = this.texture;
      
      sprite.sourceX = this.xLines[x];
      sprite.sourceY = this.yLines[y];
      sprite.sourceWidth = this.xLines[x + 1] - this.xLines[x];
      sprite.sourceHeight = this.yLines[y + 1] - this.yLines[y];

      return sprite;
   }
}