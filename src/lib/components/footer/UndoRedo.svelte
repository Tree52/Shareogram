<script lang="ts">
  import { tilesHistory, tilesHistoryIndexer, tiles } from "$lib/refs.svelte";
  import { checkTileColors } from "$lib/main";

  function onkeydown(e: KeyboardEvent): void {
    if (e.key === "z") undo();
    else if (e.key === "y") redo();
  }

  function browseHistory(): void {
    tiles.v = $state.snapshot(tilesHistory.v[tilesHistoryIndexer.v]);
    checkTileColors();
  }

  function undo(): void {
    if (tilesHistoryIndexer.v !== 0) {
      tilesHistoryIndexer.v--;
      browseHistory();
    }
  }

  function redo(): void {
    if (tilesHistoryIndexer.v !== tilesHistory.v.length - 1) {
      tilesHistoryIndexer.v++;
      browseHistory();
    }
  }
</script>

<svelte:window {onkeydown} />

<div>
  <button onclick={undo}>Undo (z)</button>
  <button onclick={redo}>Redo (y)</button>
</div>

<style lang="scss">
  div {
    display: flex;

    button {
      width: 6rem;
    }
  }
</style>
