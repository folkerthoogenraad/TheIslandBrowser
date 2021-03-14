import { AABB } from "math/AABB";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";

export class PlayerSpawnGameObject extends GameObject{
   transform: Transform;

   constructor(aabb: AABB){
      super();

      this.transform = this.addComponent(new Transform());
      this.transform.position.apply(aabb.x, aabb.y);
   }
}