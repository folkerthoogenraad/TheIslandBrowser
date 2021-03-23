import { Game } from "engine/Game";
import { Graphics } from "graphics/Graphics";
import { Sprite } from "graphics/Sprite";
import { HealthComponent } from "island/Components/HealthComponent";
import IslandResources from "island/IslandResources";
import { AABB } from "math/AABB";
import { BoxCollider } from "math/collision/BoxCollider";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { DrawableGameObject } from "scene/DrawableGameObject";

export class SpikesGameObject extends DrawableGameObject{
   transform: Transform;
   body: Rigidbody;

   sprite!: Sprite;

   visible: boolean = true;

   constructor(aabb: AABB, shrink: boolean){
      super();

      if(shrink){
         let skin = aabb.height - 6;

         if(skin > 0){
            aabb.top += skin;
         }
      }

      this.transform = this.addComponent(new Transform());
      this.transform.position.apply(aabb.x, aabb.y);
      
      this.body = this.addComponent(new Rigidbody());
      this.body.kinematic = true;

      this.body.useDynamicCollisions = true;
      this.body.collider = BoxCollider.fromAABB(aabb);

      this.body.onCollision.listen(this.onCollision.bind(this));
   }

   init(game: Game){
      super.init(game);
      let sheet = game.resources.loadSpriteSheet(IslandResources.SheetObjects);
      this.sprite = sheet.getSprite(0, 0, 16, 16);
   }

   draw(graphics: Graphics){
      if(!this.visible) return;

      let bounds = this.body.boundingBox;

      graphics.drawSpriteTiled(this.sprite, bounds.x, bounds.y, bounds.width, bounds.height);
   }

   onCollision(other: Rigidbody){
      if(other.velocity.y <= 0) return;
      
      let comp = other.gameObject.findComponent(component => component instanceof HealthComponent) as HealthComponent|undefined;

      if(comp === undefined) return;
      
      comp.damage(100);
   }
}