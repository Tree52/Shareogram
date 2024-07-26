<script lang="ts">
	import {
		isLeftHeld,
		isRightHeld,
		clickedTile,
		tiles,
		tilesHistory,
		tilesHistoryIndexer
	} from "$lib/refs.svelte";
	import Header from "$lib/components/Header.svelte";
	import Content from "$lib/components/Content.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import "$lib/../global.scss";

	function handleMouseDown(e: MouseEvent) {
		if (e.button === 0) isLeftHeld.value = true;
		else if (e.button === 2) isRightHeld.value = true;
	}

	function handleMouseUp(e: MouseEvent) {
		if (e.button === 0) isLeftHeld.reset();
		else if (e.button === 2) isRightHeld.reset();
		if (clickedTile.value.row !== -1) {
			if (tilesHistoryIndexer.value !== tilesHistory.value.length - 1)
				tilesHistory.value.splice(tilesHistoryIndexer.value + 1);
			tilesHistoryIndexer.value++;
			tilesHistory.value.push($state.snapshot(tiles.value));
		}
		clickedTile.reset();
	}
</script>

<svelte:head>
	<title>Pixel Pictures</title>
</svelte:head>

<svelte:window
	onmousedown={handleMouseDown}
	onmouseup={handleMouseUp}
	oncontextmenu={(e: MouseEvent): void => e.preventDefault()}
/>

<Header />
<Content />
<Footer />
