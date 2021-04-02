import { Graphics } from "./Graphics";
import { Surface } from "./Surface";

export interface Compositer{
   composite(graphics: Graphics, from: Surface, to: Surface|undefined): void;
}

export class DefaultCompositer implements Compositer{
   composite(graphics: Graphics, from: Surface, to: Surface|undefined){
      graphics.setSurface(to);
      graphics.setView(0, 0, graphics.viewWidth, graphics.viewHeight);
      graphics.drawSurface(from, 0, 0, graphics.viewWidth / from.width, graphics.viewHeight / from.height);
   }
}