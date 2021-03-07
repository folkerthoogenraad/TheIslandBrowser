import { AABB } from "math/AABB";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";

export class PlayerFinishGameObject extends GameObject{
   transform: Transform;
   body: Rigidbody;

   constructor(aabb: AABB){
      super();

      this.transform = this.addComponent(new Transform());
      this.transform.position.set(aabb.position);
      
      this.body = this.addComponent(new Rigidbody());

      // Interactables and shit
      this.body.useDynamicCollisions = true;
      this.body.localAABB = aabb;
   }
}