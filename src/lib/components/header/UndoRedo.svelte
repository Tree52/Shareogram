<script lang="ts">
	import { tilesHistory, tilesHistoryIndexer, tiles } from "$lib/refs.svelte";
	import { checkTileColors } from "$lib/main";

	function onkeydown(e: KeyboardEvent): void {
    if (e.ctrlKey && e.key === "z") undo();
    else if (e.ctrlKey && e.key === "y") redo();
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

<svelte:window {onkeydown}></svelte:window>

<div>
	<div>
		<button onclick={undo}>Undo</button>
		Ctrl + z
	</div>
	<div>
		<button onclick={redo}>Redo</button>
		Ctrl + y
	</div>
</div>

<style lang="scss">
	div {
		display: flex;
		
		div {
			display: flex;
			align-items: center;
			flex-direction: column;

			button {
				margin-bottom: 4px;
				width: 4rem;
			}
		}
	}
</style>