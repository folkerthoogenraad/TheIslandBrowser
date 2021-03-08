import { Game } from "engine/Game";
import { GamepadInput, Keyboard } from "engine/Input";
import { Camera } from "graphics/Camera";
import { Graphics } from "graphics/Graphics";
import { Sprite, SpriteSheet } from "graphics/Sprite";
import { ChestGameObject } from "island/GameObjects/ChestGameObject";
import { ColliderGameObject } from "island/GameObjects/ColliderGameObject";
import { LevelManager } from "island/GameObjects/LevelManager";
import { PlayerFinishGameObject } from "island/GameObjects/PlayerFinishGameObject";
import { PlayerGameObject } from "island/GameObjects/PlayerGameObject";
import { PlayerSpawnGameObject } from "island/GameObjects/PlayerSpawnGameObject";
import { SpikesGameObject } from "island/GameObjects/SpikesGameObject";
import { AABB } from "math/AABB";
import { Vector2 } from "math/Vector2";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";
import { Scene } from "scene/Scene";
import { TileMap } from "tilemap/TileMap";
import List from "util/List";

// Fuck this but whatever
function initModal(element: HTMLElement){
   let close = element.querySelector(".close");

   close?.addEventListener("click", ()=>{
      element.classList.add("closed");

      // Yes this makes a lot of sense here :)
      document.body.requestFullscreen();
   });
}

function initModals(){
   let modals = document.querySelectorAll(".modal");

   modals.forEach(modal => initModal(modal as HTMLElement));
}

// Init the damn game
document.addEventListener("DOMContentLoaded", async ()=>{
   initModals();

   let canvas = document.getElementById("canvas") as HTMLCanvasElement;

   let game = new Game(canvas);
   
   let scene = new Scene();

   scene.tilemap = await TileMap.fromTiledMapDownload("assets/levels/level2.json", (obj) => {
      if(obj.type === "Collider" || obj.type === "PlatformCollider"){
         scene.addGameObject(new ColliderGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)));
      }
      if(obj.type === "LevelManager"){
         scene.addGameObject(new LevelManager());
      }
      if(obj.type === "PlayerSpawn"){
         scene.addGameObject(new PlayerSpawnGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)))
      }
      if(obj.type === "PlayerFinish"){
         scene.addGameObject(new PlayerFinishGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)))
      }
      if(obj.type === "Chest"){
         scene.addGameObject(new ChestGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)));
      }
      if(obj.type === "Spikes"){
         let spikes = new SpikesGameObject(
            AABB.Create(obj.x, obj.y, obj.width, obj.height), 
            List.has(obj.properties, prop => { return prop.name === "shrink" && prop.value === true; })
         );

         scene.addGameObject(spikes);
      }
   });
   
   game.scene = scene;

   game.run();
});
