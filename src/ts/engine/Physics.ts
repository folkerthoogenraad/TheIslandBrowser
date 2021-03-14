import { Graphics } from "graphics/Graphics";
import { AABB } from "math/AABB";
import { Rigidbody } from "scene/components/Rigidbody";
import { TilemapCollisionLayer, TilemapTileLayer } from "tilemap/TileMap";
import { Curve } from "util/Curve";

export class Physics{
   bodies: Rigidbody[];
   layers: TilemapCollisionLayer[];

   interpolate: boolean = true;

   constructor(){
      this.bodies = [];
      this.layers = [];
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
         
         body.collidedTop = false;
         body.collidedBottom = false;
         body.collidedLeft = false;
         body.collidedRight = false;
      });

      // Move all the bodies
      this.bodies.forEach(body => {
         body.transform.position.x += body.velocity.x * delta;
         body.transform.position.y += body.velocity.y * delta;
      });

      // Unstuck all the bodies
      let tileAABB = new AABB();

      this.bodies.forEach(body => {
         this.layers.forEach(layer => {
            let bbox = body.boundingBox;

            // Get the BBOX coords
            let fromX = Math.floor(bbox.left / layer.tilemap.tileWidth);
            let toX = Math.floor(bbox.right / layer.tilemap.tileWidth);

            let fromY = Math.floor(bbox.top / layer.tilemap.tileHeight);
            let toY = Math.floor(bbox.bottom / layer.tilemap.tileHeight);

            for(let i = fromX; i <= toX; i++){
               for(let j = fromY; j <= toY; j++){
                  if(!layer.isTileSolid(i, j)) continue;

                  tileAABB = layer.getTileCollider(i, j, tileAABB);

                  if(!bbox.overlaps(tileAABB)) continue;

                  this.performCollision(body, bbox, tileAABB);
               }
            }
         });
      });

      // TODO broadphase narrow phase stuff :)
      // Maybe start with sweep and prune
      this.bodies.forEach(body => {
         if(body.solid) return;

         this.bodies.forEach(box => {
            if(!box.solid) return;
   
            let bbox = body.boundingBox;
            let otherbbox = box.boundingBox;

            if(!bbox.overlaps(otherbbox)) return;

            this.performCollision(body, bbox, otherbbox);
         });
      });

      this.bodies.forEach(body => {
         if(body.collidedLeft || body.collidedRight){
            body.velocity.x = -body.velocity.x * body.bouncyness;
         }
         if(body.collidedBottom || body.collidedTop){
            body.velocity.y = -body.velocity.y * body.bouncyness;
         }
      });

      // A little more optimized but still really fucking stupid :)
      for(let i = 0; i < this.bodies.length; i++){
         let body = this.bodies[i];

         let bbox = body.boundingBox;

         if(!body.useDynamicCollisions) continue;

         for(let j = i + 1; j < this.bodies.length; j++){
            let other = this.bodies[j];

            if(!other.useDynamicCollisions) continue;

            if(bbox.overlaps(other.boundingBox)){
               body.onCollision.emit(other);
               other.onCollision.emit(body);
            }
         }
      }
   }

   private performCollision(body: Rigidbody, self: AABB, other: AABB){
      let minOverlapX = self.minOverlapXWithBias(other, body.velocity.x);
      let minOverlapY = self.minOverlapYWithBias(other, body.velocity.y);

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
   }

   drawDebug(graphics: Graphics){
      return;
      graphics.setColor("rgba(255,0,0, 0.6)");
      
      this.bodies.forEach(body => {
         if(!body.solid) return;
         
         graphics.drawAABB(body.boundingBox, true);
      });
      
      
      graphics.setColor("rgba(0,255,0, 0.6)");
      this.bodies.forEach(body => {
         if(body.solid) return;
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
      return;
   }
}