<script lang="ts">
  import { tiles, isGame, tilesHistory, tilesHistoryIndexer, editorWidth, editorHeight, tilesSolution } from "$lib/refs.svelte";
  import { compare2DArrays } from "$lib/utils";
  import { initializeTiles } from "$lib/main";

  const sanitizeNumberInput = (n: number): number => Number(String(n).replace(/[^0-9]/g, ""));

  const win: boolean = $derived(compare2DArrays(tilesSolution.colorIndices, tiles.colorIndices));

  function newEditor(width: number, height: number): void {
    tiles.v = initializeTiles(width, height);
    tilesHistory.reset();
    tilesHistory.v[0] = $state.snapshot(tiles.v);
    tilesHistoryIndexer.reset();
  }
</script>

<footer>
  {#if !isGame.v}
    <!-- prettier-ignore -->
    <input
			bind:value={editorWidth.v}
			oninput={(): void => { editorWidth.v = sanitizeNumberInput(editorWidth.v); newEditor(editorWidth.v, editorHeight.v); }}
			autocomplete="off"
		/>
    <!-- prettier-ignore -->
    <input
			bind:value={editorHeight.v}
			oninput={(): void => { editorHeight.v = sanitizeNumberInput(editorHeight.v); newEditor(editorWidth.v, editorHeight.v); }}
			autocomplete="off"
		/>
    <!-- prettier-ignore -->
    <button onclick={(): void => { isGame.v = true; tilesSolution.v = tiles.v; newEditor(editorWidth.v, editorHeight.v); }}>Start Game</button>
  {:else}
    <span>{win ? "You win" : "Keep trying"}</span>
    <!-- prettier-ignore -->
    <button onclick={(): void => { isGame.reset(); newEditor(editorWidth.v, editorHeight.v); }}>New Editor</button>
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
