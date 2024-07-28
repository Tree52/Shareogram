<script lang="ts">
	import {
		isLeftHeld,
		isRightHeld,
		clickedTile,
		tiles,
		tilesHistory,
		tilesHistoryIndexer,
		editorWidth,
		editorHeight,
		isGame,
		bgColor,
		colors,
		isChangeHashAllowed
	} from "$lib/refs.svelte";
	import { extractPropertyFrom2DArray, array2DToHexString, hexToNum, numberToLetter } from "$lib/utils";
	import Header from "$lib/components/Header.svelte";
	import Content from "$lib/components/Content.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import "$lib/../global.scss";

	function shortenSolution(solution: string): string {
		let hash: string = "";
		let count: number = 1;
		for (let i: number = 1; i < solution.length; i++) {
			if (solution[i - 1] === solution[i]) count++;
			else {
				hash += count + (solution[i - 1] === "0" ? "x" : numberToLetter(hexToNum(solution[i - 1])));
				count = 1;
			}
		}

		return hash += count + (solution[solution.length - 1] === "0" ? "x" : numberToLetter(hexToNum(solution[solution.length - 1])));;
	}

	const hash: string = $derived.by(() => {
		let hash: string =
			Number(isGame.value) + "_" + editorWidth.value + "_" + editorHeight.value + "_" + bgColor.value.slice(1) + "_";
		for (let i: number = 0; i < colors.value.length; i++) hash += colors.value[i].slice(1) + "_";
		const solution: string = array2DToHexString(extractPropertyFrom2DArray(tiles.value, "colorIndex"));
		const shortSolution: string = shortenSolution(solution);
		return hash += shortSolution.length < solution.length ? shortSolution : solution;
	});

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
		isChangeHashAllowed.reset();
	}

	$effect(() => {
		if (isChangeHashAllowed.value) window.location.hash = hash;
	});
</script>

<svelte:head>
	<title>Shareograms</title>
</svelte:head>

<svelte:window
	onmousedown={handleMouseDown}
	onmouseup={handleMouseUp}
	oncontextmenu={(e: MouseEvent): void => e.preventDefault()}
/>

<Header />
<Content />
<Footer />
