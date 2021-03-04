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
import { TileMap } from "tilemap/TileMap";

let sheet = SpriteSheet.fromHTML("Player");

class Player extends GameObject{
   sprite: Sprite;

   transform: Transform;
   body: Rigidbody;
   
   jumpHop: boolean = false;
   facing: number = 1;

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

         if(pad.leftAxisX > 0){
            this.facing = 1;
         }
         if(pad.leftAxisX < 0){
            this.facing = -1;
         }
      });

      this.body.velocity.y += delta * 512;
      
      this.jumpHop = false;
   }

   draw(graphics: Graphics){
      super.draw(graphics);

      graphics.drawSprite(this.sprite, 
         this.transform.interpolatedPosition.x, this.transform.interpolatedPosition.y,
         this.facing, 1, 
         0);
   }

}

document.addEventListener("DOMContentLoaded", async ()=>{
   let canvas = document.getElementById("canvas") as HTMLCanvasElement;

   let game = new Game(canvas);
   
   let scene = new Scene();

   scene.tilemap = await TileMap.fromTiledMapDownload("/assets/levels/level0.json", (obj) => {
      if(obj.type === "Collider"){
         game.physics.addStaticCollider(AABB.Create(obj.x, obj.y, obj.width, obj.height));
      }
   });
   
   let player = new Player();

   scene.addGameObject(player);

   game.scene = scene;

   game.run();
});
