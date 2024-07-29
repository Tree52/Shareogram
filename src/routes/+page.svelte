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
		type Tile
	} from "$lib/refs.svelte";
	import {
		extractPropertyFrom2DArray,
		dec2DArrayToHex,
		hexToLetter,
		letterToHex
	} from "$lib/utils";
	import { initializeTiles, calculateRowHints, calculateColumnHints } from "$lib/main";
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

			isGame.value = Boolean(Number(scrapedHash[0]));
			editorWidth.value = Number(scrapedHash[1]);
			editorHeight.value = Number(scrapedHash[2]);
			bgColor.value = "#" + scrapedHash[3];

			const scrapedColors: string[] = isGame.value
				? scrapedHash.slice(4, -2)
				: scrapedHash.slice(4, -1);
			for (let i: number = 0; i < scrapedColors.length; i++)
				colors.value[i] = "#" + scrapedColors[i];

			const tileActivityIndex: number = isGame.value
				? scrapedHash.length - 2
				: scrapedHash.length - 1;
				
				if (isGame.value) {
					goal = scrapedHash[scrapedHash.length - 1];
					tiles.value = initializeTiles(
						editorWidth.value,
						editorHeight.value,
						elongateActivity(goal)
					);
					rowHints.value = calculateRowHints(tiles.value);
					columnHints.value = calculateColumnHints(tiles.value);
				}

				tiles.value = initializeTiles(
					editorWidth.value,
					editorHeight.value,
					elongateActivity(scrapedHash[tileActivityIndex])
				);
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
		const hashElements: (number | string)[] = [
			Number(isGame.value),
			editorWidth.value,
			editorHeight.value,
			bgColor.value.slice(1)
		];
		for (let i: number = 0; i < colors.value.length; i++)
			hashElements.push(colors.value[i].slice(1));
		const tileActivity: string = shortenActivity(
			dec2DArrayToHex(extractPropertyFrom2DArray(tiles.value, "colorIndex"))
		);
		hashElements.push(tileActivity);
		if (isGame.value) hashElements.push(goal);
		else goal = tileActivity;
		return hashElements.join("-");
	});

	$effect(() => {
		if (isChangeHashAllowed.value) window.location.hash = hash;
	});
</script>

<svelte:head>
	<title>Shareogram</title>
</svelte:head>

<svelte:window
	onmousedown={handleMouseDown}
	onmouseup={handleMouseUp}
	oncontextmenu={(e: MouseEvent): void => e.preventDefault()}
/>

<Header />
<Content />
<Footer />
