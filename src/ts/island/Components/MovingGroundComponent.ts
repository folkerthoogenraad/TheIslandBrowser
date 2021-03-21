
// Why not just RigidBody? 
// Well: because this moving ground component can actually be like a moving platform without actually moving itself
// So things like a converyer belt could be implemented using this approach.

import { Vector2 } from "math/Vector2";
import { Component } from "scene/Component";

// Less physics code, more client code, more better :)
export class MovingGroundComponent extends Component{
   velocity: Vector2;

   constructor(){
      super();

      this.velocity = new Vector2();
   }
}