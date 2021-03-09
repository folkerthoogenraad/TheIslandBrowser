import { Game } from "engine/Game";
import { Camera } from "graphics/Camera";
import { Graphics } from "graphics/Graphics";
import { TileMap } from "tilemap/TileMap";
import { GameObject } from "./GameObject";

export class Scene{
   camera: Camera;
   gameObjects: GameObject[];
   game!: Game;
   tilemap?: TileMap;

   initialized: boolean = false;

   constructor(){
      this.camera = new Camera();
      this.gameObjects = [];
   }

   init(game: Game){
      if(this.initialized) return;
      this.initialized = true;

      this.game = game;
      this.gameObjects.forEach(obj => obj.init(game));
   }

   destroy(){
      if(!this.initialized) return;
      this.initialized = false;

      this.gameObjects.forEach(obj => obj.destroy());
   }

   update(delta: number){
      this.tilemap?.update(delta);
      this.gameObjects.forEach(obj => obj.update(delta));
   }
   fixedUpdate(delta: number){
      this.gameObjects.forEach(obj => obj.fixedUpdate(delta));
   }

   draw(graphics: Graphics){
      graphics.setCamera(this.camera);

      this.tilemap?.draw(graphics);
      this.gameObjects.forEach(obj => obj.draw(graphics));
   }

   updateSize(){
      let asp = this.game.canvas.width / this.game.canvas.height;
      this.camera.width = this.camera.height * asp;
   }

   addGameObject(obj: GameObject){
      this.gameObjects.push(obj);
      obj.scene = this;

      if(!this.initialized) return;

      obj.init(this.game);
   }
   
   removeGameObject(obj: GameObject){
      let idx = this.gameObjects.indexOf(obj);

      if(idx < 0) return;

      this.gameObjects.splice(idx, 1);

      if(!this.initialized) return;

      obj.destroy();
   }

   findObject(predicate: (component: GameObject) => boolean){
      return this.gameObjects.find(predicate);
   }
}