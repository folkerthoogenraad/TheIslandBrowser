export function now(){
   if(window.performance){
      return window.performance.now() / 1000;
   }
   return Date.now() / 1000;
}