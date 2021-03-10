import { Game } from "engine/Game";
import { Component } from "scene/Component";
import { Rigidbody } from "scene/components/Rigidbody";
import { InteractableComponent } from "./InteractableComponent";

export class InteractorComponent extends Component{
   body!: Rigidbody;
   hovers: Set<InteractableComponent>;

   constructor(){
      super();
      this.hovers = new Set<InteractableComponent>();
   }

   init(game: Game){
      super.init(game);
      this.body = this.gameObject.findComponent(component => component instanceof Rigidbody) as Rigidbody;

      this.body.onCollision.listen(this.onCollision.bind(this));
   }

   interact(){
      this.hovers.forEach(hover => {
         if(hover.canInteract){
            hover.interact(this);
         }
      });
   }

   update(delta: number){
      let removeList: InteractableComponent[] = [];

      this.hovers.forEach(value => {
         // If no longer collides!
         if(!value.body.collides(this.body)){
            removeList.push(value);
         }
      });

      removeList.forEach(item => this.hovers.delete(item));
   }

   onCollision(other: Rigidbody){
      let interaction = other.gameObject.findComponent(component => component instanceof InteractableComponent) as InteractableComponent;

      this.hovers.add(interaction);
   }
}