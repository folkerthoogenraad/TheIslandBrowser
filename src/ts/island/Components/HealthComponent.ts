import { Component } from "scene/Component";
import { Signal } from "signals/Signal";

export class HealthComponent extends Component{
   health: number = 3;

   onDamage: Signal<HealthComponent> = new Signal<HealthComponent>();
   onDeath: Signal<HealthComponent> = new Signal<HealthComponent>();

   get alive() { return this.health > 0; }
   get dead() { return this.health <= 0; }

   damage(amount: number){
      this.health -= amount;

      this.onDamage.emit(this);
      
      if(this.dead){
         this.onDeath.emit(this);
      }
   }
}