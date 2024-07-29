<script lang="ts">
	import {
		isLeftHeld,
		isRightHeld,
		tiles,
		clickedTile,
		direction,
		numTilesEntered,
		isGame,
		colors,
		colorsIndexer,
		isColorblindMode,
		isChangeHashAllowed
	} from "$lib/refs.svelte";
	import { getAdjacentDirection, decToLetter } from "$lib/utils";
	import { isActive } from "$lib/main";

	const { i, j }: { i: number; j: number } = $props();

	const isXed = (row: number, column: number): boolean => tiles.v[row][column].Xed;
	const isSelectedColor = (row: number, column: number): boolean => tiles.v[row][column].colorIndex === colorsIndexer.v;
	function changeColor(row: number, column: number, colorIndex: number): void {
		tiles.v[row][column].colorIndex = colorIndex;
	}
	function deactivate(row: number, column: number): void {
		tiles.v[row][column].colorIndex = 0;
	}
	function negateXed(row: number, column: number): void {
		tiles.v[row][column].Xed = !tiles.v[row][column].Xed;
	}

	function handleMouseDown(e: MouseEvent): void {
		if (isGame.v) {
			if (e.button === 0 && !isXed(i, j)) {
				if (isSelectedColor(i, j)) changeColor(i, j, 0);
				else changeColor(i, j, colorsIndexer.v);
			} else if (e.button === 2 && !isActive(i, j)) negateXed(i, j);
		} else {
			if (e.button === 0 && !isSelectedColor(i, j)) changeColor(i, j, colorsIndexer.v);
			else deactivate(i, j);
		}

		isChangeHashAllowed.v = false;
		clickedTile.v = { row: i, column: j };
		numTilesEntered.reset();
	}

	function handleMouseEnter(): void {
		if ((!isLeftHeld.v && !isRightHeld.v) || (isLeftHeld.v && isRightHeld.v) || clickedTile.v.row === -1) return;

		numTilesEntered.v++;

		if (numTilesEntered.v === 1) direction.v = getAdjacentDirection(clickedTile.v.row, clickedTile.v.column, i, j);

		if (isGame.v) {
			if (direction.v === "above" || direction.v === "below") {
				const startIndex: number = Math.min(clickedTile.v.row, i);
				const endIndex: number = Math.max(clickedTile.v.row, i);
				for (let l: number = startIndex; l < endIndex + 1; l++) {
					if (isLeftHeld.v && !isXed(l, clickedTile.v.column)) {
						changeColor(l, clickedTile.v.column, tiles.v[clickedTile.v.row][clickedTile.v.column].colorIndex);
					} else if (isRightHeld.v && !isActive(l, clickedTile.v.column)) {
						tiles.v[l][clickedTile.v.column].Xed = tiles.v[clickedTile.v.row][clickedTile.v.column].Xed;
					}
				}
			} else {
				const startIndex: number = Math.min(clickedTile.v.column, j);
				const endIndex: number = Math.max(clickedTile.v.column, j);
				for (let m: number = startIndex; m < endIndex + 1; m++) {
					if (isLeftHeld.v && !isXed(clickedTile.v.row, m)) {
						changeColor(clickedTile.v.row, m, tiles.v[clickedTile.v.row][clickedTile.v.column].colorIndex);
					} else if (isRightHeld.v && !isActive(clickedTile.v.row, m)) {
						tiles.v[clickedTile.v.row][m].Xed = tiles.v[clickedTile.v.row][clickedTile.v.column].Xed;
					}
				}
			}
		} else {
			if (isActive(clickedTile.v.row, clickedTile.v.column)) changeColor(i, j, colorsIndexer.v);
			else deactivate(i, j);
		}
	}
</script>

<button
	onmousedown={handleMouseDown}
	onmouseenter={handleMouseEnter}
	style:background-color={colors.v[tiles.v[i][j].colorIndex]}
	style:color={isActive(i, j) ? colors.v[0] : colors.v[1]}
>
	{isXed(i, j) ? "X" : isColorblindMode.v ? decToLetter(tiles.v[i][j].colorIndex) : ""}
</button>

<style lang="scss">
	button {
		border: 0;
		font-size: var(--tile-font-size);
		height: var(--tile-width);
		width: var(--tile-width);
	}
</style>
