import { Camera } from "graphics/Camera";
import { Graphics } from "graphics/Graphics";
import { GameObject } from "./GameObject";

export class Scene{
   camera: Camera; // TODO multicamera support
   gameObjects: GameObject[];

   constructor(){
      this.camera = new Camera();
      this.gameObjects = [];
   }

   init(){

   }

   update(delta: number){
      this.gameObjects.forEach(obj => obj.update(delta));
   }

   draw(graphics: Graphics){
      graphics.reset();
      graphics.clearScreen();
      graphics.setCamera(this.camera);

      this.gameObjects.forEach(obj => obj.draw(graphics));
   }

   addGameObject(obj: GameObject){
      this.gameObjects.push(obj);
   }
}