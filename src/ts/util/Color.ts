export class Color{
   r: number;
   g: number;
   b: number;
   a: number;

   constructor(r: number = 1, g: number = 1, b: number = 1, a: number = 1){
      this.r = r;
      this.g = g;
      this.b = b; 
      this.a = a;
   }

   static fromHex(hex: string): Color|null {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? new Color(
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255
      ) : null;
    }    
}