import { Vector2 } from "math/Vector2";
import { Component } from "scene/Component";

export class Transform extends Component{
   position: Vector2 = new Vector2();
   
   // Interpolated position
   interpolatedPosition: Vector2 = new Vector2();
}