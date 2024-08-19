<script lang="ts">
  import { isChangeHashAllowed, tilesSolution, editorHeight, tilesHistory, editorWidth, type Tile, bgColor, colors, isGame, tiles } from "$lib/refs.svelte";
  import Options from "$lib/components/options/Options.svelte";
  import Shareogram from "$lib/components/Shareogram.svelte";
  import Footer from "$lib/components/footer/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import { lettersToNum } from "$lib/main.svelte";
  import "$lib/../global.css";

  const splitString = (input: string): { letters: string[]; numbers: number[] } => {
    const splitString: RegExpMatchArray | null = input.match(/(\d+|[a-zX]+)/g);
    const numbers: number[] = [];
    const letters: string[] = [];

    if (splitString) {
      for (let i = 0; i < splitString.length; i++) {
        const match: string = splitString[i];
        if (isNaN(Number(match))) letters.push(match);
        else numbers.push(Number(match));
      }
    }

    if (numbers.length !== letters.length) throw new Error("Error: different number of counts and letters.");

    return { letters, numbers };
  };

  const decodeTiles = (encodedTiles: string): Tile[][] => {
    const split: { letters: string[]; numbers: number[] } = splitString(encodedTiles);
    const tiles: Tile[][] = [];
    let row: number = 0;
    let column: number = 0;

    for (let i: number = 0; i < editorHeight.v; i++) tiles[i] = [];

    for (let i: number = 0; i < split.numbers.length; i++) {
      for (let j: number = 0; j < split.numbers[i]; j++) {
        if (split.letters[i] === "X") tiles[row][column++] = { colorIndex: 0, Xed: true };
        else tiles[row][column++] = { colorIndex: lettersToNum(split.letters[i]), Xed: false };

        if (column > editorWidth.v - 1) {
          row++;
          column = 0;
        }
      }
    }

    return tiles;
  };

  const onload = (): void => {
    if (window.location.hash) {
      try {
        const scrapedHash: string[] = window.location.hash.slice(1).split("-");

        isGame.v = Boolean(Number(scrapedHash[0]));
        editorWidth.v = Number(scrapedHash[1]);
        editorHeight.v = Number(scrapedHash[2]);
        bgColor.v = "#" + scrapedHash[3];

        const scrapedColors: string[] = isGame.v ? scrapedHash.slice(4, -2) : scrapedHash.slice(4, -1);
        for (let i: number = 0; i < scrapedColors.length; i++) colors.v[i] = "#" + scrapedColors[i];

        tiles.v = decodeTiles(scrapedHash[isGame.v ? scrapedHash.length - 2 : scrapedHash.length - 1]);
        tilesHistory.v[0] = $state.snapshot(tiles.v);

        if (isGame.v) tilesSolution.v = decodeTiles(scrapedHash[scrapedHash.length - 1]);
      }
      catch {
        alert("Couldn't load the code from the URL. Make sure you copied the link correctly.");
      }

      isChangeHashAllowed.v = true;
    }
  };

  $effect(() => {
    if (isChangeHashAllowed.v) {
      const hash: (number | string)[] = [Number(isGame.v), editorWidth.v, editorHeight.v, bgColor.v.slice(1)];
      for (let i: number = 0; i < colors.v.length; i++) hash.push(colors.v[i].slice(1));
      hash.push(tiles.encoded);
      if (isGame.v) hash.push(tilesSolution.encoded);
      window.location.hash = hash.join("-");
    }
  });

  $effect(() => {
    document.body.style.backgroundColor = bgColor.v;
    document.body.style.color = colors.v[0];
  });
</script>

<svelte:head>
  <title>Shareogram</title>
</svelte:head>

<svelte:window oncontextmenu={(e: MouseEvent): void => e.preventDefault()} {onload} />

<Header />

<main>
  <Shareogram />
</main>

<Footer />

<Options />

<style>
  main {
    align-items: safe center;
    display: flex;
    flex: 1;
    justify-content: safe center;
    margin: 10px;
    overflow: auto;
    padding: 20px;
  }
</style>
