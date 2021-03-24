import { Camera } from "graphics/Camera";
import { Graphics } from "graphics/Graphics";
import { Sprite } from "graphics/Sprite";
import { Surface } from "graphics/Surface";
import { Texture } from "graphics/Texture";
import { Color } from "util/Color";
import { DefaultFragmentSource, DefaultVertexSource, GLShaderProgram, GLShaderAttributeSet } from "./GLShader";
import { GLSurface } from "./GLSurface";
import { GLTexture } from "./GLTexture";
import { GLVertexBatch } from "./GLVertexBatch";

export class GLGraphics extends Graphics{
   gl: WebGLRenderingContext;

   pixelTexture: GLTexture;
   currentTexture: GLTexture;

   currentSurface?: GLSurface;

   batch: GLVertexBatch;

   projectionMatrix: Float32Array;
   modelViewMatrix: Float32Array;

   drawing: boolean = false;
   color: Color;

   camera?: Camera;

   shader: GLShaderProgram;
   attributes: GLShaderAttributeSet;

   constructor(gl: WebGLRenderingContext){
      super();

      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0, 0, 0, 1);

      this.gl = gl;

      this.color = new Color(1, 1, 1, 1);

      this.batch = new GLVertexBatch(this.gl);

      this.pixelTexture = new GLTexture(gl);
      this.pixelTexture.setData(1, 1, GLTexture.colorData(1, 1));
      this.currentTexture = this.pixelTexture;

      this.projectionMatrix = new Float32Array([
         1, 0, 0, 0,
         0, 1, 0, 0,
         0, 0, 1, 0,
         0, 0, 0, 1
      ]);
      this.modelViewMatrix = new Float32Array([
         1, 0, 0, 0,
         0, 1, 0, 0,
         0, 0, 1, 0,
         0, 0, 0, 1
      ]);

      this.batch = new GLVertexBatch(this.gl);

      this.shader = new GLShaderProgram(gl, DefaultVertexSource, DefaultFragmentSource);

      this.attributes = new GLShaderAttributeSet();
      this.attributes.load(this.shader);

