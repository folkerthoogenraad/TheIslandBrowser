import { Game } from "engine/Game";
import { Vector2 } from "math/Vector2";
import { Component } from "scene/Component";
import { Transform } from "./Transform";

export class Rigidbody extends Component{
   transform!: Transform;
   velocity: Vector2 = new Vector2();
   mass: number = 1;

   init(game: Game){
      super.init(game);

      this.game.physics.addBody(this);
      this.transform = this.gameObject.findComponent(c => c instanceof Transform) as Transform;
   }

   destroy(){
      this.game.physics.removeBody(this);
   }
}