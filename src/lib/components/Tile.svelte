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
		isColorblindMode
	} from "$lib/refs.svelte";
	import { getAdjacentDirection, numberToLetter } from "$lib/utils";
	import { isActive } from "$lib/main";

	const { i, j }: { i: number; j: number } = $props();

	const isXed = (row: number, column: number): boolean => tiles.value[row][column].Xed;
	const isSelectedColor = (row: number, column: number): boolean =>
		tiles.value[row][column].colorIndex === colorsIndexer.value;
	function changeColor(row: number, column: number, colorIndex: number): void {
		tiles.value[row][column].colorIndex = colorIndex;
	}
	function deactivate(row: number, column: number): void {
		tiles.value[row][column].colorIndex = 0;
	}
	function negateXed(row: number, column: number): void {
		tiles.value[row][column].Xed = !tiles.value[row][column].Xed;
	}

	function handleMouseDown(e: MouseEvent): void {
		if (isGame.value) {
			if (e.button === 0 && !isXed(i, j)) {
				if (isSelectedColor(i, j)) changeColor(i, j, 0);
				else changeColor(i, j, colorsIndexer.value);
			} else if (e.button === 2 && !isActive(i, j)) negateXed(i, j);
		} else {
			if (e.button === 0 && !isSelectedColor(i, j)) changeColor(i, j, colorsIndexer.value);
			else deactivate(i, j);
		}

		clickedTile.value = { row: i, column: j };
		numTilesEntered.reset();
	}

	function handleMouseEnter(): void {
		if (
			(!isLeftHeld.value && !isRightHeld.value) ||
			(isLeftHeld.value && isRightHeld.value) ||
			clickedTile.value.row === -1
		)
			return;

		numTilesEntered.value++;

		if (numTilesEntered.value === 1)
			direction.value = getAdjacentDirection(clickedTile.value.row, clickedTile.value.column, i, j);

		if (isGame.value) {
			if (direction.value === "above" || direction.value === "below") {
				const startIndex: number = Math.min(clickedTile.value.row, i);
				const endIndex: number = Math.max(clickedTile.value.row, i);
				for (let l: number = startIndex; l < endIndex + 1; l++) {
					if (isLeftHeld.value && !isXed(l, clickedTile.value.column)) {
						changeColor(
							l,
							clickedTile.value.column,
							tiles.value[clickedTile.value.row][clickedTile.value.column].colorIndex
						);
					} else if (isRightHeld.value && !isActive(l, clickedTile.value.column)) {
						tiles.value[l][clickedTile.value.column].Xed =
							tiles.value[clickedTile.value.row][clickedTile.value.column].Xed;
					}
				}
			} else {
				const startIndex: number = Math.min(clickedTile.value.column, j);
				const endIndex: number = Math.max(clickedTile.value.column, j);
				for (let m: number = startIndex; m < endIndex + 1; m++) {
					if (isLeftHeld.value && !isXed(clickedTile.value.row, m)) {
						changeColor(
							clickedTile.value.row,
							m,
							tiles.value[clickedTile.value.row][clickedTile.value.column].colorIndex
						);
					} else if (isRightHeld.value && !isActive(clickedTile.value.row, m)) {
						tiles.value[clickedTile.value.row][m].Xed =
							tiles.value[clickedTile.value.row][clickedTile.value.column].Xed;
					}
				}
			}
		} else {
			if (isActive(clickedTile.value.row, clickedTile.value.column))
				changeColor(i, j, colorsIndexer.value);
			else deactivate(i, j);
		}
	}
</script>

<button
	onmousedown={handleMouseDown}
	onmouseenter={handleMouseEnter}
	style:background-color={colors.value[tiles.value[i][j].colorIndex]}
	style:color={isActive(i, j) ? colors.value[0] : colors.value[1]}
>
	{isXed(i, j) ? "X" : isColorblindMode.value ? numberToLetter(tiles.value[i][j].colorIndex) : ""}
</button>

<style lang="scss">
	button {
		border: 0;
		font-size: var(--tile-font-size);
		height: var(--tile-width);
		width: var(--tile-width);
	}
</style>
