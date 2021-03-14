import { AABB } from "math/AABB";
import { Vector2 } from "math/Vector2";
import { BoxCollider } from "./BoxCollider";
import { Collider } from "./Collider";
import { TileCollider } from "./TileCollider";

// TODO prevent memory allocation here.
// Should maybe be a collision class, that has 
// all this memory preallocated.

// It be fine for now tho

export function unstuck(self: Collider, other: Collider, relativePosition: Vector2, relativeVelocity: Vector2): Vector2|undefined{
   if(self instanceof BoxCollider){
      if(other instanceof BoxCollider){
         return unstuckBoxBox(self, other, relativePosition, relativeVelocity);
      }
      else if(other instanceof TileCollider){
         return unstuckBoxTile(self, other, relativePosition, relativeVelocity);
      }
      else{
         throw new Error(`No collision found for ${self.constructor.name} and ${other.constructor.name}`);
      }
   }
   else if(self instanceof TileCollider){
      throw new Error(`No collision found for ${self.constructor.name} and ${other.constructor.name}`);
      // if(other instanceof BoxCollider){
      //    return unstuckBoxTile(otherPosition, other, position, self, unstuckVector)?.negate();
      // }
      // else{
      // }
   }
   else{
      throw new Error(`No collision found for ${self.constructor.name} and ${other.constructor.name}`);
   }
}

export function unstuckBoxTile(self: BoxCollider, other: TileCollider, relativePosition: Vector2, relativeVelocity: Vector2): Vector2|undefined{
   let selfBounds = self.getBounds(new Vector2(), new AABB());
   let otherBounds = other.getBounds(relativePosition, new AABB());

   let xOverlap = 0;
   let yOverlap = 0;

   let xCollided = false;
   let yCollided = false;

   if(other.left && relativeVelocity.x > 0){
      xOverlap = -(selfBounds.right - otherBounds.left);
      xCollided = true;
   }else if(other.right && relativeVelocity.x <= 0){
      xOverlap = -(selfBounds.left - otherBounds.right);
      xCollided = true;
   }
   
   if(other.top && relativeVelocity.y > 0){
      yOverlap = -(selfBounds.bottom - otherBounds.top);
      yCollided = true;
   }else if(other.bottom && relativeVelocity.y <= 0){
      yOverlap = -(selfBounds.top - otherBounds.bottom);
      yCollided = true;
   }

   // If it _can_ do both axis, do only _one_
   if(xCollided && yCollided){
      if(Math.abs(xOverlap) > Math.abs(yOverlap)){
         xOverlap = 0;
      }
      else{
         yOverlap = 0;
      }
   }

   return new Vector2(xOverlap, yOverlap);
}

export function unstuckBoxBox(self: BoxCollider, other: BoxCollider, relativePosition: Vector2, relativeVelocity: Vector2): Vector2|undefined{
   let selfBounds = self.getBounds(new Vector2(), new AABB());
   let otherBounds = other.getBounds(relativePosition, new AABB());

   let xOverlap = selfBounds.minOverlapXWithBias(otherBounds, relativeVelocity.x);
   let yOverlap = selfBounds.minOverlapYWithBias(otherBounds, relativeVelocity.y);

   if(Math.abs(xOverlap) < Math.abs(yOverlap)){
      return new Vector2(xOverlap, 0);
   }
   else{
      return new Vector2(0, yOverlap);
   }
}