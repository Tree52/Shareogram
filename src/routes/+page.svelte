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
	import { decToLetter, extractPropertyFrom2DArray, letterToDec, splitString } from "$lib/utils";
	import { calculateRowHints, calculateColumnHints } from "$lib/main";
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

	function decodeTiles(width: number, height: number, encodedTiles: string): Tile[][] {
		const split: { numbers: number[]; letters: string[] } = splitString(encodedTiles);
		const tiles: Tile[][] = [];
		let row: number = 0;
		let column: number = 0;

		for (let i: number = 0; i < width; i++) tiles[i] = [];

		for (let i: number = 0; i < split.numbers.length; i++) {
			for (let j: number = 0; j < split.numbers[i]; j++) {
				if (split.letters[i] === "x") tiles[row][column++] = { colorIndex: 0, Xed: true };
				else tiles[row][column++] = { colorIndex: letterToDec(split.letters[i]), Xed: false };

				if (column > width - 1) {
					row++;
					column = 0;
				}
			}
		}

		return tiles;
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
				tiles.v = decodeTiles(editorWidth.v, editorHeight.v, goal);
				solution.v = extractPropertyFrom2DArray(tiles.v, "colorIndex");
				rowHints.v = calculateRowHints(tiles.v);
				columnHints.v = calculateColumnHints(tiles.v);
			}

			tiles.v = decodeTiles(editorWidth.v, editorHeight.v, scrapedHash[tileActivityIndex]);
		}

		importFlag = false;
	});

	function encodeTiles(tiles: Tile[][]): string {
		let encoded: string = "";
		const numRows: number = tiles.length;
		const numColumns: number = tiles[0].length;
		let count: number = 1;

		for (let i: number = 0; i < numRows; i++) {
			for (let j: number = 0; j < numColumns; j++) {
				if (i === 0 && j === 0) continue;
				else {
					const prevTile: Tile = j === 0 ? tiles[i - 1][numRows - 1] : tiles[i][j - 1];
					if (prevTile.colorIndex === tiles[i][j].colorIndex && prevTile.Xed === tiles[i][j].Xed) count++;
					else {
						encoded += count + (prevTile.Xed ? "x" : decToLetter(prevTile.colorIndex));
						count = 1;
					}
				}
			}
		}

		const lastTile: Tile = tiles[numRows - 1][numColumns - 1];
		encoded += count + (lastTile.Xed ? "x" : decToLetter(lastTile.colorIndex));
		return encoded;
	}

	const hash: string = $derived.by(() => {
		const hashElements: (number | string)[] = [Number(isGame.v), editorWidth.v, editorHeight.v, bgColor.v.slice(1)];
		for (let i: number = 0; i < colors.v.length; i++) hashElements.push(colors.v[i].slice(1));
		const tileActivity: string = encodeTiles(tiles.v);
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
