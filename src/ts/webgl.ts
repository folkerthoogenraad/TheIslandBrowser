import { Camera } from "graphics/Camera";
import { GLGraphics } from "graphics/webgl/GLGraphics";
import { GLResourceManager } from "graphics/webgl/GLResourceManager";
import { DefaultVertexSource, GLShaderProgram, DefaultFragmentSource } from "graphics/webgl/GLShader";
import IslandResources from "island/IslandResources";

export function initWebgl(canvas: HTMLCanvasElement){
   canvas.width = canvas.offsetWidth;
   canvas.height = canvas.offsetHeight;
   
   let gl = canvas.getContext("webgl")!;

   if(gl === null){
      return;
   }

   let camera = new Camera();

   let graphics = new GLGraphics(gl);
   let resources = new GLResourceManager(gl);

   let sheet = resources.loadSpriteSheet(IslandResources.SheetPlayer);
   let sprite = sheet.getSprite(0, 0, 16, 16);

   sprite.center();

   let draw = ()=>{
      graphics.setCamera(camera);
   
      graphics.begin();
      graphics.clear();
   
      graphics.drawSprite(sprite, 24, 24, -1, 1);
   
      graphics.end();
   };

   draw();

   (window as any).draw = draw;

   // let resources = new GLResourceManager(gl);
   
   // let program = new GLShaderProgram(gl, DefaultVertexSource, DefaultFragmentSource);

   // let positionAttribute = program.getAttributeLocation("position");
   // let colorAttribute = program.getAttributeLocation("color");
   // let uvAttribute = program.getAttributeLocation("uv");

   // let modelViewUniform = program.getUniformLocation("u_MatrixModelView");
   // let projectionUniform = program.getUniformLocation("u_MatrixProjection");
   // let textureUniform = program.getUniformLocation("u_Texture");

   // let texture = resources.loadTexture("/assets/img/Player.png");

   // const projectionMatrix = new Float32Array([
   //    2, 0, 0, 0,
   //    0, -2, 0, 0,
   //    0, 0, 1, 0,
   //    -1, 1, 0, 1
   // ]);
   // const modelViewMatrix = new Float32Array([
   //    1, 0, 0, 0,
   //    0, 1, 0, 0,
   //    0, 0, 1, 0,
   //    0, 0, 0, 1
   // ]);

   // let batch = new GLVertexBatch(gl);

   // gl.enable(gl.BLEND);
   // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);  

   // let drawScene = () => {
   //    gl.clearColor(0, 0, 0, 1);
   //    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

   //    const s = 1 / 8;

   //    // Setup array buffers
   //    // gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
   //    batch.color(1, 1, 1, 1); batch.uv(0, 0); batch.vertex(0, 0, 0);
   //    batch.color(1, 1, 1, 1); batch.uv(s, 0); batch.vertex(1, 0, 0);
   //    batch.color(1, 1, 1, 1); batch.uv(s, s); batch.vertex(1, 1, 0);
      
   //    batch.color(1, 1, 1, 1); batch.uv(0, 0); batch.vertex(0, 0, 0);
   //    batch.color(1, 1, 1, 1); batch.uv(s, s); batch.vertex(1, 1, 0);
   //    batch.color(1, 1, 1, 1); batch.uv(0, s); batch.vertex(0, 1, 0);

   //    batch.flush();

   //    // Vertex
   //    gl.vertexAttribPointer(positionAttribute, 3, gl.FLOAT, false, GLVertexBatch.StrideInBytes, GLVertexBatch.PositionOffsetInBytes);
   //    gl.vertexAttribPointer(colorAttribute, 4, gl.FLOAT, false, GLVertexBatch.StrideInBytes, GLVertexBatch.ColorOffsetInBytes);
   //    gl.vertexAttribPointer(uvAttribute, 2, gl.FLOAT, false, GLVertexBatch.StrideInBytes, GLVertexBatch.UVOffsetInBytes);

   //    // Enable all
   //    gl.enableVertexAttribArray(positionAttribute);
   //    gl.enableVertexAttribArray(colorAttribute);
   //    gl.enableVertexAttribArray(uvAttribute);

   //    program.use();
   //    program.setUniformMatrix(modelViewUniform!, modelViewMatrix);
   //    program.setUniformMatrix(projectionUniform!, projectionMatrix);

   //    program.setUniformTexture(textureUniform!, texture);

   //    gl.drawArrays(gl.TRIANGLES, 0, batch.length);
   // }

   window.addEventListener("resize", ()=>{
      graphics.updateSize();
   });
}