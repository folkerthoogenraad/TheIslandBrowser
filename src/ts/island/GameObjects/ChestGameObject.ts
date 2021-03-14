import { Graphics } from "graphics/Graphics";
import { Sprite, SpriteSheet } from "graphics/Sprite";
import { InteractableComponent } from "island/Components/InteractableComponent";
import { InteractorComponent } from "island/Components/InteractorComponent";
import Resources from "island/Resources";
import { AABB } from "math/AABB";
import { BoxCollider } from "math/collision/BoxCollider";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";

export class ChestGameObject extends GameObject{
   transform: Transform;
   body: Rigidbody;
   interactable: InteractableComponent;

   closed: Sprite;
   open: Sprite;

   isOpen: boolean = false;

   constructor(aabb: AABB){
      super();

      this.transform = this.addComponent(new Transform());
      this.transform.position.apply(aabb.x, aabb.y);
      
      this.body = this.addComponent(new Rigidbody());
      this.interactable = this.addComponent(new InteractableComponent());

      this.interactable.onInteract.listen(this.onInteract.bind(this));

      this.body.collider = BoxCollider.fromAABB(aabb);
      this.body.useDynamicCollisions = true;

      this.closed = Resources.sheetObjects.getSprite(0, 64, 16, 16);
      this.open = Resources.sheetObjects.getSprite(16, 64, 16, 16);
   }

   onInteract(interactor: InteractorComponent){
      this.isOpen = !this.isOpen;
   }

   draw(graphics: Graphics){
      graphics.drawSpriteSimple(this.isOpen ? this.open : this.closed, this.transform.position.x, this.transform.position.y);
   }
}