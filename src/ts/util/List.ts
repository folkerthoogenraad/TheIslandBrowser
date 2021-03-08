class List{
   has<T>(list: T[], func: ((value: T) => boolean)){
      for(let i = 0; i < list.length; i++){
         if(func(list[i])) return true;
      }
      return false;
   }
}

export default new List();