import { type Tile, tiles, colors } from "$lib/refs.svelte";
import { hexToDecimal, getRandomHexColor } from "$lib/utils";

export const isActive = (row: number, column: number): boolean =>
	tiles.value[row][column].colorIndex !== 0;

export const isMulticolor = (): boolean => colors.value.length > 2;

export function initializeTiles(width: number, height: number, importString?: string): Tile[][] {
	const tiles: Tile[][] = [[]];
	let indexer: number = 0;

	if (width <= 50 && width > 0 && height <= 50 && height > 0) {
		for (let i: number = 0; i < height; i++) {
			tiles[i] = [];
			for (let j: number = 0; j < width; j++) {
				if (importString) {
					const decimal: number = hexToDecimal(importString[indexer]);
					if (colors.value.length - 1 < decimal) {
						for (let i: number = colors.value.length - 1; i < decimal; i++)
							colors.value.push(getRandomHexColor());
					}

					tiles[i][j] = {
						colorIndex: importString[indexer] !== undefined ? decimal : 0,
						Xed: false
					};

					indexer++;
				} else {
					tiles[i][j] = { colorIndex: 0, Xed: false };
				}
			}
		}
	}

	return tiles;
}

export function checkTileColors() {
	for (let i: number = 0; i < tiles.numRows; i++) {
		for (let j: number = 0; j < tiles.numRows; j++) {
			if (tiles.value[i][j].colorIndex > colors.value.length - 1) tiles.value[i][j].colorIndex = 0;
		}
	}
}
