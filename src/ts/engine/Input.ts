// Controller map!
export class GamepadInput{
   public static readonly AxisLeftX = 0;
   public static readonly AxisLeftY = 1;
   public static readonly AxisRightX = 2;
   public static readonly AxisRightY = 3;

   public static readonly ButtonA = 0;
   public static readonly ButtonB = 1;
   public static readonly ButtonX = 2;
   public static readonly ButtonY = 3;
   
   public static readonly ButtonDpadUp = 12;
   public static readonly ButtonDpadDown = 13;
   public static readonly ButtonDpadLeft = 14;
   public static readonly ButtonDpadRight = 15;

   public static readonly ButtonLeftBumper = 4;
   public static readonly ButtonRightBumper = 5;
   public static readonly ButtonLeftTrigger = 6;
   public static readonly ButtonRightTrigger = 7;

   public static readonly ButtonMenu = 8;
   public static readonly ButtonStart = 9;

   previousButtonState: boolean[] = [];
   buttonState: boolean[] = [];
   
   axisState: number[] = [];

   index: number;

   deadZone: number = 0.2;

   constructor(index: number){
      this.index = index;

      let gamepad = this.getNavigatorGamepad()!;

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

      let gamepad = this.getNavigatorGamepad()!;

      for(let i = 0; i < gamepad.buttons.length; i++){
         this.buttonState[i] = gamepad.buttons[i].pressed;
      }
      for(let i = 0; i < gamepad.axes.length; i++){
         this.axisState[i] = gamepad.axes[i];

         if(Math.abs(this.axisState[i]) < this.deadZone) this.axisState[i] = 0; 
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

   get leftAxisX() { return this.axisState[GamepadInput.AxisLeftX];}
   get leftAxisY() { return this.axisState[GamepadInput.AxisLeftY];}
   get rightAxisX() { return this.axisState[GamepadInput.AxisRightX];}
   get rightAxisY() { return this.axisState[GamepadInput.AxisRightY];}

   getNavigatorGamepad(){
      const pads = navigator.getGamepads();

      for(let i = 0; i < pads.length; i++){
         let pad = pads[i];
         if(pad === null) continue;
         if(pad.index === this.index) return pad;
      }

      return undefined;
   }
}

type Key = string;

export class Keyboard{
   public static readonly KeyEnter : Key = "Enter";
   public static readonly KeyTab : Key = "Tab";
   public static readonly KeySpace : Key = " ";
   
   public static readonly KeyArrowUp : Key = "ArrowUp";
   public static readonly KeyArrowDown : Key = "ArrowDown";
   public static readonly KeyArrowLeft : Key = "ArrowLeft";
   public static readonly KeyArrowRight : Key = "ArrowRight";

   downKeys: Set<Key>;
   pressedKeys: Set<Key>;
   releasedKeys: Set<Key>;

   root?: HTMLElement;

   constructor(root?: HTMLElement){
      this.downKeys = new Set<Key>();
      this.pressedKeys = new Set<Key>();
      this.releasedKeys = new Set<Key>();

      console.log("init root!");

      this.root = root;
      this.root?.addEventListener("keydown", event => {
         if(event.repeat) return;

         this.pressedKeys.add(event.key);
         this.downKeys.add(event.key);
      });
      this.root?.addEventListener("keyup", event =>{
         if(event.repeat) return;

         this.releasedKeys.add(event.key);
         this.downKeys.delete(event.key);
      });
   }

   flush(){
      this.pressedKeys.clear();
      this.releasedKeys.clear();
   }

   isKeyDown(key: Key){
      return this.downKeys.has(key);
   }
   isKeyPressed(key: Key){
      return this.pressedKeys.has(key);
   }
   isKeyReleased(key: Key){
      return this.releasedKeys.has(key);
   }
}

export class Input {
   gamepads: GamepadInput[];
   keyboard: Keyboard;

   root?: HTMLElement;

   constructor(root?: HTMLElement){
      this.gamepads = [];
      this.keyboard = new Keyboard(root);
      this.root = root;

      // Weird construction but typescript hates progress 
      window.addEventListener("gamepadconnected", ev => {
         let event = ev as GamepadEvent;

         console.log("Gamepad connected.");

         this.gamepads.push(new GamepadInput(event.gamepad.index));
       });
       
       window.addEventListener("gamepaddisconnected", ev => {
         let event = ev as GamepadEvent;

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
   flush(){
      this.keyboard.flush();
   }
}