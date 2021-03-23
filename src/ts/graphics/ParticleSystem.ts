import { Game } from "engine/Game";
import { Vector2 } from "math/Vector2";
import { Scene } from "scene/Scene";
import { Animation } from "./Animation";
import { Graphics } from "./Graphics";
import { Renderable } from "./Renderable";

class Particle{
   position: Vector2 = new Vector2();
   scale: Vector2 = new Vector2(1, 1);
   lifetime: number = 0;
   animation: Animation|undefined;
}

export class ParticleSystem implements Renderable{
   particles: Particle[];
   index: number;
   
   scene!: Scene;
   depth: number = 0;

   constructor(){
      this.particles = new Array(10);

      for(let i = 0; i < this.particles.length; i++){
         this.particles[i] = new Particle();
      }

      this.index = 0;
   }
   
   init(game: Game){
      this.scene.renderer.add(this);
   }

   destroy(){
      this.scene.renderer.remove(this);
   }

   update(delta: number){
      for(let i = 0; i < this.particles.length; i++){
         this.particles[i].lifetime -= delta;
         this.particles[i].animation?.update(delta);
      }
   }

   draw(graphics: Graphics){
      for(let i = 0; i < this.particles.length; i++){
         let particle = this.particles[i];

         if(particle.animation === undefined) continue;
         if(particle.lifetime <= 0) continue;

         graphics.drawSprite(particle.animation.frame, particle.position.x, particle.position.y, particle.scale.x, particle.scale.y);
      }
   }

   addParticle(x: number, y: number, animation: Animation, xScale: number = 1, yScale: number = 1){
      let particle = this.particles[this.index];

      particle.position.x = x;
      particle.position.y = y;
      particle.scale.x = xScale;
      particle.scale.y = yScale;
      
      particle.animation = animation.clone();
      particle.lifetime = animation.duration;

      this.index++;

      if(this.index >= this.particles.length){
         this.index -= this.particles.length;
      }
   }
}