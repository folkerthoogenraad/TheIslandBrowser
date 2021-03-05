import { GamepadInput, Keyboard } from "engine/Input";
import { Component } from "scene/Component";

export class PlayerInputComponent extends Component{
   direction: number = 0;

   jumpPressed: boolean = false;
   jumpDown: boolean = false;

   dashPressed: boolean = false;

   constructor(){
      super();
   }

   update(delta: number){
      this.jumpPressed = false;
      this.dashPressed = false;

      this.game.input.gamepads.forEach(pad => {
         if(pad.isButtonPressed(GamepadInput.ButtonA)){
            this.jumpPressed = true;
         }
         if(pad.isButtonPressed(GamepadInput.ButtonRightTrigger)){
            this.dashPressed = true;
         }
         this.jumpDown = pad.isButtonDown(GamepadInput.ButtonA);

         this.direction = pad.leftAxisX;
      });

      // if(this.game.input.keyboard.isKeyPressed(Keyboard.KeySpace)) this.jumpPressed = true;

      // if(this.game.input.keyboard.isKeyDown(Keyboard.KeyArrowLeft)) this.direction = -1;
      // if(this.game.input.keyboard.isKeyDown(Keyboard.KeyArrowRight)) this.direction = 1;
   }
}