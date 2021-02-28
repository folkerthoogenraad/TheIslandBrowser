export class Vector2{
   x: number;
   y: number;

   constructor(x = 0, y = 0){
      this.x = x;
      this.y = y;
   }

   add(other: Vector2){
      this.x += other.x;
      this.y += other.y;

      return this;
   }
   sub(other: Vector2){
      this.x -= other.x;
      this.y -= other.y;

      return this;
   }
   mul(other: Vector2){
      this.x *= other.x;
      this.y *= other.y;

      return this;
   }
   div(other: Vector2){
      this.x /= other.x;
      this.y /= other.y;

      return this;
   }

   normalize(){
      let length = this.length;

      if(length > 0){
         this.x /= length;
         this.y /= length;
      }

      return this;
   }

   get normalized(){
      return this.clone().normalize();
   }

   get sqrLength(){
      return Vector2.dot(this, this);
   }

   get length(){
      return Math.sqrt(this.sqrLength);
   }

   get angle(){
      return Math.atan2(this.y, this.x);
   }

   distanceTo(other: Vector2){
      return Vector2.distance(this, other);
   }
   directionTo(other: Vector2){
      return Vector2.direction(this, other);
   }

   static direction(a: Vector2, b: Vector2){
      return b.clone().sub(a);
   }
   
   static distance(a: Vector2, b: Vector2){
      let distX = a.x - b.x;
      let distY = a.y - b.y;

      return Math.sqrt(distX * distX + distY * distY);
   }

   static dot(a: Vector2, b: Vector2){
      return a.x * b.x + a.y * b.y;
   }

   static angled(angle: number){
      return new Vector2(Math.cos(angle), Math.sin(angle));
   }

   clone(){
      return new Vector2(this.x, this.y);
   }
}