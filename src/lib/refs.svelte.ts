import { initializeTiles } from "$lib/main";

export type Tile = {
	colorIndex: number;
	Xed: boolean;
};

type TilePosition = {
	row: number;
	column: number;
};

type Ref<T> = {
	value: T;
	reset: () => void;
};

type RefTiles = Ref<Tile[][]> & {
	numRows: number;
	numColumns: number;
};

export type Hint = {
	count: number;
	color: string;
};

const deepCopy = (obj: object): object => JSON.parse(JSON.stringify(obj));

function ref<T>(initial: T): Ref<T> {
	const isObj: boolean = typeof initial === "object" ? true : false;
	let value: T = $state(isObj ? (deepCopy(initial!) as T) : initial);
	const reset = (): T => (value = isObj ? (deepCopy(initial!) as T) : initial);

	// prettier-ignore
	return {
    get value(): T { return value; },
    set value(v: T) { value = v; },
    reset
  };
}

function refTiles(): RefTiles {
	const baseRef: Ref<Tile[][]> = ref<Tile[][]>(initialTiles);
	const numRows: number = $derived(baseRef.value.length);
	const numColumns: number = $derived(baseRef.value[0].length);

	// prettier-ignore
	return {
    get value(): Tile[][] { return baseRef.value; },
    set value(v: Tile[][]) { baseRef.value = v; },
    reset: baseRef.reset,
    get numRows(): number { return numRows; },
    get numColumns(): number { return numColumns; },
  };
}

export const bgColor: Ref<string> = ref<string>("#476fb8");
export const colors: Ref<string[]> = ref<string[]>(["#f8fafc", "#020617"]);
export const colorsIndexer: Ref<number> = ref<number>(1);

export const editorWidth: Ref<number> = ref<number>(5);
export const editorHeight: Ref<number> = ref<number>(5);
const initialTiles: Tile[][] = initializeTiles(editorWidth.value, editorHeight.value);
export const tiles: RefTiles = refTiles();
export const tilesHistory: Ref<Tile[][][]> = ref<Tile[][][]>([initialTiles]);
export const tilesHistoryIndexer: Ref<number> = ref<number>(0);

export const isLeftHeld: Ref<boolean> = ref<boolean>(false);
export const isRightHeld: Ref<boolean> = ref<boolean>(false);
export const isGame: Ref<boolean> = ref<boolean>(false);
export const clickedTile: Ref<TilePosition> = ref<TilePosition>({ row: -1, column: -1 });
export const direction: Ref<string> = ref<string>("");
export const numTilesEntered: Ref<number> = ref<number>(0);
export const footerImport: Ref<string> = ref<string>("");
export const borderOn: Ref<boolean> = ref<boolean>(true);
export const isColorblindMode: Ref<boolean> = ref<boolean>(false);
export const isChangeHashAllowed: Ref<boolean> = ref<boolean>(true);
export const rowHints: Ref<Hint[][]> = ref<Hint[][]>([[]]);
export const columnHints: Ref<Hint[][]> = ref<Hint[][]>([[]]);
