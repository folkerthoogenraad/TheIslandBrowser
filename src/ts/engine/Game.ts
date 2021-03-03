import { Graphics } from "graphics/Graphics";
import { Scene } from "scene/Scene";
import { now } from "util/Time";
import { Input } from "./Input";
import { Physics } from "./Physics";

export class Game{   
   currentTime: number = 0;
   
   fixedUpdateTime: number = 1 / 20;
   interUpdateTime: number = 0;

   private running: boolean = false;
   private animationFrame: number = 0;

   scene?: Scene;
   graphics: Graphics;
   input: Input;
   physics: Physics;

   constructor(canvas: HTMLCanvasElement){
      this.graphics = new Graphics(canvas);
      this.input = new Input();
      this.physics = new Physics();

      window.addEventListener("resize", () => this.graphics.updateSize());
      this.graphics.updateSize();
   }

   run(){
      if(this.running) return;
      this.running = true;

      this.scene?.init(this);

      this._requestAnimationFrame();
   }

   stop(){
      this._cancelAnimationFrame();
      this.running = false;
   }

   update(){
      this._requestAnimationFrame();

      let n = now();
      let delta = n - this.currentTime;
      this.currentTime = n;

      if(delta > 0.1){ delta = 0.1; }

      this.input.poll();

      this.interUpdateTime += delta;
      
      // TODO fix the issue where we are lagging behind!
      // if there are too many updates at once and we can't keep up, we need to dump some frames
      // and send a warning.
      while(this.interUpdateTime > this.fixedUpdateTime){
         this.interUpdateTime -= this.fixedUpdateTime;
         this.scene?.fixedUpdate(this.fixedUpdateTime);
         this.physics.fixedUpdate(this.fixedUpdateTime);
      }
      this.scene?.update(delta);
      this.physics.update(delta);

      this.graphics.reset();
      this.graphics.clearScreen();

      this.scene?.draw(this.graphics);
      this.physics.drawDebug(this.graphics);
   }

   _cancelAnimationFrame(){
      cancelAnimationFrame(this.animationFrame);
   }

   _requestAnimationFrame(){
      this.animationFrame = requestAnimationFrame(this.update.bind(this));
   }
}