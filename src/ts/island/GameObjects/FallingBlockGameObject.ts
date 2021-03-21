import { Game } from "engine/Game";
import { Graphics } from "graphics/Graphics";
import { Sprite } from "graphics/Sprite";
import IslandResources from "island/IslandResources";
import { AABB } from "math/AABB";
import { BoxCollider } from "math/collision/BoxCollider";
import { Vector2 } from "math/Vector2";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";
import { ResetableGameObject } from "./ResetableGameObject";

export class FallingBlockGameObject extends ResetableGameObject{
   transform: Transform;
   body: Rigidbody;
   sprite!: Sprite;

   falling: boolean = false;
   timer: number = 0;
   removeTimer: number = 1;

   respawn: boolean = false;
   respawnTimer: number = 1;

   animationTimer: number = 0;
   offset: Vector2 = new Vector2();

   constructor(aabb: AABB){
      super();

      this.transform = this.addComponent(new Transform());
      this.transform.position.apply(aabb.x, aabb.y);
      
      this.body = this.addComponent(new Rigidbody());

      this.body.solid = true;
      this.body.collider = BoxCollider.fromAABB(aabb);

      this.body.useDynamicCollisions = true;
      this.body.onCollision.listen((other)=>{
         if(this.falling) return;

         this.falling = true;
         this.timer = 0.6;
      });
   }

   init(game: Game){
      super.init(game);

      this.sprite = game.resources.loadSpriteSheet(IslandResources.SheetObjects).getSprite(0, 96, 16, 16);
   }

   update(delta: number){
      if(!this.falling) return;

      this.body.useDynamicCollisions = false;

      this.timer -= delta;

      this.animationTimer -= delta;

      if(this.animationTimer < 0){
         this.animationTimer = 0.07;
         this.offset.x = Math.random() * 2 - 1;
      }

      if(this.timer > 0) return;

      this.offset.x = 0;
      this.offset.y = 0;

      this.body.solid = false;

      this.removeTimer -= delta;

      if(this.removeTimer < 0) {
         // this.scene.removeGameObject(this);
      }
   }

   reset(){
      super.reset();

      this.offset.x = 0;
      this.offset.y = 0;
      
      this.falling = false;
      this.timer = 0;
      this.removeTimer = 1;
      
      this.body.solid = true;
      this.body.useDynamicCollisions = true;

      this.respawnTimer = 1;
   }

   fixedUpdate(delta: number){
      if(!this.falling || this.timer > 0) return;

      this.body.velocity.y += 0.25 * 60 * 60 * delta;

      this.respawnTimer -= delta;
      if(this.respawnTimer < 0 && this.respawn) this.reset();
   }

   draw(graphics: Graphics){
      if(this.removeTimer < 0) return;
      
      graphics.setAlpha(this.removeTimer);
      graphics.drawSprite(this.sprite, this.transform.interpolatedPosition.x + this.offset.x, this.transform.interpolatedPosition.y + this.offset.y);
      graphics.setAlpha(1);
   }
}