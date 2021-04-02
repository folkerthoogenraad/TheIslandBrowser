
export function createFontTextureBlob(size: number){
   let canvas = new OffscreenCanvas(256, 256);

   let context = canvas.getContext("2d")!;

   context.imageSmoothingEnabled = false;
   context.imageSmoothingQuality = "low";
   
   // TODO make it alpha
   context.clearRect(0, 0, 256, 256);

   context.font = `${size}px ZanbarSquare`;

   context.textAlign = "left";
   context.textBaseline = "top";

   // TODO make it white :)
   context.fillStyle = "black"; 
   context.fillText("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 0, 0);

   return canvas.convertToBlob({
      type: "image/png"
    });
}