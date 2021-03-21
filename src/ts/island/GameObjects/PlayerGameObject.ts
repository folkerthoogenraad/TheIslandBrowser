import { Game } from "engine/Game";
import { Animation } from "graphics/Animation";
import { Graphics } from "graphics/Graphics";
import { HealthComponent } from "island/Components/HealthComponent";
import { InteractorComponent } from "island/Components/InteractorComponent";
import { MovingGroundComponent } from "island/Components/MovingGroundComponent";
import { PlayerInputComponent } from "island/Components/PlayerInputComponent";
import IslandResources from "island/IslandResources";
import { AABB } from "math/AABB";
import { BoxCollider } from "math/collision/BoxCollider";
import { Vector2 } from "math/Vector2";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";

export class PlayerGameObject extends GameObject{
   currentAnimation!: Animation;

   idleAnimation!: Animation;
   walkAnimation!: Animation;
   jumpAnimation!: Animation;
   fallAnimation!: Animation;
   dashAnimation!: Animation;
   wallAnimation!: Animation;

   effectJump!: Animation;
   effectLand!: Animation;
   effectWalljump!: Animation;
   effectDoubleJump!: Animation;
   
   effectDash!: Animation;

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

   maxFallSpeed = 5 * 60;

   grounded: boolean = false;
   wallLeft: boolean = false;
   wallRight: boolean = false;

   groundMovement: MovingGroundComponent|null = null;

   hadWall: boolean = false;

   dashing: boolean = false;
   dashSpeed: number = 4.7 * 60;
   dashTime: number = 24 / (this.dashSpeed);

   dashTimer: number = 0;
   dashTimeout: number = 0;
   dashSavedSpeed: number = 0;
   dashSavedMaxSpeed: number = 2 * 60;
   dashSavedAddition: number = (this.dashSavedMaxSpeed - this.moveSpeed) / 3; // In three dashes until max speed 
   dashAnimationTimer: number = 0;

   wallJumpTimer: number = 0;
   get wallJumping() { return this.wallJumpTimer > 0; }

   get canMove() { return !this.wallJumping && !this.dashing; }
   get useGravity() { return !this.dashing; }
   get hasWall() { return this.wallLeft || this.wallRight; }
   
   canDash: boolean = false;
   canDoubleJump: boolean = false;
   get canJump() { return  this.grounded || (this.groundLeaveTime < this.cayoteTime); }

   get xVelocity() {
      let v = this.body.velocity.x;

      if(this.groundMovement){
         v -= this.groundMovement.velocity.x;
      }

      return v;
   }
   set xVelocity(v: number){
      if(this.groundMovement){
         v += this.groundMovement.velocity.x;
      }
      this.body.velocity.x = v;
   }
   get yVelocity() {
      let v = this.body.velocity.y;

      if(this.groundMovement){
         v -= this.groundMovement.velocity.y;
      }

      return v;
   }
   set yVelocity(v: number){
      if(this.groundMovement){
         v += this.groundMovement.velocity.y;
      }
      this.body.velocity.y = v;
   }

   constructor(){
      super();

      this.transform = this.addComponent(new Transform());
      this.body = this.addComponent(new Rigidbody());
      this.input = this.addComponent(new PlayerInputComponent());
      this.health = this.addComponent(new HealthComponent());
      this.interactor = this.addComponent(new InteractorComponent());

      this.health.onDeath.listen(this.onDeath.bind(this));
      
      this.body.useDynamicCollisions = true;

      this.body.collider = new BoxCollider(
         new Vector2(10, 13),
         new Vector2(5, 5)
      );
   }

   init(game: Game){
      super.init(game);

      let sheet = game.resources.loadSpriteSheet(IslandResources.SheetPlayer);
      let sheetEffects = game.resources.loadSpriteSheet(IslandResources.SheetEffects);
      
      this.idleAnimation = sheet.getAnimation(0, 0, 16, 16, 1).center();
      this.walkAnimation = sheet.getAnimation(0, 16, 16, 16, 4).center();
      this.fallAnimation = sheet.getAnimation(0, 32, 16, 16, 2).center();
      this.jumpAnimation = sheet.getAnimation(0, 48, 16, 16, 2).center();
      this.dashAnimation = sheet.getAnimation(0, 64, 16, 16, 2).center();
      this.wallAnimation = sheet.getAnimation(0, 80, 16, 16, 2).center();

      this.effectJump = sheetEffects.getAnimation(0, 0, 16, 16, 3).setOffset(8, 16);
      this.effectWalljump = sheetEffects.getAnimation(0, 16, 16, 16, 3).setOffset(0, 8);
      this.effectLand = sheetEffects.getAnimation(0, 32, 16, 16, 3).setOffset(8, 16);

      this.effectDash = sheetEffects.getAnimation(112, 0, 16, 16, 1).setOffset(8, 8);
      this.effectDash.frameRate = 4;

      this.effectDoubleJump = sheetEffects.getAnimation(0, 48, 16, 16, 4).setOffset(8, 8);

      this.currentAnimation = this.idleAnimation;
   }

