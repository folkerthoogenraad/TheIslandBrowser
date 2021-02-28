import { Graphics } from "graphics/Graphics";
import { Component } from "./Component";
import { Scene } from "./Scene";

export class GameObject {
   scene?: Scene;
   components: Component[];
   
   constructor(){
      this.components = [];
   }

   update(delta: number){
      this.components.forEach(obj => obj.update(delta));
   }

   draw(graphics: Graphics){
      this.components.forEach(obj => obj.draw(graphics));
   }

   addComponent(component: Component){
      this.components.push(component);
   }
   removeComponent(component: Component){
      let idx = this.components.indexOf(component);

      if(idx < 0) return;

      this.components.splice(idx, 1);
   }

   findComponent(predicate: (component: Component) => boolean){
      return this.components.find(predicate);
   }
}