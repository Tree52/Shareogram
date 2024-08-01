<script lang="ts">
  import { tiles, isGame, tilesHistory, tilesHistoryIndexer, editorWidth, editorHeight, tilesSolution } from "$lib/refs.svelte";
  import { compare2DArrays } from "$lib/utils";
  import { initializeTiles } from "$lib/main";

  const win: boolean = $derived(compare2DArrays(tilesSolution.colorIndices, tiles.colorIndices));

  function newEditor(): void {
    tiles.v = initializeTiles();
    tilesHistory.reset();
    tilesHistory.v[0] = $state.snapshot(tiles.v);
    tilesHistoryIndexer.reset();
  }

  // prettier-ignore
  function onkeydown(e: KeyboardEvent): void { if (e.key !== "ArrowUp" && e.key !== "ArrowDown" && e.key !== "Tab") e.preventDefault() }
</script>

<footer>
  {#if !isGame.v}
    <!-- prettier-ignore -->
    <input
      type="number"
      min="1"
      max="50"
			bind:value={editorWidth.v}
			oninput={(): void => { newEditor(); }}
      {onkeydown}
      />
    <!-- prettier-ignore -->
    <input
      type="number"
      min="1"
      max="50"
			bind:value={editorHeight.v}
			oninput={(): void => { newEditor(); }}
      {onkeydown}
      />
    <!-- prettier-ignore -->
    <button onclick={(): void => { isGame.v = true; tilesSolution.v = tiles.v; newEditor(); }}>Start Game</button>
  {:else}
    <span>{win ? "You win" : "Keep trying"}</span>
    <!-- prettier-ignore -->
    <button onclick={(): void => { isGame.reset(); newEditor(); }}>New Editor</button>
  {/if}
</footer>

<style lang="scss">
  @import "$lib/../mixins.scss";

  footer {
    @include center-div;

    button,
    input[type="number"] {
      height: 2rem;
    }
  }

  span {
    margin-right: 0.5rem;
  }

  input[type="number"] {
    padding: 0;
    text-align: center;
    width: 3rem;

    &:focus {
      outline: none;
    }
  }
</style>
