<script lang="ts">
  import { tilesHistoryIndexer, tilesHistory, clickedTile, tiles } from "$lib/refs.svelte";
  import { checkTileColors, saveTiles } from "$lib/shared.svelte";

  const onmouseup = () => {
    if (clickedTile.v.row !== -1) saveTiles();
    clickedTile.reset();
  };

  const onkeydown = (e: KeyboardEvent) => {
    if (e.key === "z") undo();
    else if (e.key === "y") redo();
  };

  const browseHistory = () => {
    tiles.v = $state.snapshot(tilesHistory.v[tilesHistoryIndexer.v]);
    checkTileColors();
  };

  const undo = () => {
    if (tilesHistoryIndexer.v !== 0) {
      tilesHistoryIndexer.v--;
      browseHistory();
    }
  };

  const redo = () => {
    if (tilesHistoryIndexer.v !== tilesHistory.v.length - 1) {
      tilesHistoryIndexer.v++;
      browseHistory();
    }
  };
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
