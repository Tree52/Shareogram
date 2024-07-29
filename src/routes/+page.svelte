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
		isChangeHashAllowed,
		rowHints,
		columnHints,
		type Tile,
		solution
	} from "$lib/refs.svelte";
	import { extractPropertyFrom2DArray, dec2DArrayToHex, hexToLetter, letterToHex } from "$lib/utils";
	import { initializeTiles, calculateRowHints, calculateColumnHints } from "$lib/main";
	import Header from "$lib/components/Header.svelte";
	import Nonogram from "$lib/components/Nonogram.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import "$lib/../global.scss";

	function handleMouseDown(e: MouseEvent) {
		if (e.button === 0) isLeftHeld.v = true;
		else if (e.button === 2) isRightHeld.v = true;
	}

	function handleMouseUp(e: MouseEvent) {
		if (e.button === 0) isLeftHeld.reset();
		else if (e.button === 2) isRightHeld.reset();
		if (clickedTile.v.row !== -1) {
			if (tilesHistoryIndexer.v !== tilesHistory.v.length - 1) tilesHistory.v.splice(tilesHistoryIndexer.v + 1);
			tilesHistoryIndexer.v++;
			tilesHistory.v.push($state.snapshot(tiles.v));
		}
		clickedTile.reset();
		isChangeHashAllowed.reset();
	}

	const scrapeHash = (hash: string): string[] => hash.split("-");

	function elongateActivity(input: string) {
		const splitString: string[] = input.match(/\d+\w/g) as string[];
		let activity: string = "";
		for (let i: number = 0; i < splitString.length; i++) {
			const count: number = Number(splitString[i].slice(0, -1));
			const color: string = splitString[i][splitString[i].length - 1];
			for (let j: number = 0; j < count; j++) activity += letterToHex(color);
		}
		return activity;
	}

	let goal: string = "";
	let importFlag: boolean = true;
	$effect.pre(() => {
		if (window.location.hash && importFlag) {
			const scrapedHash: string[] = scrapeHash(window.location.hash.slice(1));

			isGame.v = Boolean(Number(scrapedHash[0]));
			editorWidth.v = Number(scrapedHash[1]);
			editorHeight.v = Number(scrapedHash[2]);
			bgColor.v = "#" + scrapedHash[3];

			const scrapedColors: string[] = isGame.v ? scrapedHash.slice(4, -2) : scrapedHash.slice(4, -1);
			for (let i: number = 0; i < scrapedColors.length; i++) colors.v[i] = "#" + scrapedColors[i];

			const tileActivityIndex: number = isGame.v ? scrapedHash.length - 2 : scrapedHash.length - 1;

			if (isGame.v) {
				goal = scrapedHash[scrapedHash.length - 1];
				tiles.v = initializeTiles(editorWidth.v, editorHeight.v, elongateActivity(goal));
				solution.v = extractPropertyFrom2DArray(tiles.v, "colorIndex");
				rowHints.v = calculateRowHints(tiles.v);
				columnHints.v = calculateColumnHints(tiles.v);
			}

			tiles.v = initializeTiles(editorWidth.v, editorHeight.v, elongateActivity(scrapedHash[tileActivityIndex]));
		}

		importFlag = false;
	});

	function shortenActivity(tileActivity: string): string {
		let shortActivity: string = "";
		let count: number = 1;

		for (let i: number = 1; i < tileActivity.length; i++) {
			if (tileActivity[i - 1] === tileActivity[i]) count++;
			else {
				shortActivity += count + hexToLetter(tileActivity[i - 1]);
				count = 1;
			}
		}

		shortActivity += count + hexToLetter(tileActivity[tileActivity.length - 1]);
		return shortActivity;
	}

	const hash: string = $derived.by(() => {
		const hashElements: (number | string)[] = [Number(isGame.v), editorWidth.v, editorHeight.v, bgColor.v.slice(1)];
		for (let i: number = 0; i < colors.v.length; i++) hashElements.push(colors.v[i].slice(1));
		const tileActivity: string = shortenActivity(dec2DArrayToHex(extractPropertyFrom2DArray(tiles.v, "colorIndex")));
		hashElements.push(tileActivity);
		if (isGame.v) hashElements.push(goal);
		else goal = tileActivity;
		return hashElements.join("-");
	});

	$effect(() => {
		if (isChangeHashAllowed.v) window.location.hash = hash;
	});
</script>

<svelte:head>
	<title>Shareogram</title>
</svelte:head>

<svelte:window onmousedown={handleMouseDown} onmouseup={handleMouseUp} oncontextmenu={(e: MouseEvent): void => e.preventDefault()} />

<Header />

<main>
	<Nonogram />
</main>

<Footer />

<style lang="scss">
	@import "$lib/../mixins.scss";
	
	main {
		flex: 1;
		@include center-div;
	}
</style>