import { Game } from "engine/Game";
import { GamepadInput } from "engine/Input";
import { Camera } from "graphics/Camera";
import { Graphics } from "graphics/Graphics";
import { Sprite, SpriteSheet } from "graphics/Sprite";
import { AABB } from "math/AABB";
import { Vector2 } from "math/Vector2";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";
import { Scene } from "scene/Scene";

let sheet = new SpriteSheet(document.getElementById("resource_player") as HTMLImageElement);

class Player extends GameObject{
   sprite: Sprite;
   angle: number = 0;

   transform: Transform;
   body: Rigidbody;

   constructor(){
      super();

      this.sprite = sheet.getSprite(0, 0 , 16, 16);

      this.transform = this.addComponent(new Transform());
      this.body = this.addComponent(new Rigidbody());
   }

   update(delta: number){
      super.update(delta);

      this.angle += delta;

      this.game.input.gamepads.forEach(pad => {
         if(pad.isButtonPressed(GamepadInput.BUTTON_B)){
            this.angle += 1;
         }
      });
      
   }

   draw(graphics: Graphics){
      super.draw(graphics);

      const dist = 100;
      graphics.drawSprite(this.sprite, Math.cos(this.angle) * dist, Math.sin(this.angle) * dist);
   }

}

document.addEventListener("DOMContentLoaded", ()=>{
   let canvas = document.getElementById("canvas") as HTMLCanvasElement;

   let game = new Game(canvas);

   game.physics.addStaticCollider(new AABB(
      new Vector2(-64, 32),
      new Vector2(128, 32)
   ));
   
   let scene = new Scene();
   let player = new Player();

   scene.addGameObject(player);

   game.scene = scene;

   game.run();
});
