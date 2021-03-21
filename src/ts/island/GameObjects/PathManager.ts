import { Path } from "math/Path";
import { GameObject } from "scene/GameObject";

export class PathManager extends GameObject{
   paths: {[key: string]: Path|undefined};

   constructor(){
      super();
      this.paths = {};
   }

   getPath(name: string){
      return this.paths[name];
   }
}