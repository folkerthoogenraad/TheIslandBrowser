import { Vector2 } from "./Vector2";

export class AABB{
   position: Vector2;
   size: Vector2;

   constructor(position: Vector2 = new Vector2(), size: Vector2 = new Vector2()) { 
      this.position = position;
      this.size = size;
   }

   get left() { return this.position.x; }
   get top() { return this.position.y; }
   
   get right() {return this.position.x + this.size.x; }
   get bottom() {return this.position.y + this.size.y; }

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
}