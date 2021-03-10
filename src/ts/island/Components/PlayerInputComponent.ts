import { GamepadInput, Keyboard } from "engine/Input";
import { Component } from "scene/Component";

export class PlayerInputComponent extends Component{
   direction: number = 0;

   jumpPressed: boolean = false;
   jumpDown: boolean = false;

   dashPressed: boolean = false;

   interactPressed: boolean = false;

   constructor(){
      super();
   }

   update(delta: number){
      this.jumpPressed = false;
      this.dashPressed = false;
      this.interactPressed = false;
      this.jumpDown = false;
      this.direction = 0;

      // TODO actually switch between controllers instead of this half baked half assed solution
      this.game.input.gamepads.forEach(pad => {
         if(pad.isButtonPressed(GamepadInput.ButtonA)){
            this.jumpPressed = true;
         }
         if(pad.isButtonPressed(GamepadInput.ButtonX)){
            this.interactPressed = true;
         }
         if(pad.isButtonPressed(GamepadInput.ButtonRightTrigger)){
            this.dashPressed = true;
         }
         if(pad.isButtonDown(GamepadInput.ButtonA)){
            this.jumpDown = true;
         }

         this.direction = pad.leftAxisX;
      });

      if(this.game.input.keyboard.isKeyPressed(Keyboard.KeySpace)) this.jumpPressed = true;
      if(this.game.input.keyboard.isKeyDown(Keyboard.KeySpace)) this.jumpDown = true;
      if(this.game.input.keyboard.isKeyPressed(Keyboard.KeyC)) this.dashPressed = true;
      if(this.game.input.keyboard.isKeyPressed(Keyboard.KeyX)) this.interactPressed = true;

      if(this.game.input.keyboard.isKeyDown(Keyboard.KeyArrowLeft)) this.direction = -1;
      if(this.game.input.keyboard.isKeyDown(Keyboard.KeyArrowRight)) this.direction = 1;
   }
}