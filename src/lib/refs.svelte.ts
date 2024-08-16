import { calculateColumnHints, calculateRowHints, initializeTiles, encodeTiles } from "$lib/main.svelte";
import { extractPropertyFrom2DArray } from "$lib/utils";

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

export type Hint = {
  color: string;
  count: number;
};

const deepCopy = (obj: object): object => JSON.parse(JSON.stringify(obj));

function ref<T>(initial: T): Ref<T> {
  const isObj: boolean = typeof initial === "object" ? true : false;
  let v: T = $state(isObj ? (deepCopy(initial!) as T) : initial);
  const reset = (): T => (v = isObj ? (deepCopy(initial!) as T) : initial);

  // prettier-ignore
  return {
    set v(value: T) { v = value; },
    get v(): T { return v; },
    reset,
  };
}

function refTiles(): RefTiles {
  const baseRef: Ref<Tile[][]> = ref<Tile[][]>(initialTiles);
  const numRows: number = $derived(baseRef.v.length);
  const numColumns: number = $derived(baseRef.v[0].length);
  const colorIndices: number[][] = $derived(extractPropertyFrom2DArray(baseRef.v, "colorIndex"));
  const encoded: string = $derived(encodeTiles(baseRef.v));
  const rowHints: Hint[][] = $derived(calculateRowHints(baseRef.v));
  const columnHints: Hint[][] = $derived(calculateColumnHints(baseRef.v));

  // prettier-ignore
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
}

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

export const isLeftHeld: Ref<boolean> = ref<boolean>(false);
export const isRightHeld: Ref<boolean> = ref<boolean>(false);
export const isGame: Ref<boolean> = ref<boolean>(false);
export const clickedTile: Ref<ClickedTile> = ref<ClickedTile>({ colorIndex: -1, column: -1, Xed: false, row: -1 });
export const direction: Ref<string> = ref<string>("");
export const numTilesEntered: Ref<number> = ref<number>(0);
export const borderOn: Ref<number> = ref<number>(1);
export const isChangeHashAllowed: Ref<boolean> = ref<boolean>(false);
export const tileWidth: Ref<number> = ref<number>(50);
export const win: Ref<boolean> = ref<boolean>(false);
export const sidebarOn: Ref<boolean> = ref<boolean>(false);
export const isXSelected: Ref<boolean> = ref<boolean>(false);
export const tolerance: Ref<number> = ref<number>(10);
