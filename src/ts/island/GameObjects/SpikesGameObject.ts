import { HealthComponent } from "island/Components/HealthComponent";
import { AABB } from "math/AABB";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";

export class SpikesGameObject extends GameObject{
   transform: Transform;
   body: Rigidbody;

   constructor(aabb: AABB, shrink: boolean){
      super();

      if(shrink){
         let height = aabb.height;
         let skin = aabb.height - 3;

         if(skin > 0){
            aabb.size.y -= skin;
            aabb.position.y += skin;
         }
      }

      this.transform = this.addComponent(new Transform());
      this.transform.position.set(aabb.position);
      
      this.body = this.addComponent(new Rigidbody());

      this.body.useDynamicCollisions = true;
      this.body.localAABB = aabb;

      this.body.onCollision.listen(this.onCollision.bind(this));
      
   }

   onCollision(other: Rigidbody){
      let comp = other.gameObject.findComponent(component => component instanceof HealthComponent) as HealthComponent|undefined;

      if(comp === undefined) return;
      
      console.log("Damaging something!");
      
      comp.damage(100);
   }
}