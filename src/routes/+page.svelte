<script lang="ts">
  import { isChangeHashAllowed, isMoveSelected, tilesSolution, editorHeight, tilesHistory, editorWidth, type Tile, sidebarOn, bgColor, colors, isGame, tiles } from "$lib/refs.svelte";
  import { getRandomNumber, lettersToNum } from "$lib/shared.svelte";
  import Options from "$lib/components/options/Options.svelte";
  import Shareogram from "$lib/components/Shareogram.svelte";
  import Footer from "$lib/components/footer/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import { dragscroll } from "$lib/dragscroll";
  import "$lib/../app.css";

  const splitString = (input: string) => {
    const splitString = input.match(/(\d+|[a-zX]+)/g);
    const numbers: number[] = [];
    const letters: string[] = [];

    if (splitString) {
      for (let i = 0; i < splitString.length; i++) {
        const match = splitString[i];
        if (isNaN(Number(match))) letters.push(match);
        else numbers.push(Number(match));
      }
    }

    if (numbers.length !== letters.length) throw new Error("Error: different number of counts and letters.");

    return { letters, numbers };
  };

  const decodeTiles = (encodedTiles: string) => {
    const split = splitString(encodedTiles);
    const tiles: Tile[][] = [];
    let row = 0;
    let column = 0;

    for (let i = 0; i < editorHeight.v; i++) tiles[i] = [];

    for (let i = 0; i < split.numbers.length; i++) {
      for (let j = 0; j < split.numbers[i]; j++) {
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

  const onload = () => {
    if (window.location.hash) {
      try {
        const scrapedHash = window.location.hash.slice(1).split("-");

        isGame.v = Boolean(Number(scrapedHash[0]));
        editorWidth.v = Number(scrapedHash[1]);
        editorHeight.v = Number(scrapedHash[2]);
        bgColor.v = "#" + scrapedHash[3];

        const scrapedColors = isGame.v ? scrapedHash.slice(4, -2) : scrapedHash.slice(4, -1);
        for (let i = 0; i < scrapedColors.length; i++) colors.v[i] = "#" + scrapedColors[i];

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
      const hash = [Number(isGame.v), editorWidth.v, editorHeight.v, bgColor.v.slice(1)];
      for (let i = 0; i < colors.v.length; i++) hash.push(colors.v[i].slice(1));
      hash.push(tiles.encoded);
      if (isGame.v) hash.push(tilesSolution.encoded);
      window.location.hash = hash.join("-");
    }
  });

  $effect(() => {
    document.body.style.color = colors.v[0];
  });
</script>

<svelte:head>
  <title>Shareogram</title>
</svelte:head>

<svelte:window oncontextmenu={e => e.preventDefault()} {onload} />

<div class="github">
  <a href="https://github.com/Tree52/Shareogram" aria-label="Link to GitHub repository">
    <svg height="96" width="98" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill={colors.v[0]} fill-rule="evenodd"/>
    </svg>
  </a>
</div>

<ul style:background-color={bgColor.v} class="background">
  {#each { length: 35 } as _}
    <li style:animation-delay={getRandomNumber(0, 60) + "s"}
        style:width={getRandomNumber(5, 200) + "px"}
        style:left={getRandomNumber(0, 100) + "%"}
    ></li>
  {/each}
</ul>

<Header />

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<main style:touch-action={isMoveSelected.v ? "auto" : "none"} onclick={ () => { sidebarOn.v = false; } } use:dragscroll>
  <Shareogram />
</main>

<Footer />

<Options />

<style>
  .github {
    position: absolute;
    left: -24px;
    top: -24px;
    scale: 40%;
  }

  main {
    align-items: safe center;
    display: flex;
    flex: 1;
    justify-content: safe center;
    margin: 10px;
    overflow: auto;
    padding: 20px;
  }

  @keyframes myAnimation {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
    }
  }

  .background {
    position: absolute;
    inset: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
    z-index: -1;

    li {
      position: absolute;
      display: block;
      background: rgba(255, 255, 255, 0.2);
      animation: myAnimation 60s linear infinite;
      aspect-ratio: 1/1;
      bottom: -200px;
      border-radius: 10%;
    }
  }
</style>
