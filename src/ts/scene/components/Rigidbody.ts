import { Game } from "engine/Game";
import { AABB } from "math/AABB";
import { Vector2 } from "math/Vector2";
import { Component } from "scene/Component";
import { Signal } from "signals/Signal";
import { Transform } from "./Transform";

export class Rigidbody extends Component{
   transform!: Transform;
   velocity: Vector2 = new Vector2();
   mass: number = 1;
   bouncyness: number = 0;

   previousPosition: Vector2 = new Vector2();

   collidedLeft: boolean = false;
   collidedRight: boolean = false;
   collidedTop: boolean = false;
   collidedBottom: boolean = false;

   solid: boolean = false;
   useDynamicCollisions: boolean = false;

   onCollision: Signal<Rigidbody> = new Signal<Rigidbody>();

   localAABB: AABB = new AABB();

   init(game: Game){
      super.init(game);

      this.game.physics.addBody(this);
      this.transform = this.gameObject.findComponent(c => c instanceof Transform) as Transform;
   }

   destroy(){
      this.game.physics.removeBody(this);
   }

   collides(other: Rigidbody){
      return other.boundingBox.overlaps(this.boundingBox);
   }

   get boundingBox(){
      this.localAABB.position.set(this.transform.position);
      return this.localAABB;
   }
}