      this.updateSize();
   }

   clear(){
      this.flush();
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
   }

   drawSpriteRaw(sprite: Sprite, x: number, y: number, scaleX: number, scaleY: number, rotation: number){
      if(sprite.texture === undefined) return;
      
      this.setTexture(sprite.texture as GLTexture);

      this.ensureSize(6);
      
      this.batch.color(this.color.r, this.color.g, this.color.b, this.color.a);

      x -= sprite.offsetX * scaleX;
      y -= sprite.offsetY * scaleY;
      
      let w = sprite.width * scaleX;
      let h = sprite.height * scaleY;

      let u0 = sprite.sourceLeft / sprite.texture.width;
      let u1 = sprite.sourceRight / sprite.texture.width;
      let v0 = sprite.sourceTop / sprite.texture.height;
      let v1 = sprite.sourceBottom / sprite.texture.height;

      this.batch.uv(u0, v0);
      this.batch.vertex(x, y, 0);
      this.batch.uv(u1, v0);
      this.batch.vertex(x + w, y, 0);
      this.batch.uv(u1, v1);
      this.batch.vertex(x + w, y + h, 0);
      
      this.batch.uv(u0, v0);
      this.batch.vertex(x, y, 0);
      this.batch.uv(u1, v1);
      this.batch.vertex(x + w, y + h, 0);
      this.batch.uv(u0, v1);
      this.batch.vertex(x, y + h, 0);
   }

   drawTexture(texture: Texture, x: number, y: number, scaleX: number, scaleY: number){
      this.setTexture(texture as GLTexture);

      this.ensureSize(6);
      
      this.batch.color(this.color.r, this.color.g, this.color.b, this.color.a);
      
      let w = texture.width * scaleX;
      let h = texture.height * scaleY;

      let u0 = 0;
      let u1 = 1;
      let v0 = 0;
      let v1 = 1;

      this.batch.uv(u0, v0);
      this.batch.vertex(x, y, 0);
      this.batch.uv(u1, v0);
      this.batch.vertex(x + w, y, 0);
      this.batch.uv(u1, v1);
      this.batch.vertex(x + w, y + h, 0);
      
      this.batch.uv(u0, v0);
      this.batch.vertex(x, y, 0);
      this.batch.uv(u1, v1);
      this.batch.vertex(x + w, y + h, 0);
      this.batch.uv(u0, v1);
      this.batch.vertex(x, y + h, 0);

   }

   drawSpriteSimple(sprite: Sprite, x: number, y: number){
      if(sprite.texture === undefined) return;
      this.setTexture(sprite.texture as GLTexture);

      this.ensureSize(6);
      
      this.batch.color(this.color.r, this.color.g, this.color.b, this.color.a);

      x -= sprite.offsetX;
      y -= sprite.offsetY;
      
      let w = sprite.width;
      let h = sprite.height;

      let u0 = sprite.sourceLeft / sprite.texture.width;
      let u1 = sprite.sourceRight / sprite.texture.width;
      let v0 = sprite.sourceTop / sprite.texture.height;
      let v1 = sprite.sourceBottom / sprite.texture.height;

      this.batch.uv(u0, v0);
      this.batch.vertex(x, y, 0);
      this.batch.uv(u1, v0);
      this.batch.vertex(x + w, y, 0);
      this.batch.uv(u1, v1);
      this.batch.vertex(x + w, y + h, 0);
      
      this.batch.uv(u0, v0);
      this.batch.vertex(x, y, 0);
      this.batch.uv(u1, v1);
      this.batch.vertex(x + w, y + h, 0);
      this.batch.uv(u0, v1);
      this.batch.vertex(x, y + h, 0);
   }

   drawRectangle(x: number, y: number, w: number, h: number, fill: boolean){
      this.setTexture(this.pixelTexture);

      this.ensureSize(6);
      
      this.batch.color(this.color.r, this.color.g, this.color.b, this.color.a);
      this.batch.uv(0, 0);

      this.batch.vertex(x, y, 0);
      this.batch.vertex(x + w, y, 0);
      this.batch.vertex(x + w, y + h, 0);

      this.batch.vertex(x, y, 0);
      this.batch.vertex(x + w, y + h, 0);
      this.batch.vertex(x, y + h, 0);
   }

   setColorRaw(r: number, g: number, b: number, a: number){
      this.color.r = r;
      this.color.g = g;
      this.color.b = b;
      this.color.a = a;
   }

   private setTexture(texture: GLTexture){
      if(this.currentTexture !== texture) this.flush();

      this.currentTexture = texture;
   }
   private ensureSize(n: number){
      if(this.batch.left < n) this.flush();
   }

   begin(){
      if(this.drawing) return;
      this.drawing = true;
   }

   end(){
      if(!this.drawing)
         return;

      this.flush();
      this.drawing = false;
   }

   flush(){
      if(!this.drawing) return;

      this.batch.flush();
      
      if(this.batch.length === 0) return;
      
      let gl = this.gl;

      this.setCameraMatrix(this.currentSurface === undefined);

      gl.vertexAttribPointer(this.attributes.positionAttribute, 3, gl.FLOAT, false, GLVertexBatch.StrideInBytes, GLVertexBatch.PositionOffsetInBytes);
      gl.vertexAttribPointer(this.attributes.colorAttribute, 4, gl.FLOAT, false, GLVertexBatch.StrideInBytes, GLVertexBatch.ColorOffsetInBytes);
      gl.vertexAttribPointer(this.attributes.uvAttribute, 2, gl.FLOAT, false, GLVertexBatch.StrideInBytes, GLVertexBatch.UVOffsetInBytes);

      // Enable all
      gl.enableVertexAttribArray(this.attributes.positionAttribute);
      gl.enableVertexAttribArray(this.attributes.colorAttribute);
      gl.enableVertexAttribArray(this.attributes.uvAttribute);

      // TODO if statements and stuff :)
      this.shader.use();

      this.shader.setUniformMatrix(this.attributes.modelViewUniform, this.modelViewMatrix);
      this.shader.setUniformMatrix(this.attributes.projectionUniform, this.projectionMatrix);
      
      this.shader.setUniformPosition(this.attributes.screenSizeUniform, this.viewWidth, this.viewHeight);

      this.shader.setUniformTexture(this.attributes.textureUniform, this.currentTexture);

      gl.drawArrays(gl.TRIANGLES, 0, this.batch.length);
   }

   setCamera(camera: Camera){
      if(this.camera !== camera){
         this.flush();
      }

      this.camera = camera;
   }

   setCameraMatrix(flip: boolean = false){
      if(this.camera === undefined) return;

      let cameraWidth = this.camera.width;
      let cameraHeight = this.camera.height;

      if(!this.camera.preserveAspectRatio){
         let asp = this.viewWidth / this.viewHeight;

         cameraWidth = cameraHeight * asp;
      }

      let floorX = this.viewWidth / cameraWidth;
      let floorY = this.viewHeight / cameraHeight;

      let scaleX = 2 / cameraWidth;
      let scaleY = 2 / cameraHeight;

      if(flip) scaleY = -scaleY;

      // Snapping to whole pixels
      let offsetX = -Math.floor(this.camera.center.x * floorX) / floorX  * scaleX;
      let offsetY = -Math.floor(this.camera.center.y * floorY) / floorY * scaleY;

      this.projectionMatrix = new Float32Array([
         scaleX, 0, 0, 0,
         0, scaleY, 0, 0,
         0, 0, 1, 0,
         offsetX, offsetY, 0, 1
      ]);
   }
   
   resetSurface(){
      if(this.currentSurface !== undefined) this.flush();
      this.currentSurface = undefined;

      this.gl.bindTexture(this.gl.TEXTURE_2D, null);
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);

      this.updateViewport();
   }
   setSurface(surface: Surface){
      if(this.currentSurface !== surface) this.flush();
      this.currentSurface = surface as GLSurface;
      
      this.gl.bindTexture(this.gl.TEXTURE_2D, null);
      this.currentSurface.bind();

      this.updateViewport();
   }

   updateSize(){
      let canvas = this.gl.canvas as HTMLCanvasElement;

      // canvas.width = canvas.offsetWidth;
      // canvas.height = canvas.offsetHeight;
      canvas.width = canvas.offsetHeight * 16 / 9;
      canvas.height = canvas.offsetHeight;

      this.updateViewport();
   }

   get viewWidth(){
      if(this.currentSurface !== undefined) return this.currentSurface.width;
      return this.gl.canvas.width;
   }
   get viewHeight(){
      if(this.currentSurface !== undefined) return this.currentSurface.height;
      return this.gl.canvas.height;
   }
   
   updateViewport(){
      this.gl.viewport(0, 0, this.viewWidth, this.viewHeight);
   }
   
   public setAlpha(a: number){
      this.color.a = a;
   }
}