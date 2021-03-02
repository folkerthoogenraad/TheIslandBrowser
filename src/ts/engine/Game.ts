import { Graphics } from "graphics/Graphics";
import { Scene } from "scene/Scene";
import { now } from "util/Time";
import { Input } from "./Input";

export class Game{   
   currentTime: number = 0;

   private running: boolean = false;
   private animationFrame: number = 0;

   scene?: Scene;
   graphics: Graphics;
   input: Input;

   constructor(canvas: HTMLCanvasElement){
      this.graphics = new Graphics(canvas);
      this.input = new Input();

      window.addEventListener("resize", () => this.graphics.updateSize());
      this.graphics.updateSize();
   }

   run(){
      if(this.running) return;
      this.running = true;

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

      this.input.poll();
      
      this.scene?.update(delta);
      this.scene?.draw(this.graphics);
   }

   _cancelAnimationFrame(){
      cancelAnimationFrame(this.animationFrame);
   }

   _requestAnimationFrame(){
      this.animationFrame = requestAnimationFrame(this.update.bind(this));
   }
}