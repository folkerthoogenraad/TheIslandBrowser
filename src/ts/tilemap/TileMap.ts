import { Animation } from "graphics/Animation";
import { Graphics } from "graphics/Graphics";
import { Sprite, SpriteSheet } from "graphics/Sprite";
import { getSpriteFromTileset, TiledMap, TiledObject, TiledObjectLayer, TiledObjectLayerType, TiledTileLayer, TiledTileLayerType, TiledTileset } from "./TiledMap";

type TilemapObjectLoader = (object: TiledObject) => void;

export class TilemapLayer{
   width: number;
   height: number;
   tiles: (Animation|undefined)[];

   constructor(width: number, height: number){
      this.width = width;
      this.height = height;

      this.tiles = [];

      // length stuff... :')
      for(let i = 0; i < width * height; i++) this.tiles.push(undefined);
   }

   getTile(x: number, y: number){
      return this.tiles[x + y * this.width];
   }
   setTile(x: number, y: number, animation: Animation){
      this.tiles[x + y * this.width] = animation;
   }
   setTileFromIndex(index: number, animation: Animation){
      this.tiles[index] = animation;
   }

   update(delta: number){
      for(let x = 0; x < this.width; x++){
         for(let y = 0; y < this.height; y++){
            let tile = this.getTile(x, y);
            if(tile === undefined) continue;

            tile.update(delta);
         }
      }
   }
   
   draw(graphics: Graphics, tileWidth: number, tileHeight: number){
      for(let x = 0; x < this.width; x++){
         for(let y = 0; y < this.height; y++){
            let tile = this.getTile(x, y);
            if(tile === undefined) continue;

            graphics.drawSpriteSimple(tile.frame, x * tileWidth, y * tileHeight);
         }
      }
   }
}

export class TileMap {
   width: number;
   height: number;
   tileWidth: number;
   tileHeight: number;

   backgroundColor: string = "";

   layers: TilemapLayer[];

   constructor(width: number, height: number, tileWidth: number, tileHeight: number){
      this.width = width;
      this.height = height;
      this.tileWidth = tileWidth;
      this.tileHeight = tileHeight;
      this.layers = [];
   }

   draw(graphics: Graphics){
      graphics.setColor(this.backgroundColor);
      graphics.drawRectangle(0, 0, this.width * this.tileWidth, this.height * this.tileHeight, true);
      
      this.layers.forEach(layer => layer.draw(graphics, this.tileWidth, this.tileHeight));
   }

   // TODO maybe more like batch update every x frames or devide up the work somehow over muptiple frames
   update(delta: number){      
      this.layers.forEach(layer => layer.update(delta));
   }

   public static fromTiledMap(map: TiledMap, loader: TilemapObjectLoader){
      let tilemap = new TileMap(map.width, map.height, map.tilewidth, map.tileheight);

      tilemap.backgroundColor = map.backgroundcolor;
      
      // TILESETS
      let tilesets: {set: TiledTileset, sheet: SpriteSheet}[] = [];
      let tiles: { [key: number]: Animation } = {};
      
      map.tilesets.forEach(set => {
         let sheet = SpriteSheet.fromHTML(set.name);
         tilesets.push({
            set,
            sheet
         });

         // Load all default animations
         set.tiles?.forEach(tile => {
            let index = tile.id + set.firstgid;

            let animation =  new Animation();

            tile.animation.forEach(frame => {
               animation.addFrame(getSpriteFromTileset(set, frame.tileid, sheet));
            });

            animation.frameRate = 4;

            tiles[index] = animation;
         });
      });

      console.dir(tilesets);

      // TILE LAYERS
      map.layers.forEach(layer => {
         if(layer.type === TiledTileLayerType){
            let tileLayer = layer as TiledTileLayer;

            if(!layer.visible){
               return;
            }

            let tilemapLayer = new TilemapLayer(tileLayer.width, tileLayer.height);

            for(let i = 0; i < tileLayer.data.length; i++){
               let tileIndex = tileLayer.data[i];

               let tile = tiles[tileIndex];
               
               // Find tile
               if(tile === undefined && tileIndex !== 0){
                  for(let j = 0; j < tilesets.length; j++){
                     let tileset = tilesets[j];

                     if(tileIndex >= tileset.set.firstgid && tileIndex < tileset.set.firstgid + tileset.set.tilecount){
                        let sprite = getSpriteFromTileset(tileset.set, tileIndex - tileset.set.firstgid, tileset.sheet);

                        tile = new Animation();
                        tile.addFrame(sprite);
                     }
                  }
                  tiles[tileIndex] = tile;
               }

               if(tile !== undefined){
                  tilemapLayer.setTileFromIndex(i, tile.clone());
               }
            }

            tilemap.layers.push(tilemapLayer);
         }
      });

      // OBJECT LAYER
      map.layers.forEach(layer => {
         if(layer.type === TiledObjectLayerType){
            let objLayer = layer as TiledObjectLayer;
            objLayer.objects.forEach(loader);
         }
      });

      return tilemap;
   }

   public static async fromTiledMapDownload(file: string, loader: TilemapObjectLoader){
      let result = await fetch(file);
      let d = await result.json();

      return this.fromTiledMap(d as TiledMap, loader);
   }

   get pixelWidth(){
      return this.width * this.tileWidth;
   }
   get pixelHeight(){
      return this.height * this.tileHeight;
   }
}