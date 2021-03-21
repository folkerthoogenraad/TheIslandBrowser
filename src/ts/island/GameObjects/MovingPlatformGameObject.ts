import { Game } from "engine/Game";
import { Graphics } from "graphics/Graphics";
import { Sprite } from "graphics/Sprite";
import { MovingGroundComponent } from "island/Components/MovingGroundComponent";
import IslandResources from "island/IslandResources";
import { AABB } from "math/AABB";
import { BoxCollider } from "math/collision/BoxCollider";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";

export class MovingPlatformGameObject extends GameObject{
   transform: Transform;
   body: Rigidbody;
   ground: MovingGroundComponent;

   direction: number = 1;
   timer: number = 0;

   sprite!: Sprite;

   constructor(aabb: AABB){
      super();

      this.ground = this.addComponent(new MovingGroundComponent());

      this.transform = this.addComponent(new Transform());
      this.transform.position.apply(aabb.x, aabb.y);
      
      this.body = this.addComponent(new Rigidbody());

      this.body.solid = true;
      this.body.collider = BoxCollider.fromAABB(aabb);
   }

   init(game: Game){
      super.init(game);

      this.sprite = game.resources.loadSpriteSheet(IslandResources.SheetObjects).getSprite(16, 96, 16, 16);
   }

   fixedUpdate(delta: number){
      this.timer -= delta;

      if(this.timer < 0){
         this.timer = 2;
         this.direction = -this.direction;
         this.body.velocity.x = this.direction * 30;
      }

      this.ground.velocity.x = this.body.velocity.x;
      this.ground.velocity.y = this.body.velocity.y;
   }

   draw(graphics: Graphics){
      graphics.drawSprite(this.sprite, this.transform.interpolatedPosition.x, this.transform.interpolatedPosition.y);
   }
}