<script lang="ts">
	import { extractPropertyFrom2DArray, compare2DArrays } from "$lib/utils";
	import { initializeTiles } from "$lib/main";
	import {
		tiles,
		isGame,
		tilesHistory,
		tilesHistoryIndexer,
		editorWidth,
		editorHeight,
		solution
	} from "$lib/refs.svelte";

	const sanitizeNumberInput = (n: number): number => Number(String(n).replace(/[^0-9]/g, ""));

	const tileColorIndices: number[][] = $derived(
		extractPropertyFrom2DArray(tiles.value, "colorIndex")
	);
	const win: boolean = $derived(compare2DArrays(solution.value, tileColorIndices));

	function newEditor(width: number, height: number): void {
		tiles.value = initializeTiles(width, height);
		tilesHistory.reset();
		tilesHistory.value[0] = $state.snapshot(tiles.value);
		tilesHistoryIndexer.reset();
	}
</script>

<footer>
	{#if !isGame.value}
		<input
			bind:value={editorWidth.value}
			oninput={() => {
				editorWidth.value = sanitizeNumberInput(editorWidth.value);
				newEditor(editorWidth.value, editorHeight.value);
			}}
			autocomplete="off"
		/>
		<input
			bind:value={editorHeight.value}
			oninput={() => {
				editorHeight.value = sanitizeNumberInput(editorHeight.value);
				newEditor(editorWidth.value, editorHeight.value);
			}}
			autocomplete="off"
		/>
		<button
			onclick={(): void => {
				isGame.value = true;
				solution.value = tileColorIndices;
				newEditor(editorWidth.value, editorHeight.value);
			}}>Start Game</button
		>
	{:else}
		<span>{win ? "You win" : "Keep trying"}</span>
		<button
			onclick={(): void => {
				isGame.reset();
				newEditor(editorWidth.value, editorHeight.value);
			}}>New Editor</button
		>
	{/if}
</footer>

<style lang="scss">
	@import "$lib/../mixins.scss";

	footer {
		@include center-div;
		padding-top: 10px;
	}

	input {
		text-align: center;
		width: 2rem;
	}

	span {
		margin-right: 0.5rem;
	}
</style>
