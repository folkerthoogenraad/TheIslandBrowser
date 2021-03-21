import { Game } from "engine/Game";
import { Graphics } from "graphics/Graphics";
import { NineSideSprite } from "graphics/NineSideSprite";
import { Sprite } from "graphics/Sprite";
import { MovingGroundComponent } from "island/Components/MovingGroundComponent";
import IslandResources from "island/IslandResources";
import { AABB } from "math/AABB";
import { BoxCollider } from "math/collision/BoxCollider";
import { Path } from "math/Path";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";
import { PathManager } from "./PathManager";
import { ResetableGameObject } from "./ResetableGameObject";

export class MovingPlatformGameObject extends ResetableGameObject{
   transform: Transform;
   body: Rigidbody;
   ground: MovingGroundComponent;

   direction: number = 1;
   pathPosition: number = 0;

   sprite!: Sprite;
   path?: Path;
   pathName: string = "";

   nin!: NineSideSprite;

   width: number;
   height: number;

   velocity: number;
   startPosition: number;

   constructor(pathName: string, velocity: number, offset: number, aabb: AABB){
      super();

      this.width = aabb.width;
      this.height = aabb.height;

      this.velocity = velocity;
      this.startPosition = offset;
      this.pathPosition = offset;

      this.pathName = pathName;

      this.ground = this.addComponent(new MovingGroundComponent());

      this.transform = this.addComponent(new Transform());
      this.transform.position.apply(aabb.x, aabb.y);
      
      this.body = this.addComponent(new Rigidbody());

      this.body.solid = true;
      this.body.collider = BoxCollider.fromAABB(aabb);
   }

   init(game: Game){
      super.init(game);

      let texture = game.resources.loadTexture(IslandResources.SheetObjects);

      let sns = new NineSideSprite(texture);
      sns.setup(16, 96, 16, 16, 4, 4, 4, 4);

      this.nin = sns;
      
      this.sprite = game.resources.loadSpriteSheet(IslandResources.SheetObjects).getSprite(16, 96, 16, 16);
      
      let manager = this.scene.findObject(obj => obj instanceof PathManager) as PathManager;
      
      this.path = manager.getPath(this.pathName);

      this.clampPath();
   }

   clampPath(){
      if(this.path){
         let l = this.path.length();

         let even = Math.floor(this.pathPosition / l) % 2 === 1;

         this.pathPosition %= this.path.length();

         if(even){
            this.direction = -1;
            this.pathPosition = l - this.pathPosition;
         }
         else{
            this.direction = 1;
         }
      }
   }

   fixedUpdate(delta: number){
      this.pathPosition += this.velocity * delta * this.direction;

      if(this.path === undefined) return;

      if(this.pathPosition > this.path.length() && this.direction > 0){
         this.direction = -this.direction;
      }
      if(this.pathPosition < 0 && this.direction < 0){
         this.direction = -this.direction;
      }

      let newPos = this.path.getPosition(this.pathPosition - this.velocity * delta * this.direction);
      let nextPos = this.path.getPosition(this.pathPosition);

      this.transform.position.x = newPos.x;
      this.transform.position.y = newPos.y;

      let dir = nextPos.sub(newPos);

      this.body.velocity.x = dir.x / delta;
      this.body.velocity.y = dir.y / delta;

      this.ground.velocity.x = this.body.velocity.x;
      this.ground.velocity.y = this.body.velocity.y;
   }

   reset(){
      super.reset();

      this.pathPosition = this.startPosition;
      this.clampPath();
   }

   draw(graphics: Graphics){
      // graphics.drawSprite(this.sprite, 
      //    this.transform.interpolatedPosition.x, 
      //    this.transform.interpolatedPosition.y,
      //    this.width / this.sprite.width, 
      //    this.height / this.sprite.height);
      graphics.drawSpriteNineSide(this.nin, 
         this.transform.interpolatedPosition.x, 
         this.transform.interpolatedPosition.y,
         this.width, 
         this.height);
}
}