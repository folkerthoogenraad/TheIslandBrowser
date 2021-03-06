export function now(){
   if(window.performance){
      return window.performance.now() / 1000;
   }
   return Date.now() / 1000;
}

export function format(timeInSeconds: number){
   let seconds = Math.floor(timeInSeconds);
   let millis = Math.floor((timeInSeconds % 1) * 1000);

   return ("" + seconds).padStart(2, '0') + ":" + ("" + millis).padStart(3, '0');
}