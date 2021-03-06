import { Game } from "engine/Game";
import { Graphics } from "graphics/Graphics";
import { GameObject } from "./GameObject";

export class Component{
   game!: Game;
   gameObject!: GameObject;

   init(game: Game){
      this.game = game;
   }

   destroy(){
      
   }

   update(delta: number){
   }
   fixedUpdate(delta: number){
   }

   draw(graphics: Graphics){
   }

   get scene(){
      return this.gameObject.scene;
   }
}