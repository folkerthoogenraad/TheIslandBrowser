import { Game } from "engine/Game";
import { Animation } from "graphics/Animation";
import { Graphics } from "graphics/Graphics";
import { Sprite } from "graphics/Sprite";
import IslandResources from "island/IslandResources";
import Resources from "island/IslandResources";
import { AABB } from "math/AABB";
import { BoxCollider } from "math/collision/BoxCollider";
import { Vector2 } from "math/Vector2";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";
import { PlayerGameObject } from "./PlayerGameObject";

// TODO player pickup gameobject or something
export class FeatherGameObject extends GameObject{
   transform: Transform;
   body: Rigidbody;

   usedSprite!: Sprite;
   unusedSprite!: Sprite;

   isUsed: boolean;
   usedTime: number = 0;

   effect!: Animation;

   constructor(aabb: AABB){
      super();

      this.transform = this.addComponent(new Transform());
      this.transform.position.apply(aabb.centerX, aabb.centerY);
      
      this.body = this.addComponent(new Rigidbody());

      this.body.useDynamicCollisions = true;

      let collider = BoxCollider.fromAABB(aabb);
      
      collider.offset.apply(6, 6);
      collider.size.apply(12, 12);


      this.body.collider = collider;
      
      this.isUsed = false;
      
      this.body.onCollision.listen(this.onCollision.bind(this));
   }

   init(game: Game){
      super.init(game);
      
      let sheetEffects = game.resources.loadSpriteSheet(IslandResources.SheetEffects);
      let sheetObjects = game.resources.loadSpriteSheet(IslandResources.SheetObjects);
      
      this.effect = sheetEffects.getAnimation(0, 80, 16, 16, 4).center();
      this.effect.frameRate = 12;
      
      this.unusedSprite = sheetObjects.getSprite(0, 80, 16, 16).center();
      this.usedSprite = sheetObjects.getSprite(16, 80, 16, 16).center();
   }

   update(delta: number){
      if(this.usedTime < 0) return;

      this.usedTime -= delta;

      if(this.usedTime < 0){
         this.isUsed = false;

         // TODO add animation
      }
   }

   onCollision(other: Rigidbody){
      if(!this.isUsed && other.gameObject instanceof PlayerGameObject){
         other.gameObject.canDoubleJump = true;
         other.gameObject.canDash = true; //After doublejump, you get another dash!

         this.isUsed = true;
         this.usedTime = 1;

         this.scene.particleSystem.addParticle(this.transform.position.x, this.transform.position.y, this.effect);

         // TODO add animation
      }
   } 

   draw(graphics: Graphics){
      graphics.drawSpriteSimple(this.isUsed ? this.usedSprite : this.unusedSprite, this.transform.position.x, this.transform.position.y);
   }
}