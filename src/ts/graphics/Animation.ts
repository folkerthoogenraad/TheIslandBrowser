import { Sprite } from "./Sprite";

export class Animation{
   sprites: Sprite[] = [];
   frameRate: number = 12;
   
   private _index: number = 0;

   update(delta: number){
      // TODO cap the _index variable
      this._index += delta * this.frameRate;
   }

   addFrame(sprite: Sprite){
      this.sprites.push(sprite);
      return this;
   }

   center(){
      this.sprites.forEach(sprite => sprite.center());
      return this;
   }

   get index(){
      return this._index % this.frames;
   }
   get frames(){
      return this.sprites.length;
   }
   get frame(){
      return this.sprites[Math.floor(this.index)];
   }
}