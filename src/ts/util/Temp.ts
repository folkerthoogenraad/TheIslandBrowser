export function asyncLoadImage(src: string){
   return new Promise<HTMLImageElement>((resolve, reject) =>{
      let img = new Image();

      img.onerror = () => reject();
      img.onload = () => resolve(img); 
      
      img.src = src;
   });
}