import { Graphics } from "graphics/Graphics";
import { Sprite } from "graphics/Sprite";
import { InteractableComponent } from "island/Components/InteractableComponent";
import Resources from "island/Resources";
import { AABB } from "math/AABB";
import { BoxCollider } from "math/collision/BoxCollider";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";

export class PlayerFinishGameObject extends GameObject{
   transform: Transform;
   body: Rigidbody;
   interactable: InteractableComponent;

   sprite: Sprite;

   constructor(aabb: AABB){
      super();

      this.transform = this.addComponent(new Transform());
      this.transform.position.apply(aabb.x, aabb.y);
      
      this.body = this.addComponent(new Rigidbody());
      this.interactable = this.addComponent(new InteractableComponent());

      // Interactables and shit
      this.body.useDynamicCollisions = true;
      this.body.collider = BoxCollider.fromAABB(aabb);
      
      this.sprite = Resources.sheetObjects.getSprite(112, 0, 16, 16);
   }
   
   draw(graphics: Graphics){
      graphics.drawSpriteSimple(this.sprite, this.transform.position.x, this.transform.position.y);
   }
}