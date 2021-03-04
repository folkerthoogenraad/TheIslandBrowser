import { Vector2 } from "math/Vector2";

export class Camera{
   center: Vector2 = new Vector2(640 / 2, 360 / 2);

   // TODO this shouldn't be defined like this, because this depends on the screen aspect ratio...
   width: number = 640;
   height: number = 360;
}