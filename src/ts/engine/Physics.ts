import { Graphics } from "graphics/Graphics";
import { AABB } from "math/AABB";
import { unstuck } from "math/collision/Collision";
import { TileCollider } from "math/collision/TileCollider";
import { Vector2 } from "math/Vector2";
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

         body.unstuckDistance.setZero();
      });

      // Move all the bodies
      this.bodies.forEach(body => {
         body.transform.position.x += body.velocity.x * delta;
         body.transform.position.y += body.velocity.y * delta;
      });

      let collisionMap = new Map<number, number>();

      let addToCollisionMap = (selfIndex: number, otherIndex: number) => {
         collisionMap.set(Math.min(selfIndex, otherIndex), Math.max(selfIndex, otherIndex));
      }

      // Unstuck all the bodies
      let tileCollider = new TileCollider();
      let tileAABB = new AABB();
      let tilePosition = new Vector2();

      // =============================== //
      // Tilemap collision
      // =============================== //
      this.bodies.forEach(body => {
         if(body.kinematic) return;

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

                  tilePosition.x = i * layer.tilemap.tileWidth;
                  tilePosition.y = j * layer.tilemap.tileHeight;

                  tileCollider = layer.getTileCollider(i, j, tileCollider);

                  tileAABB = tileCollider.getBounds(tilePosition, tileAABB);

                  if(!bbox.overlaps(tileAABB)) continue;

                  let unstuckDist = unstuck(
                     body.collider,
                     tileCollider,
                     tilePosition.sub(body.transform.position),
                     body.velocity
                  );

                  if(unstuckDist !== undefined){
                     body.transform.position.add(unstuckDist);
                     body.unstuckDistance.add(unstuckDist);
                  }

                  // this.performCollision(body, bbox, tileAABB);
               }
            }
         });
      });

      
      // =============================== //
      // Normal collisions
      // =============================== //
      // TODO broadphase narrow phase stuff :)
      // Maybe start with sweep and prune
      this.bodies.forEach((self, selfIndex) => {
         if(self.kinematic) return;

         this.bodies.forEach((other, otherIndex) => {
            if(self === other) return;
            if(!other.solid) return;
   
            let bbox = self.boundingBox;
            let otherbbox = other.boundingBox;

            if(!bbox.overlaps(otherbbox)) return;

            if(self.useDynamicCollisions && other.useDynamicCollisions){
               addToCollisionMap(selfIndex, otherIndex);
            }

            let unstuckDist = unstuck(
               self.collider,
               other.collider,
               other.transform.position.clone().sub(self.transform.position),
               self.velocity); // TODO relative velocity

            if(unstuckDist !== undefined){
               self.transform.position.add(unstuckDist);
               self.unstuckDistance.add(unstuckDist);
            }

         });
      });

      this.bodies.forEach(body => {

         body.collidedBottom = body.unstuckDistance.y < 0;
         body.collidedTop = body.unstuckDistance.y > 0;

         body.collidedLeft = body.unstuckDistance.x > 0;
         body.collidedRight = body.unstuckDistance.x < 0;

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
               addToCollisionMap(i, j);
            }
         }
      }

      collisionMap.forEach((selfIndex, otherIndex) => {
         let self = this.bodies[selfIndex];
         let other = this.bodies[otherIndex];

         self.onCollision.emit(other);
         other.onCollision.emit(self);
      });
   }

   drawDebug(graphics: Graphics){
      return;

      this.layers.forEach(layer => {
         layer.drawDebug(graphics, layer.tilemap.tileWidth, layer.tilemap.tileHeight, new AABB(0, 0, 1000, 1000));
      });
      
      graphics.setColor(255,0,0, 0.6);
      this.bodies.forEach(body => {
         if(!body.solid) return;
         
         graphics.drawAABB(body.boundingBox, true);
      });
      
      
      graphics.setColor(0,255,0, 0.6);
      this.bodies.forEach(body => {
         if(body.solid) return;
         let collider = body.boundingBox;
         
         graphics.drawAABB(collider, true);
      });
      
      graphics.setColor(0,0,255, 0.6);
      this.bodies.forEach(body => {
         let transform = body.transform;
         
         graphics.drawRectangle(
            transform.position.x - 1, transform.position.y - 1,
            2, 2, true);
      });
      return;
   }
}