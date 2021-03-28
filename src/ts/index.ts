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
import { PathManager } from "island/GameObjects/PathManager";
import { Path } from "math/Path";
import { Vector2 } from "math/Vector2";
import { JumpPlatformGameObject } from "island/GameObjects/JumpPlatformGameObject";
import { LongDashGameObject } from "island/GameObjects/LongDashGameObject";
import { LightmapManager } from "island/GameObjects/LightmapManager";

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
   game.run();
   
   let setLevel = async (level: string) =>{
      let scene = new Scene();
   
      let pathManager = new PathManager();
      // let lightmap = new LightmapManager();
   
      scene.addGameObject(pathManager);
      // scene.addGameObject(lightmap);

      let tilemap = await TileMap.fromTiledMapDownload(level, game.resources, (obj) => {
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
            let pathName = "";
            let velocity = 30;
            let offset = 0;
   
            if(obj.properties != null){
               obj.properties.forEach(prop => {
                  if(prop.name === "path") pathName = prop.value as string;
                  if(prop.name === "velocity") velocity = prop.value as number;
                  if(prop.name === "offset") offset = prop.value as number;
               });
            }
   
            scene.addGameObject(new MovingPlatformGameObject(pathName, velocity, offset, AABB.Create(obj.x, obj.y, obj.width, obj.height)));
         }
         if(obj.type === "Checkpoint"){
            scene.addGameObject(new PlayerCheckpointGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)));
         }
         if(obj.type === "JumpPlatform"){
            scene.addGameObject(new JumpPlatformGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)));
         }
         if(obj.type === "Feather"){
            scene.addGameObject(new FeatherGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)));
         }
         if(obj.type === "LongDash"){
            scene.addGameObject(new LongDashGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)));
         }
         if(obj.type === "PlayerFinish"){
            scene.addGameObject(new PlayerFinishGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)));
         }
         if(obj.type === "Chest"){
            scene.addGameObject(new ChestGameObject(AABB.Create(obj.x, obj.y, obj.width, obj.height)));
         }
         if(obj.type === "Spikes"){
            let shrink = false;
            let visible = false;
   
            if(obj.properties != null){
               obj.properties.forEach(prop => {
                  if(prop.name === "shrink") shrink = prop.value as boolean;
                  if(prop.name === "visible") visible = prop.value as boolean;
               });
            }

            let spikes = new SpikesGameObject(
               AABB.Create(obj.x, obj.y, obj.width, obj.height), shrink);
               
            spikes.visible = visible;
   
            scene.addGameObject(spikes);
         }
         if(obj.type === "Path"){
            let path = new Path();
   
            obj.polyline.forEach(line => {
               path.add(new Vector2(line.x + obj.x, line.y + obj.y));
            });
   
            pathManager.paths[obj.name] = path;
         }
      });
      scene.setTilemap(tilemap);
      
      game.scene = scene;
      game.scene.init(game);
   }

   setLevel("assets/levels/level4.json");

   (window as any).setLevel = setLevel;
});
