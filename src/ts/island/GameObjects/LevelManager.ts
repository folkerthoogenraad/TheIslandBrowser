import { Game } from "engine/Game";
import { GamepadInput, Keyboard } from "engine/Input";
import { HealthComponent } from "island/Components/HealthComponent";
import { AABB } from "math/AABB";
import { Vector2 } from "math/Vector2";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";
import { format } from "util/Time";
import { PlayerCheckpointGameObject } from "./PlayerCheckpointGameObject";
import { PlayerFinishGameObject } from "./PlayerFinishGameObject";
import { PlayerGameObject } from "./PlayerGameObject";
import { PlayerSpawnGameObject } from "./PlayerSpawnGameObject";
import { ResetableGameObject } from "./ResetableGameObject";

export class LevelManager extends GameObject{
   spawn?: PlayerSpawnGameObject;
   finish?: PlayerFinishGameObject;

   player?: PlayerGameObject;
   checkpoints: PlayerCheckpointGameObject[];

   currentCheckpoint?: PlayerCheckpointGameObject;

   running: boolean = false;
   completed: boolean = false;
   time: number = 0;

   element: HTMLElement;
   finalTimeElement: HTMLElement;
   bestTimeElement: HTMLElement;

   bestTime: number|undefined = undefined;

   constructor(){
      super();

      this.element = document.querySelector(".game-overlay") as HTMLElement;
      this.finalTimeElement = document.getElementById("final-time") as HTMLElement;
      this.bestTimeElement = document.getElementById("best-time") as HTMLElement;

      this.alwaysUpdate = true;

      this.checkpoints = [];

      let bt = localStorage.getItem("bestTime");
      if(bt !== null){
         this.bestTime = parseFloat(bt);
      }
   }

   init(game: Game){
      super.init(game);

      this.spawn = this.scene.findObject(object => object instanceof PlayerSpawnGameObject) as PlayerSpawnGameObject|undefined;
      this.finish = this.scene.findObject(object => object instanceof PlayerFinishGameObject) as PlayerFinishGameObject|undefined;

      this.finish?.interactable.onInteract.listen(interactor => {
         if(interactor.gameObject instanceof PlayerGameObject){
            this.completed = true;
            this.stop();
         }
      });

      this.scene.gameObjects.forEach(obj => {
         if(obj instanceof PlayerCheckpointGameObject){
            this.checkpoints.push(obj);

            obj.interactable.onInteract.listen(interactor => {
               this.currentCheckpoint = obj;
            });
         }
      });

      this.restart();
   }

   update(delta: number){
      super.update(delta);

      if(this.running) {
         this.game.input.gamepads.forEach(pad => {
            if(pad.isButtonPressed(GamepadInput.ButtonY)){
               this.restart();
            }
         });
   
         if(this.game.input.keyboard.isKeyPressed(Keyboard.KeyEnter)){
            this.restart();
         }
      }
      else{
         this.game.input.gamepads.forEach(pad => {
            if(pad.isButtonPressed(GamepadInput.ButtonA) || pad.isButtonPressed(GamepadInput.ButtonY)){
               this.restart();
            }
         });
   
         if(this.game.input.keyboard.isKeyPressed(Keyboard.KeyEnter)){
            this.restart();
         }
         if(this.game.input.keyboard.isKeyPressed(Keyboard.KeyComma)){
            this.restart();
         }
         if(this.game.input.keyboard.isKeyPressed(Keyboard.KeySpace)){
            this.restart();
         }
      }

      this.updateCamera(delta);
   }

   fixedUpdate(delta: number){
      super.fixedUpdate(delta);

      if(this.running && !this.scene.paused){
         this.time += delta;
      }

      if(!this.player?.health.alive){
         this.stop();
      }
   }

   stop(){
      this.scene.removeGameObject(this.player!);

      this.running = false;

      if(this.completed && (this.bestTime === undefined || this.time < this.bestTime)){
         this.bestTime = this.time;
         localStorage.setItem("bestTime", "" + this.bestTime);
      }

      this.sync();
   }

   restart(){
      if(this.spawn === undefined) return;

      this.stop();


      this.player = new PlayerGameObject();

      let position = this.spawn.transform.position;

      if(this.currentCheckpoint === undefined){
         this.time = 0;
      }

      if(this.currentCheckpoint !== undefined && !this.completed){
         position = this.currentCheckpoint.transform.position;
      }

      this.player.transform.position.set(position);
      this.player.transform.interpolatedPosition.set(position);
      this.player.body.previousPosition.set(position);

      this.running = true;

      if(this.completed){
         this.time = 0;
         this.completed = false;
      }
      
      this.scene.addGameObject(this.player);

      this.scene.gameObjects.forEach(obj => {
         if(obj instanceof ResetableGameObject){
            obj.reset();
         }
      });
      
      this.sync();
   }

   sync(){
      this.element.classList.toggle("game-over", !this.running);
      this.element.classList.toggle("completed", this.completed);
      this.finalTimeElement.innerText = format(this.time);

      if(this.bestTime !== undefined){
         this.bestTimeElement.innerText = format(this.bestTime);
      }
   }

   updateCamera(delta: number){
      if(!this.player) return;

      const position = this.player.transform.position;

      const sceneWidth = this.scene.tilemap!.pixelWidth;
      const sceneHeight = this.scene.tilemap!.pixelHeight;

      const screenWidth = 40 * 16;
      const screenHeight = 23 * 16;

      const cam = this.scene.camera;

      const screenIndexX = Math.floor(position.x / screenWidth);
      const screenIndexY = Math.floor(position.y / screenHeight);

      const offsetX = screenIndexX * screenWidth;
      const offsetY = screenIndexY * screenHeight;

      let wantedPosition = new Vector2(
         offsetX + screenWidth / 2,
         offsetY + screenHeight / 2,
      );
      
      // Clamp the wanted position to the scene... Not great, for reasons (like, edge cases, but we don't care :) )
      if(wantedPosition.x - cam.width / 2 < 0) wantedPosition.x = cam.width / 2;
      if(wantedPosition.x + cam.width / 2 > sceneWidth) wantedPosition.x = sceneWidth - cam.width / 2;

      if(wantedPosition.y - cam.height / 2 < 0) wantedPosition.y = cam.height / 2;
      if(wantedPosition.y + cam.height / 2 > sceneHeight) wantedPosition.y = sceneHeight - cam.height / 2;

      this.scene.paused = Vector2.distance(wantedPosition, cam.center) > 1;

      cam.center.lerpTo(wantedPosition, delta * 10);
   }
}