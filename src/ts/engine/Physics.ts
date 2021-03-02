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
      // Move all the bodies
      this.bodies.forEach(body => {
         body.transform.position.x += body.velocity.x * delta;
         body.transform.position.y += body.velocity.y * delta;
      });

      // Unstuck all the bodies
      this.bodies.forEach(body => {
         body.collidedX = false;
         body.collidedY = false;

         this.staticColliders.forEach(box => {
            let bbox = body.boundingBox;

            if(!bbox.overlaps(box)) return;

            let minOverlapX = bbox.minOverlapX(box);
            let minOverlapY = bbox.minOverlapY(box);

            if(Math.abs(minOverlapX) < Math.abs(minOverlapY)){
               body.transform.position.x += minOverlapX;
               body.collidedX = true;
            }
            else{
               body.transform.position.y += minOverlapY;
               body.collidedY = true;
            }


         });

         if(body.collidedX){
            body.velocity.x = -body.velocity.x * 0.5;
         }
         if(body.collidedY){
            body.velocity.y = -body.velocity.y * 0.5;
         }
      });
   }

   drawDebug(graphics: Graphics){
      graphics.setColor("rgba(255,0,0, 0.6)");

      this.staticColliders.forEach(collider => {
         graphics.drawAABB(collider, true);
      });

      graphics.setColor("rgba(0,255,0, 0.6)");
      this.bodies.forEach(body => {
         let collider = body.boundingBox;

         graphics.drawAABB(collider, true);
      });
      
      graphics.setColor("rgba(0,0,255, 0.6)");
      this.bodies.forEach(body => {
         let transform = body.transform;

         graphics.drawRectangle(
            transform.position.x - 1, transform.position.y - 1,
            2, 2, true);
      });
   }
}