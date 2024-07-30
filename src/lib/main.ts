import { type Tile, tiles, colors, type Hint } from "$lib/refs.svelte";
import { decToLetter, splitString, letterToDec } from "$lib/utils";

export const isActive = (tile: Tile): boolean => tile.colorIndex !== 0;

export const isMulticolor = (): boolean => colors.v.length > 2;

export function initializeTiles(width: number, height: number): Tile[][] {
  const tiles: Tile[][] = [[]];

  if (width <= 50 && width > 0 && height <= 50 && height > 0) {
    for (let i: number = 0; i < height; i++) {
      tiles[i] = [];
      for (let j: number = 0; j < width; j++) tiles[i][j] = { colorIndex: 0, Xed: false };
    }
  }

  return tiles;
}

export function checkTileColors() {
  for (let i: number = 0; i < tiles.numRows; i++) {
    for (let j: number = 0; j < tiles.numColumns; j++) {
      if (tiles.v[i][j].colorIndex > colors.v.length - 1) tiles.v[i][j].colorIndex = 0;
    }
  }
}

export function calculateRowHints(tiles: Tile[][]): Hint[][] {
  const rowHints: Hint[][] = [[]];
  const numRows: number = tiles.length;
  const numColumns: number = tiles[0].length;

  for (let row: number = 0; row < numRows; row++) {
    rowHints[row] = [{ count: 0, color: "" }];
    for (let column: number = 0; column < numColumns; column++) {
      if (isActive(tiles[row][column])) {
        const previousColorIndex: number | null = column === 0 ? null : tiles[row][column - 1].colorIndex;
        const currentColorIndex: number = tiles[row][column].colorIndex;
        if (previousColorIndex !== currentColorIndex) rowHints[row].push({ count: 1, color: decToLetter(currentColorIndex) });
        else rowHints[row][rowHints[row].length - 1].count++;
      }
    }
    if (rowHints[row].length > 1 && rowHints[row][0].count === 0) rowHints[row].shift();
  }

  return rowHints;
}

export function calculateColumnHints(tiles: Tile[][]): Hint[][] {
  const columnHints: Hint[][] = [[]];
  const numRows: number = tiles.length;
  const numColumns: number = tiles[0].length;

  for (let column: number = 0; column < numColumns; column++) {
    columnHints[column] = [{ count: 0, color: "" }];
    for (let row: number = 0; row < numRows; row++) {
      if (isActive(tiles[row][column])) {
        const previousColorIndex: number | null = row === 0 ? null : tiles[row - 1][column].colorIndex;
        const currentColorIndex: number = tiles[row][column].colorIndex;
        if (previousColorIndex !== currentColorIndex) columnHints[column].push({ count: 1, color: decToLetter(currentColorIndex) });
        else columnHints[column][columnHints[column].length - 1].count++;
      }
    }
    if (columnHints[column].length > 1 && columnHints[column][0].count === 0) columnHints[column].shift();
  }

  return columnHints;
}

export function encodeTiles(tiles: Tile[][]): string {
  let encoded: string = "";
  const numRows: number = tiles.length;
  const numColumns: number = tiles[0].length;
  let count: number = 1;

  for (let i: number = 0; i < numRows; i++) {
    for (let j: number = 0; j < numColumns; j++) {
      if (i === 0 && j === 0) continue;
      else {
        const prevTile: Tile = j === 0 ? tiles[i - 1][numRows - 1] : tiles[i][j - 1];
        if (prevTile.colorIndex === tiles[i][j].colorIndex && prevTile.Xed === tiles[i][j].Xed) count++;
        else {
          encoded += count + (prevTile.Xed ? "x" : decToLetter(prevTile.colorIndex));
          count = 1;
        }
      }
    }
  }

  const lastTile: Tile = tiles[numRows - 1][numColumns - 1];
  encoded += count + (lastTile.Xed ? "x" : decToLetter(lastTile.colorIndex));
  return encoded;
}

export function decodeTiles(width: number, height: number, encodedTiles: string): Tile[][] {
  const split: { numbers: number[]; letters: string[] } = splitString(encodedTiles);
  const tiles: Tile[][] = [];
  let row: number = 0;
  let column: number = 0;

  for (let i: number = 0; i < width; i++) tiles[i] = [];

  for (let i: number = 0; i < split.numbers.length; i++) {
    for (let j: number = 0; j < split.numbers[i]; j++) {
      if (split.letters[i] === "x") tiles[row][column++] = { colorIndex: 0, Xed: true };
      else tiles[row][column++] = { colorIndex: letterToDec(split.letters[i]), Xed: false };

      if (column > width - 1) {
        row++;
        column = 0;
      }
    }
  }

  return tiles;
}
