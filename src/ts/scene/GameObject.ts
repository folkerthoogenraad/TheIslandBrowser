import { Game } from "engine/Game";
import { Graphics } from "graphics/Graphics";
import { Component } from "./Component";
import { Scene } from "./Scene";

export class GameObject {
   components: Component[];
   scene!: Scene;

   game!: Game;
   initialized: boolean = false;

   constructor(){
      this.components = [];
   }
   
   init(game: Game){
      if(this.initialized) return;
      this.initialized = true;

      this.game = game;
      this.components.forEach(obj => obj.init(game));
   }

   destroy(){
      if(!this.initialized) return;
      this.initialized = false;
      
      this.components.forEach(obj => obj.destroy());
   }

   update(delta: number){
      this.components.forEach(obj => obj.update(delta));
   }

   draw(graphics: Graphics){
      this.components.forEach(obj => obj.draw(graphics));
   }

   addComponent<T extends Component>(component: T){
      this.components.push(component);
      component.gameObject = this;
      
      if(!this.initialized) return component;

      component.init(this.game);

      return component;
   }

   removeComponent(component: Component){
      let idx = this.components.indexOf(component);

      if(idx < 0) return;

      this.components.splice(idx, 1);
      
      if(!this.initialized) return;

      component.destroy();
   }

   findComponent(predicate: (component: Component) => boolean){
      return this.components.find(predicate);
   }
}