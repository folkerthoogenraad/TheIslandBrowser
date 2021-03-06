import { Game } from "engine/Game";
import { Animation } from "graphics/Animation";
import { Graphics } from "graphics/Graphics";
import { Renderable } from "graphics/Renderable";
import { ResourceManager } from "graphics/ResourceManager";
import { Sprite, SpriteSheet } from "graphics/Sprite";
import { AABB } from "math/AABB";
import { TileCollider } from "math/collision/TileCollider";
import { Scene } from "scene/Scene";
import { Color } from "util/Color";
import { asyncLoadImage } from "util/Temp";
import { getSpriteFromTileset, TiledMap, TiledObject, TiledObjectLayer, TiledObjectLayerType, TiledTileLayer, TiledTileLayerType, TiledColliderLayerName, TiledImageLayer, TiledTileset, TiledImageLayerType } from "./TiledMap";

type TilemapObjectLoader = (object: TiledObject) => void;

export class TilemapLayer implements Renderable{
   tilemap: TileMap;
   depth: number = 0;

   constructor(tilemap: TileMap){
      this.tilemap = tilemap;
   }

   init(game: Game){
      this.tilemap.scene.renderer.add(this);
   }

   destroy(){
      this.tilemap.scene.renderer.remove(this);
   }
   
   update(delta: number, bounds: AABB){

   }
   draw(graphics: Graphics){
   }
}

export class TilemapTileLayer extends TilemapLayer{
   width: number;
   height: number;
   tiles: (Animation|undefined)[];

   constructor(tilemap: TileMap, width: number, height: number){
      super(tilemap);
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

   update(delta: number, bounds: AABB){
      let tileWidth = this.tilemap.tileWidth;
      let tileHeight = this.tilemap.tileHeight;

      let startX = Math.floor(Math.max(0, bounds.left / tileWidth));
      let endX = Math.floor(Math.min(this.width, bounds.right / tileWidth + 1));

      let startY = Math.floor(Math.max(0, bounds.top / tileHeight));
      let endY = Math.floor(Math.min(this.height, bounds.bottom / tileHeight + 1));
      
      for(let x = startX; x < endX; x++){
         for(let y = startY; y < endY; y++){
            let tile = this.getTile(x, y);
            if(tile === undefined) continue;

            tile.update(delta);
         }
      }
   }
   
   draw(graphics: Graphics){
      let bounds = this.tilemap.scene.camera.getBounds();

      let tileWidth = this.tilemap.tileWidth;
      let tileHeight = this.tilemap.tileHeight;

      let startX = Math.floor(Math.max(0, bounds.left / tileWidth));
      let endX = Math.floor(Math.min(this.width, bounds.right / tileWidth + 1));

      let startY = Math.floor(Math.max(0, bounds.top / tileHeight));
      let endY = Math.floor(Math.min(this.height, bounds.bottom / tileHeight + 1));

      for(let x = startX; x < endX; x++){
         for(let y = startY; y < endY; y++){
            let tile = this.getTile(x, y);
            if(tile === undefined) continue;

            graphics.drawSpriteSimple(tile.frame, x * tileWidth, y * tileHeight);
         }
      }
   }
}

export class TilemapImageLayer extends TilemapLayer {
   image: Sprite|undefined;

   parallax: number = 10000000;

   _tempSprite: Sprite;
   _aabb: AABB;

   constructor(tilemap: TileMap, image?: Sprite){
      super(tilemap);
      this.image = image;
      this._tempSprite = new Sprite(undefined);
      this._aabb = new AABB();
   }

   
   draw(graphics: Graphics){
      if(this.image === undefined) return;

      let pos = this.tilemap.scene.camera.center;
      // let bounds = this.tilemap.scene.camera.getBounds(this._aabb);

      let relativeX = pos.x - this.image.width / 2;
      let relativeY = pos.y - this.image.height / 2;

      let offsetX = -relativeX / this.parallax;
      let offsetY = -relativeY / this.parallax;

      while(offsetX < 0) {
         offsetX += this.image.width;
      }
      while(offsetX > this.image.width){
         offsetX -= this.image.width;
      }

      graphics.drawSpriteSimple(this.image, relativeX + offsetX - this.image.width, relativeY + offsetY);
      graphics.drawSpriteSimple(this.image, relativeX + offsetX, relativeY + offsetY);
   }
}

export class TilemapCollisionLayer extends TilemapLayer{
   width: number;
   height: number;
   tiles: boolean[];

