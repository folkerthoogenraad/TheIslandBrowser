import { Graphics } from "graphics/Graphics";
import { AABB } from "math/AABB";
import { Rigidbody } from "scene/components/Rigidbody";
import { Curve } from "util/Curve";

export class Physics{
   staticColliders: AABB[];
   bodies: Rigidbody[];

   interpolate: boolean = true;

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
      if(this.interpolate){
         this.bodies.forEach(body => {
            // TODO motion prediction and stuff
            let f = body.game.interUpdateTime / body.game.fixedUpdateTime;
   
            body.transform.interpolatedPosition.x = Curve.lerp(body.previousPosition.x, body.transform.position.x, f);
            body.transform.interpolatedPosition.y = Curve.lerp(body.previousPosition.y, body.transform.position.y, f);
         });
      }
      else{
         this.bodies.forEach(body => {
            body.transform.interpolatedPosition.set(body.transform.position);
         });
      }
   }

   fixedUpdate(delta: number){
      // Set the previous positions
      this.bodies.forEach(body => {
         body.previousPosition.x = body.transform.position.x;
         body.previousPosition.y = body.transform.position.y;
      });

      // Move all the bodies
      this.bodies.forEach(body => {
         body.transform.position.x += body.velocity.x * delta;
         body.transform.position.y += body.velocity.y * delta;
      });

      // Unstuck all the bodies
      this.bodies.forEach(body => {
         body.collidedTop = false;
         body.collidedBottom = false;
         body.collidedLeft = false;
         body.collidedRight = false;

         this.staticColliders.forEach(box => {
            let bbox = body.boundingBox;

            if(!bbox.overlaps(box)) return;

            let minOverlapX = bbox.minOverlapXWithBias(box, body.velocity.x);
            let minOverlapY = bbox.minOverlapYWithBias(box, body.velocity.y);

            if(Math.abs(minOverlapX) < Math.abs(minOverlapY)){
               body.transform.position.x += minOverlapX;
               body.collidedLeft = body.velocity.x < 0;
               body.collidedRight = body.velocity.x > 0;
            }
            else{
               body.transform.position.y += minOverlapY;
               body.collidedBottom = body.velocity.y > 0;
               body.collidedTop = body.velocity.y < 0;
            }


         });

         if(body.collidedLeft || body.collidedRight){
            body.velocity.x = -body.velocity.x * body.bouncyness;
         }
         if(body.collidedBottom || body.collidedTop){
            body.velocity.y = -body.velocity.y * body.bouncyness;
         }
      });
   }

   drawDebug(graphics: Graphics){
      return;
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