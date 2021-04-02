import { Graphics } from "./Graphics";
import { Renderable } from "./Renderable";
import { Compositer, DefaultCompositer } from "./Compositer";
import { Surface } from "./Surface";
import { ResourceManager } from "./ResourceManager";
import { Camera } from "./Camera";

export class Renderer{
   renderables: Renderable[];
   compositers: Compositer[];

   surface: Surface;
   backBuffer: Surface;

   constructor(resourceManager: ResourceManager) {
      this.renderables = [];
      this.compositers = [];

      this.addCompositer(new DefaultCompositer());

      this.surface = resourceManager.createSurface(640, 360);
      this.backBuffer = resourceManager.createSurface(640, 360);
   }

   addCompositer(compositer: Compositer){
      this.compositers.push(compositer);
   }
   removeCompositer(compositer: Compositer){
      let index = this.compositers.indexOf(compositer);

      if(index < 0) return;

      this.compositers.splice(index, 1);
   }

   draw(graphics: Graphics, camera: Camera){
      this.renderables.sort((a, b) => a.depth - b.depth);

      graphics.push();
      graphics.setSurface(this.surface);
      graphics.setCamera(camera);

      this.renderables.forEach(r => r.draw(graphics));
      
      graphics.pop();

      let current = this.surface;
      let other = this.backBuffer;

      for(let i = 0; i < this.compositers.length; i++){
         let compositer = this.compositers[i];
         let last = i === (this.compositers.length - 1);

         compositer.composite(graphics, current, !last ? other : undefined);

         // Swap current and other
         let temp = current;
         current = other;
         other = temp;
      }
   }

   add(renderable: Renderable){
      this.renderables.push(renderable);
   }
   remove(renderable: Renderable){
      let index = this.renderables.indexOf(renderable);

      if(index < 0) return;

      this.renderables.splice(index, 1);
   }

   updateSize(w: number, h: number){
      this.surface.resize(w, h);
      this.backBuffer.resize(w, h);
   }
}