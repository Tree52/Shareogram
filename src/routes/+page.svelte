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
	import {
		extractPropertyFrom2DArray,
		hexToDec,
		dec2DArrayToHex,
		decToLetter,
		letterToDec,
		decToHex
	} from "$lib/utils";
	import { initializeTiles } from "$lib/main";
	import Header from "$lib/components/Header.svelte";
	import Content from "$lib/components/Content.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import "$lib/../global.scss";

	function shortenSolution(tileActivity: string): string {
		let hash: string = "";
		let count: number = 1;

		for (let i: number = 1; i < tileActivity.length; i++) {
			if (tileActivity[i - 1] === tileActivity[i]) count++;
			else {
				hash += count + decToLetter(hexToDec(tileActivity[i - 1]));
				count = 1;
			}
		}

		hash += count + decToLetter(hexToDec(tileActivity[tileActivity.length - 1]));
		return hash;
	}

	let goal: string = "";
	const hash: string = $derived.by(() => {
		let hash: string =
			Number(isGame.value) +
			"_" +
			editorWidth.value +
			"_" +
			editorHeight.value +
			"_" +
			bgColor.value.slice(1) +
			"_";
		for (let i: number = 0; i < colors.value.length; i++) hash += colors.value[i].slice(1) + "_";
		const tileActivity: string = dec2DArrayToHex(extractPropertyFrom2DArray(tiles.value, "colorIndex"));
		const tileActivityShort: string = shortenSolution(tileActivity);
		const tileActivityPush: string = tileActivityShort.length < tileActivity.length ? tileActivityShort : tileActivity
		hash += tileActivityPush;
		if (!isGame.value) goal = tileActivityPush;
		else hash += "_" + goal;
		return hash;
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

	const scrapeHash = (hash: string): string[] => hash.split("_");

	function convertString(input: string) {
		const splitString: string[] = input.match(/\d+\w/g) as string[];
		let solution: string = "";
		for (let i: number = 0; i < splitString.length; i++) {
			const count: number = Number(splitString[i].slice(0, -1));
			const color: string = splitString[i][splitString[i].length - 1];
			for (let j: number = 0; j < count; j++) {
				if (color === "x") solution += "0";
				else solution += decToHex(letterToDec(color));
			}
		}
		return solution;
	}

	let importFlag: boolean = true;
	$effect.pre(() => {
		if (window.location.hash && importFlag) {
			const scrapedHash: string[] = scrapeHash(window.location.hash.slice(1));
			isGame.value = Boolean(Number(scrapedHash[0]));
			editorWidth.value = Number(scrapedHash[1]);
			editorHeight.value = Number(scrapedHash[2]);
			bgColor.value = "#" + scrapedHash[3];
			for (let i: number = 4; i < scrapedHash.length - 1; i++)
				colors.value[i - 4] = "#" + scrapedHash[i];
			if (
				scrapedHash[scrapedHash.length - 1].includes("x") ||
				scrapedHash[scrapedHash.length - 1].includes("a")
			) {
				tiles.value = initializeTiles(
					editorWidth.value,
					editorHeight.value,
					convertString(scrapedHash[scrapedHash.length - 1])
				);
			} else {
				tiles.value = initializeTiles(
					editorWidth.value,
					editorHeight.value,
					scrapedHash[scrapedHash.length - 1]
				);
			}
		}
		importFlag = false;
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
