export class Curve{
   public static lerp(a: number, b: number, f: number){
      return a + (b - a) * f;
   }
   static linear(a: number, b: number, f: number){
      return Curve.lerp(a,b,f);
   }
}