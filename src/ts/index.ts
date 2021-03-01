import { Game } from "engine/Game";
import { GamepadInput } from "engine/Input";
import { Camera } from "graphics/Camera";
import { Graphics } from "graphics/Graphics";
import { Sprite, SpriteSheet } from "graphics/Sprite";
import { GameObject } from "scene/GameObject";
import { Scene } from "scene/Scene";

let sheet = new SpriteSheet(document.getElementById("resource_player") as HTMLImageElement);
let game: Game;

class Player extends GameObject{
   sprite: Sprite;

   angle: number = 0;

   constructor(){
      super();

      this.sprite = sheet.getSprite(0, 0 , 16, 16);
   }

   update(delta: number){
      this.angle += delta;

      game.input.gamepads.forEach(pad => {
         if(pad.isButtonPressed(GamepadInput.BUTTON_B)){
            this.angle += 1;
         }
      });
      
   }

   draw(graphics: Graphics){
      const dist = 100;
      graphics.drawSprite(this.sprite, Math.cos(this.angle) * dist, Math.sin(this.angle) * dist);
   }

}

document.addEventListener("DOMContentLoaded", ()=>{
   let canvas = document.getElementById("canvas") as HTMLCanvasElement;

   let scene = new Scene();

   scene.addGameObject(new Player());

   game = new Game(canvas);
   game.scene = scene;

   game.run();
});
