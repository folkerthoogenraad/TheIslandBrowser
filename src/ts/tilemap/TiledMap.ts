import { SpriteSheet } from "graphics/Sprite";

export const TiledObjectLayerType = "objectgroup";
export const TiledImageLayerType = "imagelayer";
export const TiledTileLayerType = "tilelayer";

export const TiledColliderLayerName = "Colliders";

export interface TiledMap {
   width: number;
   height: number;

   tilewidth: number;
   tileheight: number;

   backgroundcolor: string;

   layers: TiledLayer[];
   tilesets: TiledTileset[];
}

export interface TiledLayer {
   id: number;
   
   x: number;
   y: number;

   name: string;
   type: string;

   visible: boolean;
}
export interface TiledTileLayer extends TiledLayer {
   width: number;
   height: number;
   data: number[];
}
export interface TiledObjectLayer extends TiledLayer{
   objects: TiledObject[];
}
export interface TiledImageLayer extends TiledLayer{
   image: string;
}
export interface TiledObject {
   x: number;
   y: number;
   width: number;
   height: number;

   name: string;
   type: string;

   properties: TiledObjectProperties[];

   visible: boolean;
}

export interface TiledObjectProperties{
   name: string;
   type: string;
   value: string|boolean|number;
}

export interface TiledAnimatedTiles{
   id: number;
   animation: TiledAnimatedTileFrame[];
}
export interface TiledAnimatedTileFrame{
   duration: number,
   tileid: number;
}

export interface TiledTileset {
   name: string;

   firstgid: number;
   image: string;
   
   columns: number;
   tilecount: number;

   tilewidth: number;
   tileheight: number;

   tiles: TiledAnimatedTiles[]|undefined;
}

export function getSpriteFromTileset(tileset: TiledTileset, index: number, sheet: SpriteSheet){
   let x = index % tileset.columns;
   let y = Math.floor(index / tileset.columns);

   return sheet.getSprite(
      x * tileset.tilewidth, 
      y * tileset.tileheight, 
      tileset.tilewidth, 
      tileset.tileheight);
}