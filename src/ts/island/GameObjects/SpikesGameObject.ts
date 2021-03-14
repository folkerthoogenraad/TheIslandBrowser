import { HealthComponent } from "island/Components/HealthComponent";
import { AABB } from "math/AABB";
import { BoxCollider } from "math/collision/BoxCollider";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";

export class SpikesGameObject extends GameObject{
   transform: Transform;
   body: Rigidbody;

   constructor(aabb: AABB, shrink: boolean){
      super();

      if(shrink){
         let skin = aabb.height - 3;

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

   onCollision(other: Rigidbody){
      let comp = other.gameObject.findComponent(component => component instanceof HealthComponent) as HealthComponent|undefined;

      if(comp === undefined) return;
      
      console.log("Damaging something!");
      
      comp.damage(100);
   }
}