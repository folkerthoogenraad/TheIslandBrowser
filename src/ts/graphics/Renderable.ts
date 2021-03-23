import { Graphics } from "./Graphics";

export interface Renderable{
   depth: number;

   draw(graphics: Graphics): void;
}