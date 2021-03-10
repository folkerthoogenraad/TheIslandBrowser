import { Game } from "engine/Game";
import { Component } from "scene/Component";
import { Rigidbody } from "scene/components/Rigidbody";
import { Signal } from "signals/Signal";
import { InteractorComponent } from "./InteractorComponent";

export class InteractableComponent extends Component{
   body!: Rigidbody;

   onInteract: Signal<InteractorComponent>;

   constructor(){
      super();
      this.onInteract = new Signal<InteractorComponent>();
   }

   init(game: Game){
      super.init(game);
      this.body = this.gameObject.findComponent(component => component instanceof Rigidbody) as Rigidbody;
   }

   interact(interactor: InteractorComponent){
      this.onInteract.emit(interactor);
   }

   get canInteract(){
      return true;
   }

}