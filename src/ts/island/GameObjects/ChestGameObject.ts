import { Graphics } from "graphics/Graphics";
import { Sprite, SpriteSheet } from "graphics/Sprite";
import { AABB } from "math/AABB";
import { Rigidbody } from "scene/components/Rigidbody";
import { Transform } from "scene/components/Transform";
import { GameObject } from "scene/GameObject";

let sheet = SpriteSheet.fromHTML("Objects");

export class ChestGameObject extends GameObject{
   transform: Transform;
   body: Rigidbody;

   closed: Sprite;
   open: Sprite;

   isOpen: boolean = false;

   constructor(aabb: AABB){
      super();

      this.transform = this.addComponent(new Transform());
      this.transform.position.set(aabb.position);
      
      this.body = this.addComponent(new Rigidbody());

      this.body.localAABB = aabb;

      this.closed = sheet.getSprite(0, 64, 16, 16);
      this.open = sheet.getSprite(16, 64, 16, 16);
   }

   draw(graphics: Graphics){
      graphics.drawSpriteSimple(this.isOpen ? this.open : this.closed, this.transform.position.x, this.transform.position.y);
   }
}