import { tilesHistoryIndexer, editorHeight, tilesHistory, editorWidth, isXSelected, type Tile, colors, tiles } from "$lib/refs.svelte";

export const isActive = (tile: Tile) => tile.colorIndex !== 0;

export const initializeTiles = () => {
  const tiles: Tile[][] = [[]];

  for (let i = 0; i < editorHeight.v; i++) {
    tiles[i] = [];
    for (let j = 0; j < editorWidth.v; j++) tiles[i][j] = { colorIndex: 0, Xed: false };
  }

  return tiles;
};

export const checkTileColors = () => {
  for (let i = 0; i < tiles.numRows; i++) {
    for (let j = 0; j < tiles.numColumns; j++) {
      if (tiles.v[i][j].colorIndex > colors.v.length - 1) tiles.v[i][j].colorIndex = 0;
    }
  }
};

export const saveTiles = () => {
  if (tilesHistoryIndexer.v !== tilesHistory.v.length - 1) tilesHistory.v.splice(tilesHistoryIndexer.v + 1);
  tilesHistoryIndexer.v++;
  tilesHistory.v.push($state.snapshot(tiles.v));
};

export const newEditor = () => {
  if (editorWidth.v < 1 || editorHeight.v < 1) return;
  tiles.v = initializeTiles();
  tilesHistory.reset();
  tilesHistory.v[0] = $state.snapshot(tiles.v);
  tilesHistoryIndexer.reset();
  isXSelected.v = false;
};

export const lettersToNum = (letters: string) => {
  let num = 0;
  for (let i = 0; i < letters.length; i++) {
    num *= 26;
    num += letters.charCodeAt(i) - 97 + 1;
  }
  return num - 1;
};

export const hexToRGB = (hex: string): [number, number, number] => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};
