import { AABB } from "math/AABB";
import { Vector2 } from "math/Vector2";

export abstract class Collider{
   abstract getBounds(position: Vector2, out: AABB): AABB;
}