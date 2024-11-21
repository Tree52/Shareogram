<script lang="ts">
  import { isChangeHashAllowed, isMoveSelected, tilesSolution, editorHeight, tilesHistory, editorWidth, type Tile, sidebarOn, bgColor, colors, isGame, tiles } from "$lib/refs.svelte";
  import { getRandomNumber, lettersToNum } from "$lib/shared.svelte";
  import Options from "$lib/components/options/Options.svelte";
  import Shareogram from "$lib/components/Shareogram.svelte";
  import Footer from "$lib/components/footer/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import { dragscroll } from "$lib/dragscroll";

  let loadDone = $state(false);

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

  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
    return "";
  };

  const onload = () => {
    const hash = window.location.hash;

    if (hash) {
      try {
        const scrapedHash = hash.slice(1).split("-");

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

    loadDone = true;
  };

  // onload doesn't seem to fire sometimes, thus needing this.
  $effect(() => { while (!loadDone) onload(); });

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

    // fill={colors.v[0]} stopped working for some reason, thus needing this.
    const svgPath = document.querySelector("#dynamic-svg path");
    svgPath?.setAttribute("fill", colors.v[0]);
  });
</script>

<svelte:head>
  <title>Shareogram</title>
</svelte:head>

<svelte:window oncontextmenu={e => e.preventDefault()} {onload} onbeforeunload={(e) => { handleBeforeUnload(e); }} />

<ul style:background-color={bgColor.v} class="absolute inset-0 -z-10 m-0 overflow-hidden p-0">
  {#each { length: 35 } as _}
    <li
      class="absolute -bottom-[200px] block aspect-square rounded-[10%] bg-white/20"
      style:animation-delay={getRandomNumber(0, 60) + "s"}
      style:width={getRandomNumber(5, 200) + "px"}
      style:left={getRandomNumber(0, 100) + "%"}
    ></li>
  {/each}
</ul>

<Header />

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<main
  style:touch-action={isMoveSelected.v ? "auto" : "none"}
  onclick={ () => { sidebarOn.v = false; } }
  class="m-3 flex flex-1 overflow-auto"
  use:dragscroll
>
  <Shareogram />
</main>

<Footer />

<Options />

<style>
  main {
    align-items: safe center;
    justify-content: safe center;

    /* Hide scrollbars */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari and Opera */
    }
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

  ul li {
    animation: myAnimation 60s linear infinite;
  }
</style>
