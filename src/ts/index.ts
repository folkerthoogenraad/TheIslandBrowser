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

   transform: Transform;
   body: Rigidbody;

   constructor(){
      super();

      this.sprite = sheet.getSprite(0, 0 , 16, 16);
      this.sprite.center();

      this.transform = this.addComponent(new Transform());
      this.body = this.addComponent(new Rigidbody());

      this.body.aabb.offset.x = 8;
      this.body.aabb.offset.y = 8;
      this.body.aabb.size.x = 16;
      this.body.aabb.size.y = 16;
   }

   update(delta: number){
      super.update(delta);

      this.game.input.gamepads.forEach(pad => {
         if(pad.isButtonPressed(GamepadInput.BUTTON_A)){
            this.body.velocity.y = -128;
         }
         this.body.velocity.x += pad.leftAxisX * 512 * delta;
      });

      if(this.body.collidedX){ 
         console.log("collided on x axis");
      }
      if(this.body.collidedY){ 
         console.log("collided on y axis");
      }

      this.body.velocity.y += delta * 200;
   }

   draw(graphics: Graphics){
      super.draw(graphics);

      graphics.drawSprite(this.sprite, this.transform.position.x, this.transform.position.y);
   }

}

document.addEventListener("DOMContentLoaded", ()=>{
   let canvas = document.getElementById("canvas") as HTMLCanvasElement;

   let game = new Game(canvas);

   game.physics.addStaticCollider(AABB.Create(-64, 64, 128, 16));
   game.physics.addStaticCollider(AABB.Create(-64, -64-16, 128, 16));

   game.physics.addStaticCollider(AABB.Create(-64, -64, 16, 128));
   game.physics.addStaticCollider(AABB.Create(64, -64, 16, 128));
   
   let scene = new Scene();
   let player = new Player();

   player.body.velocity.y = -256;
   player.body.velocity.x = 128 * (Math.random() * 2 - 1);

   scene.addGameObject(player);

   game.scene = scene;

   game.run();
});
