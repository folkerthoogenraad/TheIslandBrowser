import { AABB } from "math/AABB";
import { Vector2 } from "math/Vector2";
import { Collider } from "./Collider";

export class TileCollider extends Collider{
   size: Vector2;

   top: boolean = false;
   left: boolean = false;
   bottom: boolean = false;
   right: boolean = false;

   constructor(size: Vector2 = new Vector2()){
      super();
      this.size = size;
   }

   getBounds(position: Vector2, out: AABB)
   {  
      return out.set(
         position.x, 
         position.y,
         position.x + this.size.x,
         position.y + this.size.y);
   }
}