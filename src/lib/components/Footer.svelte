<script lang="ts">
  import { tiles, isGame, tilesHistory, tilesHistoryIndexer, editorWidth, editorHeight, tilesSolution } from "$lib/refs.svelte";
  import { compare2DArrays } from "$lib/utils";
  import { initializeTiles } from "$lib/main";

  const win: boolean = $derived(compare2DArrays(tilesSolution.colorIndices, tiles.colorIndices));

  function newEditor(width: number, height: number): void {
    tiles.v = initializeTiles(width, height);
    tilesHistory.reset();
    tilesHistory.v[0] = $state.snapshot(tiles.v);
    tilesHistoryIndexer.reset();
  }

  // prettier-ignore
  function handleKeydown(e: KeyboardEvent): void { e.preventDefault() }
</script>

<footer>
  {#if !isGame.v}
    <!-- prettier-ignore -->
    <input
      type="number"
      min="1"
      max="50"
			bind:value={editorWidth.v}
			oninput={(): void => { newEditor(editorWidth.v, editorHeight.v); }}
      onkeydown={handleKeydown}
      />
    <!-- prettier-ignore -->
    <input
      type="number"
      min="1"
      max="50"
			bind:value={editorHeight.v}
			oninput={(): void => { newEditor(editorWidth.v, editorHeight.v); }}
      onkeydown={handleKeydown}
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
    width: 3rem;
  }

  span {
    margin-right: 0.5rem;
  }
</style>
