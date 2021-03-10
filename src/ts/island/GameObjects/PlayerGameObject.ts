import { Animation } from "graphics/Animation";
import { Graphics } from "graphics/Graphics";
import { Sprite, SpriteSheet } from "graphics/Sprite";
import { HealthComponent } from "island/Components/HealthComponent";
import { InteractableComponent } from "island/Components/InteractableComponent";
import { InteractorComponent } from "island/Components/InteractorComponent";
import { PlayerInputComponent } from "island/Components/PlayerInputComponent";
import { AABB } from "math/AABB";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";

let sheet = SpriteSheet.fromHTML("Player");

export class PlayerGameObject extends GameObject{
   currentAnimation: Animation;

   idleAnimation: Animation;
   walkAnimation: Animation;
   jumpAnimation: Animation;
   fallAnimation: Animation;
   dashAnimation: Animation;
   wallAnimation: Animation;

   transform: Transform;
   body: Rigidbody;
   input: PlayerInputComponent;
   health: HealthComponent;
   interactor: InteractorComponent;
   
   jumpHop: boolean = false;
   dashHop: boolean = false;

   jumping: boolean = false;
   facing: number = 1;

   jumpSpeed: number = -3 * 60;
   moveSpeed: number = 1.5 * 60;

   cayoteTime: number = 0.05;
   groundLeaveTime: number = 0;

   groundAcceleration: number = 0.2 * 60 * 60;
   gravity: number = 0.25 * 60 * 60;
   gravityUpFraction: number = 0.5;
   gravityWallFraction: number = 0.4;

   grounded: boolean = false;
   wallLeft: boolean = false;
   wallRight: boolean = false;

   hadWall: boolean = false;

   dashing: boolean = false;
   dashSpeed: number = 4.7 * 60;
   dashTime: number = 24 / (this.dashSpeed);

   dashTimer: number = 0;
   dashTimeout: number = 0;
   dashSavedSpeed: number = 0;
   dashSavedAddition: number = 5;

   wallJumpTimer: number = 0;
   get wallJumping() { return this.wallJumpTimer > 0; }

   get canMove() { return !this.wallJumping && !this.dashing; }
   get useGravity() { return !this.dashing; }
   get hasWall() { return this.wallLeft || this.wallRight; }
   
   canDash: boolean = false;
   canDoublejump: boolean = false;
   get canJump() { return  this.grounded || (this.groundLeaveTime < this.cayoteTime); }


   constructor(){
      super();

      this.idleAnimation = sheet.getAnimation(0, 0, 16, 16, 1).center();
      this.walkAnimation = sheet.getAnimation(0, 16, 16, 16, 4).center();
      this.fallAnimation = sheet.getAnimation(0, 32, 16, 16, 2).center();
      this.jumpAnimation = sheet.getAnimation(0, 48, 16, 16, 2).center();
      this.dashAnimation = sheet.getAnimation(0, 64, 16, 16, 2).center();
      this.wallAnimation = sheet.getAnimation(0, 80, 16, 16, 2).center();

      this.currentAnimation = this.idleAnimation;

      this.transform = this.addComponent(new Transform());
      this.body = this.addComponent(new Rigidbody());
      this.input = this.addComponent(new PlayerInputComponent());
      this.health = this.addComponent(new HealthComponent());
      this.interactor = this.addComponent(new InteractorComponent());

      this.health.onDeath.listen(this.onDeath.bind(this));
      
      this.body.useDynamicCollisions = true;

      this.body.localAABB.offset.x = 5;
      this.body.localAABB.offset.y = 5;
      this.body.localAABB.size.x = 10;
      this.body.localAABB.size.y = 13;
   }

   update(delta: number){
      super.update(delta);

      if(this.input.jumpPressed){
         this.jumpHop = true;
      }
      if(this.input.dashPressed){
         this.dashHop = true;
      }
      if(this.input.interactPressed){
         this.interactor.interact();
      }
      
      // TODO do this right.
      const sceneWidth = this.scene.tilemap!.pixelWidth;
      const sceneHeight = this.scene.tilemap!.pixelHeight;

      let bounds = AABB.Create(0, 0, sceneWidth, sceneHeight);

      if(!this.body.boundingBox.overlaps(bounds)){
         this.health.damage(100);
      }
   }

   fixedUpdate(delta: number){
      super.fixedUpdate(delta);

      this.grounded = this.body.collidedBottom;
      this.wallLeft = this.body.collidedLeft;
      this.wallRight = this.body.collidedRight;

      if(this.wallLeft || this.wallRight){
         if(!this.hadWall && !this.grounded && this.body.velocity.y > 0){
            this.body.velocity.y = 0;
         }
         this.hadWall = true;
      }
      else{
         this.hadWall = false;
      }

      if(this.grounded) {
         this.groundLeaveTime = 0;
      }
      else{
         this.groundLeaveTime += delta;
      }


      // Make sure we stick to the wall
      if(!this.grounded && this.wallRight){
         this.body.velocity.x = 60;
      }
      if(!this.grounded && this.wallLeft){
         this.body.velocity.x = -60;
      }

      if(!this.input.jumpDown){
         this.jumpHop = false;
      }
      
      // Jumping
      this.updateJump(delta);

      // Movement
      this.updateMove(delta);

      // Dashing
      this.updateDash(delta);
      

      // Gravity
      this.updateGravity(delta);
      
      // Animation
      this.updateAnimation(delta);
   }

