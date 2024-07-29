<script lang="ts">
	import { extractPropertyFrom2DArray, compare2DArrays } from "$lib/utils";
	import { initializeTiles } from "$lib/main";
	import { tiles, isGame, tilesHistory, tilesHistoryIndexer, editorWidth, editorHeight, solution } from "$lib/refs.svelte";

	const sanitizeNumberInput = (n: number): number => Number(String(n).replace(/[^0-9]/g, ""));

	const tileColorIndices: number[][] = $derived(extractPropertyFrom2DArray(tiles.v, "colorIndex"));
	const win: boolean = $derived(compare2DArrays(solution.v, tileColorIndices));

	function newEditor(width: number, height: number): void {
		tiles.v = initializeTiles(width, height);
		tilesHistory.reset();
		tilesHistory.v[0] = $state.snapshot(tiles.v);
		tilesHistoryIndexer.reset();
	}
</script>

<footer>
	{#if !isGame.v}
		<input
			bind:value={editorWidth.v}
			oninput={() => {
				editorWidth.v = sanitizeNumberInput(editorWidth.v);
				newEditor(editorWidth.v, editorHeight.v);
			}}
			autocomplete="off"
		/>
		<input
			bind:value={editorHeight.v}
			oninput={() => {
				editorHeight.v = sanitizeNumberInput(editorHeight.v);
				newEditor(editorWidth.v, editorHeight.v);
			}}
			autocomplete="off"
		/>
		<button
			onclick={(): void => {
				isGame.v = true;
				solution.v = tileColorIndices;
				newEditor(editorWidth.v, editorHeight.v);
			}}>Start Game</button
		>
	{:else}
		<span>{win ? "You win" : "Keep trying"}</span>
		<button
			onclick={(): void => {
				isGame.reset();
				newEditor(editorWidth.v, editorHeight.v);
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
