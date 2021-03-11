import { Graphics } from "graphics/Graphics";
import { Scene } from "scene/Scene";
import { now } from "util/Time";
import { Input } from "./Input";
import { Physics } from "./Physics";

export class Game{   
   currentTime: number = 0;
   
   fixedUpdateTime: number = 1 / 60;
   interUpdateTime: number = 0;

   private running: boolean = false;
   private animationFrame: number = 0;

   scene?: Scene;
   graphics: Graphics;
   input: Input;
   canvas: HTMLCanvasElement;

   constructor(canvas: HTMLCanvasElement){
      this.graphics = new Graphics(canvas);
      this.input = new Input(canvas);
      this.canvas = canvas;

      window.addEventListener("resize", () => this.updateSize());
      this.updateSize();
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
      }
      this.scene?.update(delta);

      this.graphics.reset();
      this.graphics.clearScreen();

      this.scene?.draw(this.graphics);

      this.input.flush();
   }

   updateSize(){
      this.graphics.updateSize();
      this.scene?.updateSize();
   }

   _cancelAnimationFrame(){
      cancelAnimationFrame(this.animationFrame);
   }

   _requestAnimationFrame(){
      this.animationFrame = requestAnimationFrame(this.update.bind(this));
   }
}