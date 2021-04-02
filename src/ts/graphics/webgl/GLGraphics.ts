import { BlendMode } from "graphics/BlendMode";
import { Camera } from "graphics/Camera";
import { Effect } from "graphics/Effect";
import { Graphics } from "graphics/Graphics";
import { Sprite } from "graphics/Sprite";
import { Surface } from "graphics/Surface";
import { Texture } from "graphics/Texture";
import { Color } from "util/Color";
import { DefaultFragmentSource, DefaultVertexSource, GLShaderProgram, GLShaderAttributeSet } from "./GLShader";
import { GLSurface, GLWindowSurface } from "./GLSurface";
import { GLTexture } from "./GLTexture";
import { GLVertexBatch } from "./GLVertexBatch";

// TODO add to this frame if needed :)
interface GLGraphicsStackItem{
   surface: GLSurface|undefined;
   projectionMatrix: Float32Array;
}

export class GLGraphics extends Graphics{
   gl: WebGLRenderingContext;

   pixelTexture: GLTexture;

   currentTexture0: GLTexture;
   currentTexture1?: GLTexture;

   stack: GLGraphicsStackItem[];
   currentSurface?: GLSurface;

   batch: GLVertexBatch;

   projectionMatrix: Float32Array;
   modelViewMatrix: Float32Array;

   drawing: boolean = false;
   color: Color;

   defaultShader: GLShaderProgram;
   shader: GLShaderProgram;
   attributes: GLShaderAttributeSet;

   flushCount: number = 0;

   constructor(gl: WebGLRenderingContext){
      super();

      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if(debugInfo !== null){
         const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
         const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
   
         console.log(vendor);
         console.log(renderer);
      }
      else{
         console.log("no vendor info");
      }


      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0, 0, 0, 1);

      this.gl = gl;

      this.color = new Color(1, 1, 1, 1);

      this.batch = new GLVertexBatch(this.gl);

      this.pixelTexture = new GLTexture(gl);
      this.pixelTexture.setData(1, 1, GLTexture.colorData(1, 1));
      this.currentTexture0 = this.pixelTexture;

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

      this.defaultShader = new GLShaderProgram(gl, DefaultVertexSource, DefaultFragmentSource);
      this.shader = this.defaultShader;

      this.attributes = new GLShaderAttributeSet();
      this.attributes.load(this.shader);

      this.stack = [];

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

   setSecondaryTexture(texture?: Texture){
      if(this.currentTexture1 !== texture) this.flush();
   
      this.currentTexture1 = texture as GLTexture|undefined;  
   }

   private setTexture(texture: GLTexture){
      if(this.currentTexture0 !== texture) this.flush();
   
      this.currentTexture0 = texture;
   }
   private ensureSize(n: number){
      if(this.batch.left < n) this.flush();
   }

   setEffect(effect?: Effect){
      if(effect === undefined){
         effect = this.defaultShader;
      }

      if(this.shader !== effect) this.flush();

      this.shader = effect as GLShaderProgram;
      this.attributes.load(this.shader);
   }

   begin(){
      if(this.drawing) return;
      this.drawing = true;

      this.flushCount = 0;
   }

   end(){
      if(!this.drawing)
         return;

      this.flush();
      this.drawing = false;

      // console.log("flush: " + this.flushCount);
   }

   flush(){
      if(!this.drawing) return;

      this.batch.flush();
      
      if(this.batch.length === 0) return;

      this.flushCount++;
      
      let gl = this.gl;

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

      this.shader.setUniformTexture(this.attributes.texture0Uniform, this.currentTexture0);

      // Set secondary texture :)
      if(this.currentTexture1){
         this.shader.setUniformTexture(this.attributes.texture1Uniform, this.currentTexture1, 1);
      }

      gl.drawArrays(gl.TRIANGLES, 0, this.batch.length);
   }

   setView(x: number, y: number, w: number, h: number){
      this.flush();

      let floorX = this.viewWidth / w;
      let floorY = this.viewHeight / h;

      let scaleX = 2 / w;
      let scaleY = 2 / h;

      let centerX = x + w / 2;
      let centerY = y + h / 2;

      // Flip if we are drawing to the window
      if(this.currentSurface === undefined) scaleY = -scaleY;

      // Snapping to whole pixels
      let offsetX = -Math.floor(centerX * floorX) / floorX  * scaleX;
      let offsetY = -Math.floor(centerY * floorY) / floorY * scaleY;

      this.projectionMatrix = new Float32Array([
         scaleX, 0, 0, 0,
         0, scaleY, 0, 0,
         0, 0, 1, 0,
         offsetX, offsetY, 0, 1
      ]);

   }

   push(){
      this.stack.push({
         surface: this.currentSurface,
         projectionMatrix: new Float32Array(this.projectionMatrix),
      });
   }
   pop(){
      if(this.stack.length <= 0) return;
      
      let frame = this.stack.pop()!;

      this.setSurface(frame.surface);
      this.projectionMatrix.set(frame.projectionMatrix);
   }
   
   setSurface(surface?: Surface){
      if(this.currentSurface === surface) return;
      if(this.currentSurface !== surface) this.flush();

      this.currentSurface = surface as GLSurface;
      
      this.gl.bindTexture(this.gl.TEXTURE_2D, null);

      if(this.currentSurface !== undefined){
         // Don't use the default view :)
         // this.setView(0, 0, this.currentSurface.width, this.currentSurface.height);
         this.currentSurface.bind();
      }
      else{
         this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
      }
      

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

   setBlendMode(blendMode: BlendMode){
      this.flush();

      switch(blendMode){
         case BlendMode.Normal:
            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
            break;
         case BlendMode.Add:
            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
            break;
         case BlendMode.Multiply:
            this.gl.blendFunc(this.gl.DST_COLOR, this.gl.ONE_MINUS_SRC_ALPHA)
            // this.gl.blendFunc(this.gl.ZERO, this.gl.SRC_COLOR);
            break;
      }
   }
}