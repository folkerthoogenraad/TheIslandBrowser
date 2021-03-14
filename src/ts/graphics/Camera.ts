import { AABB } from "math/AABB";
import { Vector2 } from "math/Vector2";

export class Camera{
   center: Vector2 = new Vector2(640 / 2, 360 / 2);

   // TODO this shouldn't be defined like this, because this depends on the screen aspect ratio...
   width: number = 640;
   height: number = 360;

   getBounds(aabb?: AABB){
      if(aabb === undefined){
         aabb = new AABB();
      }

      return aabb.set(
         this.center.x - this.width / 2,
         this.center.y - this.height / 2,
         this.center.x + this.width / 2,
         this.center.y + this.height / 2
      );
   }

   screenToWorldX(x: number){
      return x * this.width + this.center.x - this.width / 2;
   }
   // screenToWorldY(y: number){
   //    return y * this.height + this.center.y - this.height / 2;
   // }
   screenToWorldY(y: number){
      return y * this.width + this.center.y - this.width / 2;
   }
}