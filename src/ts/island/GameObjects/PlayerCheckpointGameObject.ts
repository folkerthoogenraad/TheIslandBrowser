import { Animation } from "graphics/Animation";
import { Graphics } from "graphics/Graphics";
import { InteractableComponent } from "island/Components/InteractableComponent";
import { InteractorComponent } from "island/Components/InteractorComponent";
import Resources from "island/Resources";
import { AABB } from "math/AABB";
import { BoxCollider } from "math/collision/BoxCollider";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";


export class PlayerCheckpointGameObject extends GameObject{
   transform: Transform;
   body: Rigidbody;
   interactable: InteractableComponent;

   currentAnimation: Animation;

   closedAnimation: Animation;
   openAnimation: Animation;

   constructor(aabb: AABB){
      super();

      this.transform = this.addComponent(new Transform());
      this.transform.position.apply(aabb.x, aabb.y);
      
      this.body = this.addComponent(new Rigidbody());
      this.interactable = this.addComponent(new InteractableComponent());

      this.interactable.onInteract.listen(this.onInteract.bind(this));

      // Interactables and shit
      this.body.useDynamicCollisions = true;
      this.body.collider = BoxCollider.fromAABB(aabb);

      this.closedAnimation = Resources.sheetObjects.getAnimation(0, 112, 16, 16, 1);
      this.openAnimation = Resources.sheetObjects.getAnimation(16, 112, 16, 16, 2);

      this.currentAnimation = this.closedAnimation;
   }

   update(delta: number){
      this.currentAnimation.update(delta);
   }

   onInteract(interactor: InteractorComponent){
      this.currentAnimation = this.openAnimation;
   }
   
   draw(graphics: Graphics){
      graphics.drawSpriteSimple(this.currentAnimation.frame, this.transform.position.x, this.transform.position.y);
   }
}