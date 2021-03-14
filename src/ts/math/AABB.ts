import { Vector2 } from "./Vector2";

export class AABB{

   left: number;
   top: number;
   bottom: number;
   right: number;

   constructor(left: number = 0, top: number = 0, right: number = 0, bottom: number = 0) { 
      this.left = left;
      this.top = top;
      this.right = right;
      this.bottom = bottom;
   }

   get x() { return this.left; }
   get y() { return this.top; }

   get centerX() { return this.x + this.width / 2; }
   get centerY() { return this.y + this.height / 2; }

   get width() { return this.right - this.left; }
   get height() { return this.bottom - this.top; }

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
   

   minOverlapXWithBias(other: AABB, bias: number){
      if(bias < 0) return other.right - this.left;
      return -(this.right - other.left);

   }
   minOverlapYWithBias(other: AABB, bias: number){
      if(bias < 0) return other.bottom - this.top;
      return -(this.bottom - other.top);
   }

   copy(other: AABB){
      this.left = other.left;
      this.right = other.right;
      this.bottom = other.bottom;
      this.top = other.top;
      
      return this;
   }

   set(left: number, top: number, right: number, bottom: number) { 
      this.left = left;
      this.top = top;
      this.right = right;
      this.bottom = bottom;

      return this;
   }

   clone(){
      return new AABB(this.left, this.top, this.right, this.bottom);
   }

   static Create(x: number, y: number, w: number, h: number){
      return new AABB(x, y, x + w, y + h);
   }
}