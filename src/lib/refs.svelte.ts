import { initializeTiles } from "$lib/shared.svelte";

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
  columnEncodes: Encode[][];
  colorIndices: number[][];
  rowEncodes: Encode[][];
  columnHints: Hint[][];
  numColumns: number;
  rowHints: Hint[][];
  encoded: string;
  numRows: number;
} & Ref<Tile[][]>;

export type Encode = {
  color: string;
  count: number;
};

export type Hint = Encode;

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

  const rowEncodes: Encode[][] = $derived.by(() => {
    const rowEncodes: Encode[][] = [[]];
    const numRows = baseRef.v.length;
    const numColumns = baseRef.v[0].length;

    for (let row = 0; row < numRows; row++) {
      rowEncodes[row] = [];
      const firstTile = baseRef.v[row][0];
      const encode = { color: firstTile.Xed ? "X" : numToLetters(firstTile.colorIndex), count: 1 };
      for (let column = 1; column < numColumns; column++) {
        const previousTile = baseRef.v[row][column - 1];
        const currentTile = baseRef.v[row][column];
        if (previousTile.colorIndex === currentTile.colorIndex && previousTile.Xed === currentTile.Xed) encode.count++;
        else {
          rowEncodes[row].push({ ...encode });
          encode.color = currentTile.Xed ? "X" : numToLetters(currentTile.colorIndex);
          encode.count = 1;
        }
      }

      rowEncodes[row].push({ ...encode });
    }

    return rowEncodes;
  });

  const rowHints: Hint[][] = $derived(rowEncodes.map(subArray => subArray.filter(obj => obj.color !== "a")));

  const columnEncodes: Encode[][] = $derived.by(() => {
    const columnEncodes: Encode[][] = [[]];
    const numRows = baseRef.v.length;
    const numColumns = baseRef.v[0].length;

    for (let column = 0; column < numColumns; column++) {
      columnEncodes[column] = [];
      const firstTile = baseRef.v[0][column];
      const encode = { color: firstTile.Xed ? "X" : numToLetters(firstTile.colorIndex), count: 1 };
      for (let row = 1; row < numRows; row++) {
        const previousTile = baseRef.v[row - 1][column];
        const currentTile = baseRef.v[row][column];
        if (previousTile.colorIndex === currentTile.colorIndex && previousTile.Xed === currentTile.Xed) encode.count++;
        else {
          columnEncodes[column].push({ ...encode });
          encode.color = currentTile.Xed ? "X" : numToLetters(currentTile.colorIndex);
          encode.count = 1;
        }
      }

      columnEncodes[column].push({ ...encode });
    }

    return columnEncodes;
  });

  const columnHints: Hint[][] = $derived(columnEncodes.map(subArray => subArray.filter(obj => obj.color !== "a")));

  const encoded = $derived.by(() => {
    let encoded = "";
    let currentColor = "";
    let totalCount = 0;

    for (let i = 0; i < rowEncodes.length; i++) {
      for (let j = 0; j < rowEncodes[i].length; j++) {
        const currentEncode = rowEncodes[i][j];

        if (currentEncode.color === currentColor) totalCount += currentEncode.count;
        else {
          if (currentColor !== "") encoded += totalCount + currentColor;
          currentColor = currentEncode.color;
          totalCount = currentEncode.count;
        }
      }
    }

    encoded += totalCount + currentColor;
    return encoded;
  });

  return {
    get columnEncodes(): Encode[][] { return columnEncodes; },
    get colorIndices(): number[][] { return colorIndices; },
    get columnHints(): Hint[][] { return columnHints; },
    get rowEncodes(): Encode[][] { return rowEncodes; },
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
