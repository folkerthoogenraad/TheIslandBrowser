import { Graphics } from "graphics/Graphics";
import { Sprite, SpriteSheet } from "graphics/Sprite";
import { TiledMap, TiledObject, TiledObjectLayer, TiledObjectLayerType, TiledTileLayer, TiledTileLayerType, TiledTileset } from "./TiledMap";

type TilemapObjectLoader = (object: TiledObject) => void;

export class TilemapLayer{
   width: number;
   height: number;
   tiles: (Sprite|undefined)[];

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
   setTile(x: number, y: number, sprite: Sprite){
      this.tiles[x + y * this.width] = sprite;
   }
   setTileFromIndex(index: number, sprite: Sprite){
      this.tiles[index] = sprite;
   }
   
   draw(graphics: Graphics, tileWidth: number, tileHeight: number){
      for(let x = 0; x < this.width; x++){
         for(let y = 0; y < this.height; y++){
            let tile = this.getTile(x, y);
            if(tile === undefined) continue;

            graphics.drawSpriteSimple(tile, x * tileWidth, y * tileHeight);
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

   public static fromTiledMap(map: TiledMap, loader: TilemapObjectLoader){
      let tilemap = new TileMap(map.width, map.height, map.tilewidth, map.tileheight);

      tilemap.backgroundColor = map.backgroundcolor;
      
      // TILESETS
      let tilesets: {set: TiledTileset, sheet: SpriteSheet}[] = [];
      let tiles: { [key: number]: Sprite } = {};
      
      map.tilesets.forEach(set => {
         tilesets.push({
            set: set,
            sheet: SpriteSheet.fromHTML(set.name)
         });
      });

      console.dir(tilesets);

      // TILE LAYERS
      map.layers.forEach(layer => {
         if(layer.type === TiledTileLayerType){
            let tileLayer = layer as TiledTileLayer;

            let tilemapLayer = new TilemapLayer(tileLayer.width, tileLayer.height);

            for(let i = 0; i < tileLayer.data.length; i++){
               let tileIndex = tileLayer.data[i];

               let tile = tiles[tileIndex];
               
               // Find tile
               if(tile === undefined && tileIndex !== 0){
                  for(let j = 0; j < tilesets.length; j++){
                     let tileset = tilesets[j];

                     if(tileIndex >= tileset.set.firstgid && tileIndex < tileset.set.firstgid + tileset.set.tilecount){
                        let ii = tileIndex - tileset.set.firstgid;
                        let x = ii % tileset.set.columns;
                        let y = Math.floor(ii / tileset.set.columns);

                        tile = tileset.sheet.getSprite(
                           x * tileset.set.tilewidth, 
                           y * tileset.set.tileheight, 
                           tileset.set.tilewidth, 
                           tileset.set.tileheight);
                     }
                  }
                  tiles[tileIndex] = tile;
               }

               tilemapLayer.setTileFromIndex(i, tile);
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
}