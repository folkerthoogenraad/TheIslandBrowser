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
import { PlayerGameObject } from "./PlayerGameObject";

export class JumpPlatformGameObject extends GameObject{
   transform: Transform;
   body: Rigidbody;

   sprite!: Sprite;

   gravity: number = 0.25 * 60 * 60;
   bouncyness: number = 0.4;
   velocity: number = 0;
   offset: number = 0;

   constructor(aabb: AABB){
      super();

      // Just whatever man.
      aabb.top += 12;

      this.transform = this.addComponent(new Transform());
      this.transform.position.apply(aabb.x, aabb.y);
      
      this.body = this.addComponent(new Rigidbody());

      this.body.collider = BoxCollider.fromAABB(aabb);
      this.body.useDynamicCollisions = true;
      this.body.onCollision.listen(other => {
         let offset = other.boundingBox.bottom - other.transform.position.y;
         other.transform.position.y = aabb.top - offset;
         other.velocity.y = -3.5 * 60;
         this.velocity = -3.5 * 60;

         if(other.gameObject instanceof PlayerGameObject){
            other.gameObject.canDash = true;
         }
      });
   }

   fixedUpdate(delta: number){
      super.fixedUpdate(delta);

      this.velocity += this.gravity * delta;
      this.offset += this.velocity * delta;

      if(this.offset > 10) {
         this.offset = 10;
         if(this.velocity > 0) this.velocity = -this.velocity * this.bouncyness;
      }
      if(this.offset < 0){
         this.offset = 0;
         if(this.velocity < 0) this.velocity = -this.velocity * this.bouncyness;
      }
   }

   init(game: Game){
      super.init(game);

      let sheet = game.resources.loadSpriteSheet(IslandResources.SheetObjects);

      this.sprite = sheet.getSprite(0, 128 + 12, 16, 4);
   }

   draw(graphics: Graphics){
      graphics.drawSprite(this.sprite, this.transform.interpolatedPosition.x, this.transform.interpolatedPosition.y + this.offset - 10);
   }
}