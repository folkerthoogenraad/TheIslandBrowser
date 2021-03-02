import { Vector2 } from "./Vector2";

export class AABB{
   position: Vector2;
   offset: Vector2;
   size: Vector2;

   constructor(position: Vector2 = new Vector2(), size: Vector2 = new Vector2(), offset: Vector2 = new Vector2()) { 
      this.position = position;
      this.size = size;
      this.offset = offset;
   }

   get left() { return this.position.x - this.offset.x; }
   get top() { return this.position.y - this.offset.y; }
   
   get right() {return this.position.x + this.size.x - this.offset.x; }
   get bottom() {return this.position.y + this.size.y - this.offset.y; }

   get width() { return this.size.x; }
   get height() { return this.size.y; }

   overlaps(other: AABB){
      return this.overlapsX(other) && this.overlapsY(other);
   }
   overlapsX(other: AABB){
      if(this.left >= other.right) return false;
      if(this.right <= other.left) return false;

      return true;
   }
   overlapsY(other: AABB){
      if(this.top >= other.bottom) return false;
      if(this.bottom <= other.top) return false;
      
      return true;
   }

   minOverlapX(other: AABB){
      let motionLeft = other.right - this.left;
      let motionRight = this.right - other.left;

      if(motionLeft > motionRight) return -motionRight;
      return motionLeft;
   }
   minOverlapY(other: AABB){
      let motionUp = other.bottom - this.top;
      let motionDown = this.bottom - other.top;

      if(motionUp > motionDown) return -motionDown;
      return motionUp;
   }

   static Create(x: number, y: number, w: number, h: number){
      return new AABB(new Vector2(x, y), new Vector2(w, h));
   }
}