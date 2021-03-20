import { Canvas2DGraphics } from "graphics/canvas/Canvas2DGraphics";
import { Canvas2DResourceManager } from "graphics/canvas/Canvas2DResourceManager";
import { Graphics } from "graphics/Graphics";
import { ResourceManager } from "graphics/ResourceManager";
import { Scene } from "scene/Scene";
import { now } from "util/Time";
import { DebugSettings } from "./DebugSettings";
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
   resources: ResourceManager;
   canvas: HTMLCanvasElement;

   debugSettings: DebugSettings;

   constructor(canvas: HTMLCanvasElement){
      this.canvas = canvas;
      this.input = new Input(canvas);

      // TODO swap out to WebGL
      this.graphics = new Canvas2DGraphics(canvas);
      this.resources = new Canvas2DResourceManager();

      window.addEventListener("resize", () => this.updateSize());
      this.updateSize();

      this.debugSettings = new DebugSettings();
      (window as any).debugSettings = this.debugSettings;
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

      this.graphics.begin();
      this.graphics.clear();

      this.scene?.draw(this.graphics);

      this.graphics.end();

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