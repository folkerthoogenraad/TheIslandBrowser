import { Graphics } from "./Graphics";
import { Renderable } from "./Renderable";

export class Renderer{
   renderables: Renderable[];

   constructor(){
      this.renderables = [];
   }

   draw(graphics: Graphics){
      this.renderables.sort((a, b) => a.depth - b.depth);

      this.renderables.forEach(r => r.draw(graphics));
   }

   add(renderable: Renderable){
      this.renderables.push(renderable);
   }
   remove(renderable: Renderable){
      let index = this.renderables.indexOf(renderable);

      if(index < 0) return;

      this.renderables.splice(index, 1);
   }
}