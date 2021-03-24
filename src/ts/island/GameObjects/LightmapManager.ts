import { Game } from "engine/Game";
import { Camera } from "graphics/Camera";
import { Graphics } from "graphics/Graphics";
import { Sprite } from "graphics/Sprite";
import { Surface } from "graphics/Surface";
import { GLGraphics } from "graphics/webgl/GLGraphics";
import IslandResources from "island/IslandResources";
import { Path } from "math/Path";
import { DrawableGameObject } from "scene/DrawableGameObject";
import { GameObject } from "scene/GameObject";

export class LightmapManager extends DrawableGameObject{

   light!: Sprite;
   surface!: Surface;
   camera!: Camera;

   depth: number = 10000;

   constructor(){
      super();
      this.camera = new Camera();
   }

   init(game: Game){
      super.init(game);

      this.surface = game.resources.createSurface(640, 360);
      this.light = new Sprite(game.resources.loadTexture(IslandResources.Light));

      this.light.sourceX = 0;
      this.light.sourceY = 0;
      this.light.sourceWidth = 128;
      this.light.sourceHeight = 128;

      this.light.offsetX = 64;
      this.light.offsetY = 64;
   }

   draw(graphics: Graphics){
      let cam = (graphics as GLGraphics).camera;

      // // GET SURFACE FIRST!
      graphics.setSurface(this.surface);
      graphics.setCamera(this.camera);

      graphics.clear();
      graphics.drawSprite(this.light, 64, 64);

      graphics.resetSurface();
      graphics.setCamera(cam!);
   }
}