import { Camera } from "graphics/Camera";
import { Graphics } from "graphics/Graphics";

document.addEventListener("DOMContentLoaded", ()=>{
   let canvas = document.getElementById("canvas") as HTMLCanvasElement;

   let camera = new Camera();

   let graphics = new Graphics(canvas);

   graphics.reset();
   graphics.clearScreen();
   graphics.setCamera(camera);
   
   graphics.setColor("black");
   graphics.drawRectangle(0, 0, 640, 360, true);

   graphics.setColor("red");
   graphics.drawRectangle(16, 16, 640 - 32, 360 - 32, true);
});
