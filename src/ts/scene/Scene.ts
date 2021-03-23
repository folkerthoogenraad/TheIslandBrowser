import { Game } from "engine/Game";
import { Physics } from "engine/Physics";
import { Camera } from "graphics/Camera";
import { Graphics } from "graphics/Graphics";
import { ParticleSystem } from "graphics/ParticleSystem";
import { Surface } from "graphics/Surface";
import { TileMap } from "tilemap/TileMap";
import { GameObject } from "./GameObject";

export class Scene{
   camera: Camera;
   uiCamera: Camera;

   gameObjects: GameObject[];
   game!: Game;
   tilemap?: TileMap;

   physics: Physics;
   particleSystem: ParticleSystem;

   surface!: Surface;

   // This gets used for transitions :)
   paused: boolean = false;

   initialized: boolean = false;

   constructor(){
      this.camera = new Camera();
      this.uiCamera = new Camera();

      this.gameObjects = [];
      this.physics = new Physics();

      this.particleSystem = new ParticleSystem();
   }

   init(game: Game){
      if(this.initialized) return;
      this.initialized = true;

      this.game = game;
      this.gameObjects.forEach(obj => obj.init(game));

      this.surface = game.resources.createSurface(640, 360);
   }

   destroy(){
      if(!this.initialized) return;
      this.initialized = false;

      this.gameObjects.forEach(obj => obj.destroy());
   }

   update(delta: number){
      if(!this.paused) this.tilemap?.update(delta, this.camera.getBounds());
      
      this.gameObjects.forEach(obj => { if(!this.paused || obj.alwaysUpdate) obj.update(delta); });

      if(!this.paused) this.particleSystem.update(delta);
      
      if(!this.paused) this.physics.update(delta);
   }
   fixedUpdate(delta: number){
      this.gameObjects.forEach(obj => { if(!this.paused || obj.alwaysUpdate) obj.fixedUpdate(delta); });
      if(!this.paused) this.physics.fixedUpdate(delta);
   }

   draw(graphics: Graphics){
      // graphics.setSurface(this.surface);
      graphics.setCamera(this.camera);

      this.tilemap?.draw(graphics, this.camera.getBounds());
      this.particleSystem.draw(graphics);
      this.gameObjects.forEach(obj => obj.draw(graphics));
      this.physics.drawDebug(graphics);
      
      // graphics.resetSurface();
      // graphics.setCamera(this.uiCamera);

      // // Scaled to fit
      // graphics.drawSurface(this.surface, 0, 0, this.uiCamera.width / this.surface.width,  this.uiCamera.height / this.surface.height);
   }

   updateSize(){
      this.surface.resize(this.game.canvas.width, this.game.canvas.height);
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