import { Game } from "engine/Game";
import { Graphics } from "graphics/Graphics";
import { Renderable } from "graphics/Renderable";
import { Component } from "./Component";

export class DrawableComponent extends Component implements Renderable{
   depth: number = 0;

   init(game: Game){
      super.init(game);

      this.scene.renderer.add(this);
   }

   destroy(){
      super.destroy();
      
      this.scene.renderer.remove(this);
   }

   draw(graphics: Graphics){
   }
}