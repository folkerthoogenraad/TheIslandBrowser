export class Signal<T>{
   functions: ((type: T) => void)[];

   constructor(){
      this.functions = [];
   }

   listen(func: (type: T) => void){
      this.functions.push(func);
   }
   remove(func: (type: T) => void){
      let index = this.functions.indexOf(func);
      if(index < 0) return;

      this.functions.splice(index);
   }

   emit(event : T){
      this.functions.forEach(func => func(event));
   }
}