import { Vector2 } from "./Vector2";

export class AABB{
   position: Vector2 = new Vector2();
   size: Vector2 = new Vector2();

   constructor(){

   }

   get left() { return this.position.x; }
   get top() { return this.position.y; }
   
   get right() {return this.position.x + this.size.x; }
   get bottom() {return this.position.y + this.size.y; }

   overlaps(other: AABB){
      // TODO create this, make sure overlaps only happen if they _overlap_. So, if the right and the left are ===, they don't overlap.
   }
}