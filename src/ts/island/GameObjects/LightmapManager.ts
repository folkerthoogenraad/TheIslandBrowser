import { Game } from "engine/Game";
import { BlendMode } from "graphics/BlendMode";
import { Camera } from "graphics/Camera";
import { Compositer } from "graphics/Compositer";
import { Effect } from "graphics/Effect";
import { Graphics } from "graphics/Graphics";
import { Sprite } from "graphics/Sprite";
import { Surface } from "graphics/Surface";
import { GLGraphics } from "graphics/webgl/GLGraphics";
import IslandResources from "island/IslandResources";
import { Path } from "math/Path";
import { DrawableGameObject } from "scene/DrawableGameObject";
import { GameObject } from "scene/GameObject";
import { PlayerGameObject } from "./PlayerGameObject";


const LightmapVertexSource = `
attribute vec3 position;
attribute vec4 color;
attribute vec2 uv;

uniform mat4 u_MatrixModelView;
uniform mat4 u_MatrixProjection;

uniform vec2 u_ScreenSize;

varying highp vec4 v_Position;
varying highp vec4 v_Color;
varying highp vec2 v_UV;

highp vec4 pixelPerfect(highp vec4 v){
   vec2 sp = vec2(v.x, v.y);

   vec2 ss = u_ScreenSize / 2.0;

   sp = floor(sp * ss) / ss;

   v.x = sp.x;
   v.y = sp.y;

   return v;
}

void main() {
   v_Position = pixelPerfect(u_MatrixProjection * u_MatrixModelView * vec4(position, 1.0));
   v_Color = color;
   v_UV = uv;
   
   gl_Position = v_Position;
}
`;

const LightmapFragmentSource = `
varying highp vec4 v_Position;
varying highp vec4 v_Color;
varying highp vec2 v_UV;

uniform sampler2D u_Texture0;
uniform sampler2D u_Texture1;

highp vec4 gray(highp vec4 color){
   highp float value = (color.r * 0.4 + color.g * 0.3 + color.b * 0.3);

   highp vec4 target = vec4(value, value, value, color.a);

   return target;
}

void main() {
   highp vec4 color0 = texture2D(u_Texture0, v_UV) * v_Color;
   highp vec4 color1 = texture2D(u_Texture1, v_UV) * v_Color;

   // Discard alpha
   if(color0.a < 0.01) discard;

   gl_FragColor = mix(gray(color0) * 0.4, color0, color1);
}
`;

export class LightmapManager extends DrawableGameObject implements Compositer{

   light!: Sprite;
   surface!: Surface;
   camera!: Camera;
   effect!: Effect;

   depth: number = 10000;

   constructor(){
      super();
      this.camera = new Camera();
   }

   composite(graphics: Graphics, from: Surface, to: Surface|undefined){
      graphics.setSurface(to);
      
      graphics.setEffect(this.effect);
      graphics.setSecondaryTexture(this.surface.texture);
      graphics.setView(0, 0, graphics.viewWidth, graphics.viewHeight);
      graphics.drawSurface(from, 0, 0, graphics.viewWidth / from.width, graphics.viewHeight / from.height);

      graphics.setEffect(undefined);
      graphics.setSecondaryTexture(undefined);
   }

   init(game: Game){
      super.init(game);

      this.surface = game.resources.createSurface(640, 360);
      this.light = new Sprite(game.resources.loadTexture(IslandResources.Light));

      this.effect = game.resources.createEffect(LightmapVertexSource, LightmapFragmentSource);

      this.light.sourceX = 0;
      this.light.sourceY = 0;
      this.light.sourceWidth = 128;
      this.light.sourceHeight = 128;

      this.light.offsetX = 64;
      this.light.offsetY = 64;

      this.scene.renderer.addCompositer(this);
   }

   destroy(){
      super.destroy();

      this.scene.renderer.removeCompositer(this);
   }

   draw(graphics: Graphics){
      let player = this.scene.findObject(obj => obj instanceof PlayerGameObject) as PlayerGameObject|undefined;

      graphics.push();
      graphics.setSurface(this.surface);
      graphics.setView(0, 0, this.scene.camera.width, this.scene.camera.height);

      graphics.clear();
      graphics.setBlendMode(BlendMode.Add);

      if(player){
         // graphics.setColor(1, 0, 0);
         graphics.drawSprite(this.light, player.transform.position.x - this.scene.camera.x, player.transform.position.y - this.scene.camera.y);
      }

      graphics.setColor(1, 1, 1);

      graphics.pop();

      // graphics.setBlendMode(BlendMode.Multiply);
      // graphics.drawSurface(this.surface, this.scene.camera.x, this.scene.camera.y, this.scene.camera.width / this.surface.width, this.scene.camera.height / this.surface.height);
      graphics.setBlendMode(BlendMode.Normal);
   }
}