   constructor(tilemap: TileMap, width: number, height: number){
      super(tilemap);

      this.width = width;
      this.height = height;

      this.tilemap = tilemap;

      this.tiles = [];

      // length stuff... :')
      for(let i = 0; i < width * height; i++) this.tiles.push(false);
   }

   isPixelSolid(x: number, y: number){
      return this.isTileSolid(
         Math.floor(x / this.tilemap.tileWidth),
         Math.floor(y / this.tilemap.tileHeight)
      );
   }

   isTileSolid(x: number, y: number){
      return this.getTile(x, y);
   }

   getTileCollider(x: number, y: number, tileCollider: TileCollider){
      tileCollider.size.x = this.tilemap.tileWidth;
      tileCollider.size.y = this.tilemap.tileHeight;

      tileCollider.top = !this.isTileSolid(x, y - 1);
      tileCollider.bottom = !this.isTileSolid(x, y + 1);
      tileCollider.left = !this.isTileSolid(x - 1, y);
      tileCollider.right = !this.isTileSolid(x + 1, y);

      return tileCollider;
   }

   getTile(x: number, y: number){
      if(x < 0) return false;
      if(x >= this.width) return false;
      if(y < 0) return false; 
      if(y >= this.height) return false;

      return this.tiles[x + y * this.width];
   }
   setTile(x: number, y: number, solid: boolean){
      this.tiles[x + y * this.width] = solid;
   }
   setTileFromIndex(index: number, solid: boolean){
      this.tiles[index] = solid;
   }

   drawDebug(graphics: Graphics, tileWidth: number, tileHeight: number, bounds: AABB){
      let startX = Math.floor(Math.max(0, bounds.left / tileWidth));
      let endX = Math.floor(Math.min(this.width, bounds.right / tileWidth + 1));

      let startY = Math.floor(Math.max(0, bounds.top / tileHeight));
      let endY = Math.floor(Math.min(this.height, bounds.bottom / tileHeight + 1));

      graphics.setColor(255, 90, 20, 0.8);

      let collider = new TileCollider();
      const thickness = 2;

      for(let x = startX; x < endX; x++){
         for(let y = startY; y < endY; y++){
            if(!this.isTileSolid(x, y)) continue;

            collider = this.getTileCollider(x, y, collider);

            if(collider.top){
               graphics.drawRectangle(x * tileWidth, y * tileHeight, tileWidth, thickness, true);
            }
            if(collider.bottom){
               graphics.drawRectangle(x * tileWidth, y * tileHeight + tileHeight - thickness, tileWidth, thickness, true);
            }
            if(collider.left){
               graphics.drawRectangle(x * tileWidth, y * tileHeight, thickness, tileHeight, true);
            }
            if(collider.right){
               graphics.drawRectangle(x * tileWidth + tileWidth - thickness, y * tileHeight, thickness, tileHeight, true);
            }
         }
      }
   }
}

export class TileMap {
   width: number;
   height: number;
   tileWidth: number;
   tileHeight: number;
   scene!: Scene;
   initalized: boolean;

   backgroundColor: Color = new Color(1, 1, 1, 1);

   layers: TilemapLayer[];
   colliders: TilemapCollisionLayer[];

   depth: number = -10000;

   constructor(width: number, height: number, tileWidth: number, tileHeight: number){
      this.width = width;
      this.height = height;
      this.tileWidth = tileWidth;
      this.tileHeight = tileHeight;
      this.layers = [];
      this.colliders = [];
      this.initalized = false;
   }

   init(game: Game){
      if(this.initalized) return;

      this.layers.forEach(layer => layer.init(game));
      this.scene.renderer.add(this);
   }

   destroy(){
      if(!this.initalized) return;
      
      this.layers.forEach(layer => layer.destroy());
      this.scene.renderer.remove(this);
   }

