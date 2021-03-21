import { Vector2 } from "./Vector2";

export class Path{
   points: Vector2[];

   constructor(){
      this.points = [];
   }

   add(point: Vector2){
      this.points.push(point);
   }

   getPosition(distance: number, v?: Vector2){
      if(v === undefined) v = new Vector2();

      if(distance < 0) return v.set(this.points[0]);

      for(let i = 0; i < this.points.length - 1; i++){
         let from = this.points[i];
         let to = this.points[i + 1];

         let d = Vector2.distance(from, to);

         if(distance < d){
            return Vector2.lerpOut(from, to, v, distance / d);
         }

         distance -= d;
      }

      return v.set(this.points[this.points.length - 1]);
   }

   length(){
      let l = 0;

      for(let i = 0; i < this.points.length - 1; i++){
         let from = this.points[i];
         let to = this.points[i + 1];

         l += Vector2.distance(from, to);
      }

      return l;
   }
}