import { Game } from "engine/Game";
import { Vector2 } from "math/Vector2";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { DrawableGameObject } from "scene/DrawableGameObject";
import { GameObject } from "scene/GameObject";

export class ResetableGameObject extends DrawableGameObject {
   private _transform?: Transform;
   private _body?: Rigidbody;
   private _startPos?: Vector2;
   private _startVelocity?: Vector2;

   init(game: Game){
      super.init(game);

      this._transform = this.findComponent(comp => comp instanceof Transform) as Transform;
      this._body = this.findComponent(comp => comp instanceof Rigidbody) as Rigidbody;

      if(this._transform !== undefined) this._startPos = this._transform.position.clone();
      if(this._body !== undefined) this._startVelocity = this._body.velocity.clone();
   }

   reset(){
      if(this._transform !== undefined) this._transform.position.set(this._startPos!);
      if(this._body !== undefined) this._body.velocity.set(this._startVelocity!);
   }
}