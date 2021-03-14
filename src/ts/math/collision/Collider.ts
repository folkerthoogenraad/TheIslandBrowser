import { AABB } from "math/AABB";

export abstract class Collider{
   abstract getBounds(x: number, y: number, out: AABB): AABB;
}