class List{
   has<T>(list: T[]|undefined, func: ((value: T) => boolean)){
      if(list === undefined) return false;
      
      for(let i = 0; i < list.length; i++){
         if(func(list[i])) return true;
      }
      return false;
   }
}

export default new List();