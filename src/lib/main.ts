import { type Tile, tiles, colors, type Hint } from "$lib/refs.svelte";
import { getRandomHexColor, hexToDec, decToLetter } from "$lib/utils";

export const isActive = (row: number, column: number): boolean =>
	tiles.v[row][column].colorIndex !== 0;

export const isMulticolor = (): boolean => colors.v.length > 2;

export function initializeTiles(width: number, height: number, importString?: string): Tile[][] {
	const tiles: Tile[][] = [[]];
	let indexer: number = 0;

	if (width <= 50 && width > 0 && height <= 50 && height > 0) {
		for (let i: number = 0; i < height; i++) {
			tiles[i] = [];
			for (let j: number = 0; j < width; j++) {
				if (importString) {
					const decimal: number = hexToDec(importString[indexer]);
					if (colors.v.length - 1 < decimal) {
						for (let i: number = colors.v.length - 1; i < decimal; i++)
							colors.v.push(getRandomHexColor());
					}

					tiles[i][j] = {
						colorIndex: importString[indexer] !== undefined ? decimal : 0,
						Xed: false
					};

					indexer++;
				} else tiles[i][j] = { colorIndex: 0, Xed: false };
			}
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

export function calculateRowHints(value: Tile[][]): Hint[][] {
	const rowHints: Hint[][] = [[]];
	for (let row: number = 0; row < tiles.numRows; row++) {
		rowHints[row] = [{ count: 0, color: "" }];
		for (let column: number = 0; column < tiles.numColumns; column++) {
			if (isActive(row, column)) {
				const previousColorIndex: number | null =
					column === 0 ? null : value[row][column - 1].colorIndex;
				const currentColorIndex: number = value[row][column].colorIndex;
				if (previousColorIndex !== currentColorIndex)
					rowHints[row].push({ count: 1, color: decToLetter(currentColorIndex) });
				else rowHints[row][rowHints[row].length - 1].count++;
			}
		}
		if (rowHints[row].length > 1 && rowHints[row][0].count === 0) rowHints[row].shift();
	}
	return rowHints;
}

export function calculateColumnHints(value: Tile[][]): Hint[][] {
	const columnHints: Hint[][] = [[]];
	for (let column: number = 0; column < tiles.numColumns; column++) {
		columnHints[column] = [{ count: 0, color: "" }];
		for (let row: number = 0; row < tiles.numRows; row++) {
			if (isActive(row, column)) {
				const previousColorIndex: number | null =
					row === 0 ? null : value[row - 1][column].colorIndex;
				const currentColorIndex: number = value[row][column].colorIndex;
				if (previousColorIndex !== currentColorIndex)
					columnHints[column].push({ count: 1, color: decToLetter(currentColorIndex) });
				else columnHints[column][columnHints[column].length - 1].count++;
			}
		}
		if (columnHints[column].length > 1 && columnHints[column][0].count === 0)
			columnHints[column].shift();
	}
	return columnHints;
}
