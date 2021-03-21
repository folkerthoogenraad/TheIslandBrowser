import { Game } from "engine/Game";
import { ChestGameObject } from "island/GameObjects/ChestGameObject";
import { ColliderGameObject } from "island/GameObjects/ColliderGameObject";
import { FeatherGameObject } from "island/GameObjects/FeatherGameObject";
import { LevelManager } from "island/GameObjects/LevelManager";
import { PlayerCheckpointGameObject } from "island/GameObjects/PlayerCheckpointGameObject";
import { PlayerFinishGameObject } from "island/GameObjects/PlayerFinishGameObject";
import { PlayerSpawnGameObject } from "island/GameObjects/PlayerSpawnGameObject";
import { SpikesGameObject } from "island/GameObjects/SpikesGameObject";
import { FallingBlockGameObject } from "island/GameObjects/FallingBlockGameObject";
import { AABB } from "math/AABB";
import { Scene } from "scene/Scene";
import { TileMap } from "tilemap/TileMap";
import List from "util/List";
import { MovingPlatformGameObject } from "island/GameObjects/MovingPlatformGameObject";

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

   // initWebgl(canvas);

   // return;

   let game = new Game(canvas);
   
   let scene = new Scene();

   scene.tilemap = await TileMap.fromTiledMapDownload("assets/levels/level5.json", game.resources, (obj) => {
      if(obj.type === "Collider" || obj.type === "PlatformCollider"){
         scene.addGameObject(new ColliderGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)));
      }
      if(obj.type === "LevelManager"){
         scene.addGameObject(new LevelManager());
      }
      if(obj.type === "PlayerSpawn"){
         scene.addGameObject(new PlayerSpawnGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)));
      }
      if(obj.type === "FallingBlock"){
         scene.addGameObject(new FallingBlockGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)));
      }
      if(obj.type === "MovingPlatform"){
         scene.addGameObject(new MovingPlatformGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)));
      }
      if(obj.type === "Checkpoint"){
         scene.addGameObject(new PlayerCheckpointGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)));
      }
      if(obj.type === "Feather"){
         scene.addGameObject(new FeatherGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)));
      }
      if(obj.type === "PlayerFinish"){
         scene.addGameObject(new PlayerFinishGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)));
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
   scene.physics.layers = scene.tilemap.colliders;
   
   game.scene = scene;

   game.run();
});
