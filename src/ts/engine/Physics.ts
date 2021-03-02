import { Graphics } from "graphics/Graphics";
import { AABB } from "math/AABB";
import { Rigidbody } from "scene/components/Rigidbody";

export class Physics{
   staticColliders: AABB[];
   bodies: Rigidbody[];

   constructor(){
      this.staticColliders = [];
      this.bodies = [];
   }

   addStaticCollider(aabb: AABB){
      this.staticColliders.push(aabb);
   }

   addBody(body: Rigidbody){
      this.bodies.push(body);
   }
   removeBody(body: Rigidbody){
      let index = this.bodies.indexOf(body);

      if(index < 0) return;

      this.bodies.splice(index, 1);
   }

   update(delta: number){
      this.bodies.forEach(body => {
         
      });
   }

   drawDebug(graphics: Graphics){
      graphics.setColor("red");

      this.staticColliders.forEach(collider => {
         graphics.drawRectangle(
            collider.position.x, collider.position.y,
            collider.size.x, collider.size.y, true);
      });
   }
}