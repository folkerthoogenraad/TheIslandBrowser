import { AABB } from "math/AABB";
import { Vector2 } from "math/Vector2";
import { Collider } from "./Collider";

export class BoxCollider extends Collider{
   offset: Vector2;
   size: Vector2;

   constructor(size: Vector2 = new Vector2(), offset: Vector2 = new Vector2()){
      super();
      this.size = size;
      this.offset = offset;
   }

   getBounds(position: Vector2, out: AABB)
   {  
      return out.set(
         position.x - this.offset.x, 
         position.y - this.offset.y,
         position.x + this.size.x - this.offset.x,
         position.y + this.size.y - this.offset.y);
   }

   static fromAABB(aabb: AABB){
      return new BoxCollider(new Vector2(aabb.width, aabb.height));
   }
}