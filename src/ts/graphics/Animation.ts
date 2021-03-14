import { Sprite } from "./Sprite";

export class Animation{
   frameRate: number = 12;
   
   private sprites: Sprite[] = [];
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
   
   setOffset(x: number, y: number){
      this.sprites.forEach(sprite => sprite.setOffset(x, y));
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
   get duration(){
      return this.frames / this.frameRate;
   }

   clone(){
      let a =  new Animation();
      
      a._index = this._index;
      a.frameRate = this.frameRate;
      a.sprites = this.sprites;

      return a;
   }
}