import { Game } from "engine/Game";
import { GamepadInput, Keyboard } from "engine/Input";
import { HealthComponent } from "island/Components/HealthComponent";
import { AABB } from "math/AABB";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";
import { format } from "util/Time";
import { PlayerFinishGameObject } from "./PlayerFinishGameObject";
import { PlayerGameObject } from "./PlayerGameObject";
import { PlayerSpawnGameObject } from "./PlayerSpawnGameObject";

export class LevelManager extends GameObject{
   spawn?: PlayerSpawnGameObject;
   finish?: PlayerFinishGameObject;

   player?: PlayerGameObject;

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

      let bt = localStorage.getItem("bestTime");
      if(bt !== null){
         this.bestTime = parseFloat(bt);
      }
   }

   init(game: Game){
      super.init(game);

      this.spawn = this.scene.findObject(object => object instanceof PlayerSpawnGameObject) as PlayerSpawnGameObject|undefined;
      this.finish = this.scene.findObject(object => object instanceof PlayerFinishGameObject) as PlayerFinishGameObject|undefined;

      this.finish!.interactable.onInteract.listen(interactor => {
         if(interactor.gameObject instanceof PlayerGameObject){
            this.completed = true;
            this.stop();
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
      }

   }

   fixedUpdate(delta: number){
      super.fixedUpdate(delta);

      if(this.running){
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

      this.completed = false;
      this.time = 0;
      this.running = true;

      this.player = new PlayerGameObject();

      this.player.transform.position.set(this.spawn.transform.position);
      this.player.transform.interpolatedPosition.set(this.spawn.transform.position);
      
      this.scene.addGameObject(this.player);
      
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
}