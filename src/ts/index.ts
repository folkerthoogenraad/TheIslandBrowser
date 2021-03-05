import { Game } from "engine/Game";
import { GamepadInput, Keyboard } from "engine/Input";
import { Camera } from "graphics/Camera";
import { Graphics } from "graphics/Graphics";
import { Sprite, SpriteSheet } from "graphics/Sprite";
import { PlayerGameObject } from "island/GameObjects/PlayerGameObject";
import { AABB } from "math/AABB";
import { Vector2 } from "math/Vector2";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";
import { Scene } from "scene/Scene";
import { TileMap } from "tilemap/TileMap";

document.addEventListener("DOMContentLoaded", async ()=>{
   let canvas = document.getElementById("canvas") as HTMLCanvasElement;

   let game = new Game(canvas);
   
   let scene = new Scene();

   scene.tilemap = await TileMap.fromTiledMapDownload("/assets/levels/level0.json", (obj) => {
      if(obj.type === "Collider"){
         game.physics.addStaticCollider(AABB.Create(obj.x, obj.y, obj.width, obj.height));
      }
      if(obj.type === "Player"){
         let player = new PlayerGameObject();

         player.transform.position.x = obj.x;
         player.transform.position.y = obj.y;
      
         scene.addGameObject(player);
      }
   });
   
   game.scene = scene;

   game.run();
});
