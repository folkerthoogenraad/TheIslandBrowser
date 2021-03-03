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
   
   jumpHop: boolean = false;

   constructor(){
      super();

      this.sprite = sheet.getSprite(0, 0 , 16, 16);
      this.sprite.center();

      this.transform = this.addComponent(new Transform());
      this.body = this.addComponent(new Rigidbody());

      this.body.aabb.offset.x = 5;
      this.body.aabb.offset.y = 5;
      this.body.aabb.size.x = 10;
      this.body.aabb.size.y = 13;
   }

   update(delta: number){
      super.update(delta);

      this.game.input.gamepads.forEach(pad => {
         if(pad.isButtonPressed(GamepadInput.BUTTON_A)){
            this.jumpHop = true;
         }
      });
   }

   fixedUpdate(delta: number){
      this.game.input.gamepads.forEach(pad => {
         if(this.jumpHop){
            this.body.velocity.y = -256;
         }
         this.body.velocity.x += pad.leftAxisX * 512 * delta;
      });

      this.body.velocity.y += delta * 512;
      
      this.jumpHop = false;
   }

   draw(graphics: Graphics){
      super.draw(graphics);

      graphics.drawSprite(this.sprite, this.transform.interpolatedPosition.x, this.transform.interpolatedPosition.y);
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
