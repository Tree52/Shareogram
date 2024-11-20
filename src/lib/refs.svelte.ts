import { initializeTiles, isActive } from "$lib/shared.svelte";

export type Tile = {
  colorIndex: number;
  Xed: boolean;
};

export type TilePosition = {
  column: number;
  row: number;
};

type ClickedTile = TilePosition & Tile;

type Ref<T> = {
  reset: () => void;
  v: T;
};

type RefTiles = {
  colorIndices: number[][];
  columnHints: Hint[][];
  numColumns: number;
  rowHints: Hint[][];
  encoded: string;
  numRows: number;
} & Ref<Tile[][]>;

type Hint = {
  color: string;
  count: number;
};

const numToLetters = (num: number): string => {
  let letters = "";
  while (num >= 0) {
    letters = String.fromCharCode((num % 26) + 97) + letters;
    num = Math.floor(num / 26) - 1;
  }
  return letters;
};

const ref = <T>(initial: T): Ref<T> => {
  let v: T = $state(initial);
  const reset = (): T => (v = initial);

  return {
    set v(value: T) { v = value; },
    get v(): T { return v; },
    reset,
  };
};

const refTiles = (): RefTiles => {
  const baseRef: Ref<Tile[][]> = ref<Tile[][]>(initialTiles);
  const numRows: number = $derived(baseRef.v.length);
  const numColumns: number = $derived(baseRef.v[0].length);
  const colorIndices: number[][] = $derived.by((): number[][] => baseRef.v.map(innerArray => innerArray.map(item => item["colorIndex"])));

  const rowHints: Hint[][] = $derived.by(() => {
    const rowHints: Hint[][] = [[]];
    const numRows: number = baseRef.v.length;
    const numColumns: number = baseRef.v[0].length;

    for (let row: number = 0; row < numRows; row++) {
      rowHints[row] = [{ color: "", count: 0 }];
      for (let column: number = 0; column < numColumns; column++) {
        if (isActive(baseRef.v[row][column])) {
          const previousColorIndex: number | null = column === 0 ? null : baseRef.v[row][column - 1].colorIndex;
          const currentColorIndex: number = baseRef.v[row][column].colorIndex;
          if (previousColorIndex !== currentColorIndex) rowHints[row].push({ color: numToLetters(currentColorIndex), count: 1 });
          else rowHints[row][rowHints[row].length - 1].count++;
        }
      }
      if (rowHints[row].length > 1 && rowHints[row][0].count === 0) rowHints[row].shift();
    }

    return rowHints;
  });

  const columnHints: Hint[][] = $derived.by(() => {
    const columnHints: Hint[][] = [[]];

    for (let column: number = 0; column < numColumns; column++) {
      columnHints[column] = [{ color: "", count: 0 }];
      for (let row: number = 0; row < numRows; row++) {
        if (isActive(baseRef.v[row][column])) {
          const previousColorIndex: number | null = row === 0 ? null : baseRef.v[row - 1][column].colorIndex;
          const currentColorIndex: number = baseRef.v[row][column].colorIndex;
          if (previousColorIndex !== currentColorIndex) columnHints[column].push({ color: numToLetters(currentColorIndex), count: 1 });
          else columnHints[column][columnHints[column].length - 1].count++;
        }
      }
      if (columnHints[column].length > 1 && columnHints[column][0].count === 0) columnHints[column].shift();
    }

    return columnHints;
  });

  const encoded: string = $derived.by((): string => {
    let encoded: string = "";
    let count: number = 1;

    for (let i: number = 0; i < numRows; i++) {
      for (let j: number = 0; j < numColumns; j++) {
        if (i === 0 && j === 0) continue;
        else {
          const prevTile: Tile = j === 0 ? baseRef.v[i - 1][numColumns - 1] : baseRef.v[i][j - 1];
          if (prevTile.colorIndex === baseRef.v[i][j].colorIndex && prevTile.Xed === baseRef.v[i][j].Xed) count++;
          else {
            encoded += count + (prevTile.Xed ? "X" : numToLetters(prevTile.colorIndex));
            count = 1;
          }
        }
      }
    }

    const lastTile: Tile = baseRef.v[numRows - 1][numColumns - 1];
    encoded += count + (lastTile.Xed ? "X" : numToLetters(lastTile.colorIndex));
    return encoded;
  });

  return {
    get colorIndices(): number[][] { return colorIndices; },
    get columnHints(): Hint[][] { return columnHints; },
    get numColumns(): number { return numColumns; },
    get rowHints(): Hint[][] { return rowHints; },
    set v(value: Tile[][]) { baseRef.v = value; },
    get encoded(): string { return encoded; },
    get numRows(): number { return numRows; },
    get v(): Tile[][] { return baseRef.v; },
    reset: baseRef.reset,
  };
};

export const bgColor: Ref<string> = ref<string>("#476fb8");
export const colors: Ref<string[]> = ref<string[]>(["#f8fafc", "#020617"]);
export const colorsIndexer: Ref<number> = ref<number>(1);

export const editorWidth: Ref<number> = ref<number>(5);
export const editorHeight: Ref<number> = ref<number>(5);
const initialTiles: Tile[][] = initializeTiles();
export const tiles: RefTiles = refTiles();
export const tilesSolution: RefTiles = refTiles();
export const tilesHistory: Ref<Tile[][][]> = ref<Tile[][][]>([initialTiles]);
export const tilesHistoryIndexer: Ref<number> = ref<number>(0);

export const isGame: Ref<boolean> = ref<boolean>(false);
export const clickedTile: Ref<ClickedTile> = ref<ClickedTile>({ colorIndex: -1, column: -1, Xed: false, row: -1 });
export const borderOn: Ref<number> = ref<number>(1);
export const isChangeHashAllowed: Ref<boolean> = ref<boolean>(false);
export const tileWidth: Ref<number> = ref<number>(50);
export const win: Ref<boolean> = ref<boolean>(false);
export const sidebarOn: Ref<boolean> = ref<boolean>(false);
export const isXSelected: Ref<boolean> = ref<boolean>(false);
export const roundedCorners: Ref<boolean> = ref<boolean>(true);
export const isMoveSelected: Ref<boolean> = ref<boolean>(false);
export const isRowHintsSticky: Ref<boolean> = ref<boolean>(false);
export const isColumnHintsSticky: Ref<boolean> = ref<boolean>(false);
