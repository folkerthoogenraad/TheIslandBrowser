import { Game } from "engine/Game";
import { AABB } from "math/AABB";
import { BoxCollider } from "math/collision/BoxCollider";
import { Collider } from "math/collision/Collider";
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
   unstuckDistance: Vector2 = new Vector2();

   collidedLeft: boolean = false;
   collidedRight: boolean = false;
   collidedTop: boolean = false;
   collidedBottom: boolean = false;

   solid: boolean = false;
   useDynamicCollisions: boolean = false;

   onCollision: Signal<Rigidbody> = new Signal<Rigidbody>();

   collider: Collider = new BoxCollider();

   private aabb: AABB;

   constructor(){
      super();
      
      this.aabb = new AABB(0, 0, 0, 0);
   }

   init(game: Game){
      super.init(game);

      this.scene.physics.addBody(this);
      this.transform = this.gameObject.findComponent(c => c instanceof Transform) as Transform;
   }

   destroy(){
      this.scene.physics.removeBody(this);
   }

   collides(other: Rigidbody){
      return other.boundingBox.overlaps(this.boundingBox);
   }

   get boundingBox(){
      return this.collider.getBounds(this.transform.position, this.aabb);
   }
}