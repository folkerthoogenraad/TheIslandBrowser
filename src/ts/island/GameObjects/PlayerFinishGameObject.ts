import { Game } from "engine/Game";
import { Graphics } from "graphics/Graphics";
import { Sprite } from "graphics/Sprite";
import { InteractableComponent } from "island/Components/InteractableComponent";
import IslandResources from "island/IslandResources";
import { AABB } from "math/AABB";
import { BoxCollider } from "math/collision/BoxCollider";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { DrawableGameObject } from "scene/DrawableGameObject";
import { GameObject } from "scene/GameObject";

export class PlayerFinishGameObject extends DrawableGameObject{
   transform: Transform;
   body: Rigidbody;
   interactable: InteractableComponent;

   sprite!: Sprite;

   constructor(aabb: AABB){
      super();

      this.transform = this.addComponent(new Transform());
      this.transform.position.apply(aabb.x, aabb.y);
      
      this.body = this.addComponent(new Rigidbody());
      this.interactable = this.addComponent(new InteractableComponent());

      // Interactables and shit
      this.body.useDynamicCollisions = true;
      this.body.collider = BoxCollider.fromAABB(aabb);
      
   }

   init(game: Game){
      super.init(game);

      this.sprite = game.resources.loadSpriteSheet(IslandResources.SheetObjects).getSprite(112, 0, 16, 16);
   }
   
   draw(graphics: Graphics){
      graphics.drawSpriteSimple(this.sprite, this.transform.position.x, this.transform.position.y);
   }
}