   updateMove(delta: number){
      // Update facing
      if(this.input.direction > 0){
         this.facing = 1;
      }
      if(this.input.direction < 0){
         this.facing = -1;
      }
      if(this.wallLeft && !this.grounded) this.facing = 1;
      if(this.wallRight && !this.grounded) this.facing = -1;

      if(!this.canMove) return;

      if(this.input.direction !== 0){
         let dir = Math.sign(this.input.direction);
         let maxSpeed = this.moveSpeed * Math.abs(this.input.direction);
         let acceleration = this.groundAcceleration * delta;

         this.accelerate(
            dir, 
            maxSpeed,
            acceleration);
      }
      else{
         this.stop(this.groundAcceleration * delta);
      }
   }

   updateDash(delta: number){
      if(this.grounded){
         this.canDash = true;
      }

      if(this.dashing){
         this.dashTimer -= delta;

         if(this.dashTimer < 0){
            this.dashing = false;
            this.body.velocity.x = this.dashSavedSpeed + this.facing * this.dashSavedAddition;
         }
      }
      else{
         this.dashTimeout -= delta;
      }

      if(this.dashHop && this.dashTimeout < 0 && this.canDash && !this.grounded){
         this.dashing = true;
         this.canDash = false;
         this.dashSavedSpeed = this.body.velocity.x;
         this.dashTimer = this.dashTime;
         this.dashTimeout = 0.2;
         this.body.velocity.y = 0;
         this.body.velocity.x = this.facing * this.dashSpeed;
      }
      this.dashHop = false;
   }

   updateJump(delta: number){
      this.wallJumpTimer -= delta;

      if(this.canJump){
         if(this.jumpHop){
            this.body.velocity.y = this.jumpSpeed;
            this.jumping = true;

            if(!this.grounded){
               console.log("cayote jump!");
            }

            // This is really hacky but whatever
            this.groundLeaveTime = this.cayoteTime;
         }
         this.jumpHop = false;
      }
      else if(this.canDoublejump){
         if(this.jumpHop){
            this.body.velocity.y = this.jumpSpeed;
            this.jumping = true;
         }
         this.jumpHop = false;
      }
      else{
         if(this.wallLeft && this.jumpHop){
            this.body.velocity.x = this.moveSpeed;
            this.body.velocity.y = this.jumpSpeed;

            this.wallJumpTimer = 0.05;

            this.jumping = true;
            this.jumpHop = false;

            // You can dash after your walljump :)
            this.canDash = true;
         }
         if(this.wallRight && this.jumpHop){
            this.body.velocity.x = -this.moveSpeed;
            this.body.velocity.y = this.jumpSpeed;

            this.wallJumpTimer = 0.05;

            this.jumping = true;
            this.jumpHop = false;

            // You can dash after your walljump :)
            this.canDash = true;
         }
      }
      
      // Jump canceling
      if(this.body.velocity.y > 0){
         this.jumping = false;
      }
      if(this.jumping && !this.input.jumpDown){
         this.body.velocity.y = this.body.velocity.y * 0.25;
         this.jumping = false;
      }
   }

   updateAnimation(delta: number){
      // Animation stuff
      if(this.body.velocity.x !== 0){
         this.currentAnimation = this.walkAnimation;
      }
      else{
         this.currentAnimation = this.idleAnimation;
      }

      if(!this.grounded && this.body.velocity.y < 0){
         this.currentAnimation = this.jumpAnimation;
      }
      if(!this.grounded && this.body.velocity.y > 0){
         this.currentAnimation = this.fallAnimation;
      }
      if((this.wallLeft || this.wallRight) && !this.grounded){
         this.currentAnimation = this.wallAnimation;
      }
      if(this.dashing){
         this.currentAnimation = this.dashAnimation;
      }

      this.currentAnimation.update(delta);
   }

   updateGravity(delta: number){
      if(!this.useGravity) return;

      if(this.body.velocity.y < 0){
         this.body.velocity.y += this.gravity * this.gravityUpFraction * delta;
      }
      else{
         if(this.hasWall){
            this.body.velocity.y += this.gravity * this.gravityWallFraction * delta;
         }else{
            this.body.velocity.y += this.gravity * delta;
         }
      }
   }

   accelerate(dir: number, maxSpeed: number, acceleration: number){
      let acc = acceleration;
      let vel = this.body.velocity.x * dir;

      if(vel >= maxSpeed) return;

      if(vel + acc > maxSpeed){
         acc = maxSpeed - vel;
      }

      this.body.velocity.x += acc * dir;
      
   }
   stop(acceleration: number){
      let dir = Math.sign(this.body.velocity.x);
      let vel = Math.abs(this.body.velocity.x);

      let rem = acceleration;

      if(vel - rem < 0) rem = vel;

      this.body.velocity.x -= rem * dir;
   }

   draw(graphics: Graphics){
      super.draw(graphics);

      graphics.drawSprite(this.currentAnimation.frame, 
         this.transform.interpolatedPosition.x, this.transform.interpolatedPosition.y,
         this.facing, 1, 
         0);
   }

   onDeath(){
      this.scene.removeGameObject(this);
   }
}