   debugMouseUpdate(delta: number){
      const mouse = this.game.input.mouse;

      this.transform.position.x = this.scene.camera.screenToWorldX(mouse.x);
      this.transform.position.y = this.scene.camera.screenToWorldY(mouse.y);

      // this.body.velocity.x = this.scene.camera.screenToWorldX(mouse.deltaX) / delta;
      // this.body.velocity.y = this.scene.camera.screenToWorldY(mouse.deltaY) / delta;
      
      // if(mouse.isButtonPressed(Mouse.ButtonLeft)){
      // }

      this.grounded = this.body.collidedBottom;
      this.wallLeft = this.body.collidedLeft;
      this.wallRight = this.body.collidedRight;
      
      if(this.input.direction > 0){
         this.facing = 1;
      }
      if(this.input.direction < 0){
         this.facing = -1;
      }
      if(this.wallLeft && !this.grounded) this.facing = 1;
      if(this.wallRight && !this.grounded) this.facing = -1;

      this.updateAnimation(delta);
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

      this.findGround();

      if(!this.grounded && this.body.collidedBottom && this.groundLeaveTime > 0.8){
         this.scene.particleSystem.addParticle(this.transform.position.x, this.transform.position.y + 8, this.effectLand);
      }

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

      if(this.body.velocity.y > this.maxFallSpeed){
         this.body.velocity.y = this.maxFallSpeed;
      }
      
      // Animation
      this.updateAnimation(delta);
   }

   findGround(){
      this.groundMovement = null;

      // Find all the objects below me :)
      let groundList = this.scene.physics.boxcast(this.body.boundingBox.clone().shrink(1).translate(0, 2));

      groundList.forEach(ground => {
         // Yes, I'm very aware this _can_ potentially be more than one component. But I honestly don't care. 
         // This should not happen often and then we just choose the last one in the list :)

         let c = ground.gameObject.findComponent(component => component instanceof MovingGroundComponent) as MovingGroundComponent|undefined;

         if(c !== undefined){
            this.groundMovement = c;
         }
      });
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
            
            this.body.velocity.x = this.dashSavedSpeed;

            this.accelerate(this.facing, this.dashSavedMaxSpeed, this.dashSavedAddition);

            this.scene.particleSystem.addParticle(this.transform.position.x, this.transform.position.y, this.effectDash, this.facing);
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

         this.dashAnimationTimer = 0;
      }
      this.dashHop = false;

      this.dashAnimationTimer -= delta;

      if(this.dashing && this.dashAnimationTimer <= 0){
         this.effectDash.frameRate = 1 / (this.dashTimer / 3 + 0.3);
         this.scene.particleSystem.addParticle(this.transform.position.x, this.transform.position.y, this.effectDash, this.facing);
         this.dashAnimationTimer += 0.03;
      }

   }

   updateJump(delta: number){
      this.wallJumpTimer -= delta;

      if(this.grounded) this.canDoubleJump = false;

      if(this.canJump){
         if(this.jumpHop){
            this.yVelocity = this.jumpSpeed;
            this.jumping = true;

            if(!this.grounded){
               console.log("cayote jump!");
            }

            // This is really hacky but whatever
            this.groundLeaveTime = this.cayoteTime;
            
            this.scene.particleSystem.addParticle(this.transform.position.x, this.transform.position.y + 8, this.effectJump);
         }
         this.jumpHop = false;
      }
      else if(this.canDoubleJump){
         if(this.jumpHop){
            this.yVelocity = this.jumpSpeed;
            this.jumping = true;
            this.canDoubleJump = false;
            
            this.scene.particleSystem.addParticle(this.transform.position.x, this.transform.position.y + 6, this.effectDoubleJump);
         }
         this.jumpHop = false;
      }
      else{
         if(this.wallLeft && this.jumpHop){
            this.xVelocity = this.moveSpeed;
            this.yVelocity = this.jumpSpeed;

            this.wallJumpTimer = 0.05;

            this.jumping = true;
            this.jumpHop = false;

            // You can dash after your walljump :)
            this.canDash = true;
            
            this.scene.particleSystem.addParticle(this.transform.position.x - 5, this.transform.position.y, this.effectWalljump, 1);
         }
         if(this.wallRight && this.jumpHop){
            this.xVelocity = -this.moveSpeed;
            this.yVelocity = this.jumpSpeed;

            this.wallJumpTimer = 0.05;

            this.jumping = true;
            this.jumpHop = false;

            // You can dash after your walljump :)
            this.canDash = true;
            
            this.scene.particleSystem.addParticle(this.transform.position.x + 5, this.transform.position.y, this.effectWalljump, -1);
         }
      }
      
      // Jump canceling
      if(this.yVelocity > 0){
         this.jumping = false;
      }
      if(this.jumping && !this.input.jumpDown){
         this.yVelocity = this.yVelocity * 0.25;
         this.jumping = false;
      }
   }

   updateAnimation(delta: number){
      // Animation stuff
      if(this.xVelocity !== 0){
         this.currentAnimation = this.walkAnimation;
      }
      else{
         this.currentAnimation = this.idleAnimation;
      }

      if(!this.grounded && this.yVelocity < 0){
         this.currentAnimation = this.jumpAnimation;
      }
      if(!this.grounded && this.yVelocity >= 0){
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

      // TODO figure out if we need this.velocityY, probably right?
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
      let vel = this.xVelocity * dir;

      if(vel >= maxSpeed) return;

      if(vel + acc > maxSpeed){
         acc = maxSpeed - vel;
      }

      this.xVelocity += acc * dir;
      
   }
   stop(acceleration: number){
      let dir = Math.sign(this.xVelocity);
      let vel = Math.abs(this.xVelocity);

      let rem = acceleration;

      if(vel - rem < 0) rem = vel;

      this.xVelocity -= rem * dir;
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