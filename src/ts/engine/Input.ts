// Controller map!
export class GamepadInput{
   public static readonly AXIS_LEFT_X = 0;
   public static readonly AXIS_LEFT_Y = 1;
   public static readonly AXIS_RIGHT_X = 2;
   public static readonly AXIS_RIGHT_Y = 3;

   public static readonly BUTTON_A = 0;
   public static readonly BUTTON_B = 1;
   public static readonly BUTTON_X = 2;
   public static readonly BUTTON_Y = 3;
   
   public static readonly BUTTON_DPAD_UP = 12;
   public static readonly BUTTON_DPAD_DOWN = 13;
   public static readonly BUTTON_DPAD_LEFT = 14;
   public static readonly BUTTON_DPAD_RIGHT = 15;

   public static readonly BUTTON_LEFT_BUMPER = 4;
   public static readonly BUTTON_RIGHT_BUMPER = 5;
   public static readonly BUTTON_LEFT_TRIGGER = 6;
   public static readonly BUTTON_RIGHT_TRIGGER = 7;

   public static readonly BUTTON_MENU = 8;
   public static readonly BUTTON_START = 9;

   previousButtonState: boolean[] = [];
   buttonState: boolean[] = [];
   
   axisState: number[] = [];

   index: number;

   constructor(index: number){
      this.index = index;

      let gamepad = this.getNavigationGamepad()!;

      for(let i = 0; i < gamepad.buttons.length; i++){
         this.previousButtonState.push(false);
         this.buttonState.push(false);
      }
      for(let i = 0; i < gamepad.axes.length; i++){
         this.axisState.push(0);
      }
   }

   poll(){
      // Swap the old and the new one, copy to the new
      let temp = this.previousButtonState;
      this.previousButtonState = this.buttonState;
      this.buttonState = temp;

      let gamepad = this.getNavigationGamepad()!;

      for(let i = 0; i < gamepad.buttons.length; i++){
         this.buttonState[i] = gamepad.buttons[i].pressed;
      }
      for(let i = 0; i < gamepad.axes.length; i++){
         this.axisState[i] = gamepad.axes[i];
      }
   }

   isButtonPressed(buttonIndex: number){
      return this.buttonState[buttonIndex] && !this.previousButtonState[buttonIndex];
   }
   isButtonDown(buttonIndex: number){
      return this.buttonState[buttonIndex];
   }
   isButtonReleased(buttonIndex: number){
      return !this.buttonState[buttonIndex] && this.previousButtonState[buttonIndex];
   }

   getNavigationGamepad(){
      const pads = navigator.getGamepads();

      for(let i = 0; i < pads.length; i++){
         if(pads[i] === null) continue;
         if(pads[i].index === this.index) return pads[i];
      }

      return undefined;
   }
}

export class Input{
   gamepads: GamepadInput[];

   constructor(){
      this.gamepads = [];

      window.addEventListener("gamepadconnected", (event: GamepadEvent) => {
         console.log("Gamepad connected.");
         this.gamepads.push(new GamepadInput(event.gamepad.index));
       });
       
       window.addEventListener("gamepaddisconnected", (event: GamepadEvent) => {
         console.log("Gamepad disconnected.");
         
         let index = -1;

         for(let i = 0; i < this.gamepads.length; i++){
            if(this.gamepads[i].index === event.gamepad.index){
               index = i;
            }
         }
         if(index < 0) return;

         console.log("Gamepad found.");

         this.gamepads.splice(index, 1);
       });
   }

   poll(){
      this.gamepads.forEach(pad => pad.poll());
   }
}