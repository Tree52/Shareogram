<script lang="ts">
  import { tiles, isGame, tilesHistory, tilesHistoryIndexer, editorWidth, editorHeight, tilesSolution } from "$lib/refs.svelte";
  import { compare2DArrays } from "$lib/utils";
  import { initializeTiles } from "$lib/main";

  const sanitizeNumberInput = (n: number): number => Math.max(0, Math.min(Number(String(n).replace(/[^0-9]/g, "")), 50));

  const win: boolean = $derived(compare2DArrays(tilesSolution.colorIndices, tiles.colorIndices));

  function newEditor(): void {
    if (editorWidth.v < 1 || editorHeight.v < 1) return;
    tiles.v = initializeTiles();
    tilesHistory.reset();
    tilesHistory.v[0] = $state.snapshot(tiles.v);
    tilesHistoryIndexer.reset();
  }
</script>

<footer>
  {#if !isGame.v}
    <!-- prettier-ignore -->
    <input
      type="text"  
      bind:value={editorWidth.v}
      oninput={(): void => { editorWidth.v = sanitizeNumberInput(editorWidth.v); newEditor(); }}
      />
    <!-- prettier-ignore -->
    <input
      type="text"  
      bind:value={editorHeight.v}
      oninput={(): void => { editorHeight.v = sanitizeNumberInput(editorHeight.v); newEditor(); }}
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
  footer {
    display: flex;
    justify-content: center;
    align-items: center;

    button,
    input[type="text"] {
      height: 2rem;
    }
  }

  span {
    margin-right: 0.5rem;
    font-size: 1.25rem;
  }

  input[type="text"] {
    padding: 0;
    text-align: center;
    width: 2rem;

    &:focus {
      outline: none;
    }
  }
</style>