   draw(graphics: Graphics){
      graphics.setColor(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b, this.backgroundColor.a);
      graphics.drawRectangle(0, 0, this.width * this.tileWidth, this.height * this.tileHeight, true);

      graphics.setColor(1, 1, 1, 1);
   }

   // TODO maybe more like batch update every x frames or devide up the work somehow over muptiple frames
   update(delta: number){
      let bounds = this.scene.camera.getBounds();

      this.layers.forEach(layer => layer.update(delta, bounds));
   }

   public static fromTiledMap(map: TiledMap, resourceManager: ResourceManager, loader: TilemapObjectLoader){
      const RootFolder = "assets/levels/";
      let tilemap = new TileMap(map.width, map.height, map.tilewidth, map.tileheight);

      tilemap.backgroundColor = Color.fromHex(map.backgroundcolor)!;
      
      // TILESETS
      let tilesets: {set: TiledTileset, sheet: SpriteSheet}[] = [];
      let tiles: { [key: number]: Animation } = {};
      
      map.tilesets.forEach(set => {
         let sheet = resourceManager.loadSpriteSheet(RootFolder + set.image);
         
         tilesets.push({
            set,
            sheet
         });

         // Load all default animations
         set.tiles?.forEach(tile => {
            let index = tile.id + set.firstgid;

            let animation =  new Animation();

            if(tile.animation === undefined) return;

            tile.animation.forEach(frame => {
               animation.addFrame(getSpriteFromTileset(set, frame.tileid, sheet));
            });

            animation.frameRate = 4;

            tiles[index] = animation;
         });
      });

      map.layers.forEach(layer => {
         // TILE LAYERS
         if(layer.type === TiledTileLayerType && layer.name !== TiledColliderLayerName){
            let tileLayer = layer as TiledTileLayer;

            if(!layer.visible){
               return;
            }

            let tilemapLayer = new TilemapTileLayer(tilemap, tileLayer.width, tileLayer.height);

            // Load properties
            if(layer.properties !== undefined){
               layer.properties.forEach(prop => {
                  if(prop.name === "depth") tilemapLayer.depth = prop.value as number;
               });
            }

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
         
         // Collision Layers
         else if(layer.type === TiledTileLayerType && layer.name === TiledColliderLayerName){
            let tileLayer = layer as TiledTileLayer;
            
            let colliderLayer = new TilemapCollisionLayer(tilemap, tileLayer.width, tileLayer.height);

            for(let i = 0; i < tileLayer.data.length; i++){
               let tileIndex = tileLayer.data[i];
               colliderLayer.setTileFromIndex(i, tileIndex !== 0);
            }

            tilemap.colliders.push(colliderLayer);
         }

         else if(layer.type === TiledImageLayerType){
            let tileLayer = layer as TiledImageLayer;

            let imageLayer = new TilemapImageLayer(tilemap);
            
            // Load properties
            if(layer.properties !== undefined){
               layer.properties.forEach(prop => {
                  if(prop.name === "parallax") imageLayer.parallax = prop.value as number;
                  if(prop.name === "depth") imageLayer.depth = prop.value as number;
               });
            }
            
            imageLayer.image = resourceManager.loadSpriteSheet(RootFolder + tileLayer.image).getSprite(0, 0, 640, 360);
            
            tilemap.layers.push(imageLayer);
         }
         
         // Object layers
         else if(layer.type === TiledObjectLayerType){
            let objLayer = layer as TiledObjectLayer;
            objLayer.objects.forEach(loader);
         }

         // Uh oh
         else{
            console.error("Unknown layer type " + layer.type);
         }
      });


      return tilemap;
   }

   public static async fromTiledMapDownload(file: string, resourceManager: ResourceManager, loader: TilemapObjectLoader){
      let result = await fetch(file);
      let d = await result.json();

      return this.fromTiledMap(d as TiledMap, resourceManager, loader);
   }

   get pixelWidth(){
      return this.width * this.tileWidth;
   }
   get pixelHeight(){
      return this.height * this.tileHeight;
   }
}