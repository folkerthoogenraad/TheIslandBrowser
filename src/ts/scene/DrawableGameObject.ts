import { Game } from "engine/Game";
import { Graphics } from "graphics/Graphics";
import { Renderable } from "graphics/Renderable";
import { GameObject } from "./GameObject";

export class DrawableGameObject extends GameObject implements Renderable{
   depth: number = 0;

   constructor(){
      super();
   }
   
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