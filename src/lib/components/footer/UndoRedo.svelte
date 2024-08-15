<script lang="ts">
  import { tilesHistory, tilesHistoryIndexer, tiles, clickedTile } from "$lib/refs.svelte";
  import { checkTileColors, saveTiles } from "$lib/main.svelte";

  function onmouseup(): void {
    if (clickedTile.v.row !== -1) saveTiles();
    clickedTile.reset();
  }

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

<svelte:window {onkeydown} {onmouseup} />

<div>
  <button onclick={undo}>Undo</button>
  <button onclick={redo}>Redo</button>
</div>

<style>
  div {
    display: flex;

    button {
      flex: 1;
    }
  }
</style>
