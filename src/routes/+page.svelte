<script lang="ts">
  import {
    isLeftHeld,
    isRightHeld,
    clickedTile,
    tiles,
    tilesHistory,
    editorWidth,
    editorHeight,
    isGame,
    bgColor,
    colors,
    isChangeHashAllowed,
    tilesSolution,
    win,
    borderOn,
    tileWidth,
    type TilePosition,
    sidebarOn,
  } from "$lib/refs.svelte";
  import { decodeTiles, saveTiles, newEditor } from "$lib/main.svelte";
  import Shareogram from "$lib/components/Shareogram.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import { getRandomNumber } from "$lib/utils";
  import "$lib/../global.scss";
  import Palette from "$lib/components/Palette.svelte";

  function onmousedown(e: MouseEvent) {
    if (e.button === 0) isLeftHeld.v = true;
    else if (e.button === 2) isRightHeld.v = true;
  }

  function onmouseup(e: MouseEvent) {
    if (e.button === 0) isLeftHeld.reset();
    else if (e.button === 2) isRightHeld.reset();
    if (clickedTile.v.row !== -1) {
      saveTiles();
    }
    clickedTile.reset();
    isChangeHashAllowed.reset();
  }

  let importFlag: boolean = true;
  $effect.pre(() => {
    if (window.location.hash && importFlag) {
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

    importFlag = false;
  });

  const hash: string = $derived.by(() => {
    const hashElements: (number | string)[] = [Number(isGame.v), editorWidth.v, editorHeight.v, bgColor.v.slice(1)];
    for (let i: number = 0; i < colors.v.length; i++) hashElements.push(colors.v[i].slice(1));
    hashElements.push(tiles.encoded);
    if (isGame.v) hashElements.push(tilesSolution.encoded);
    return hashElements.join("-");
  });

  // prettier-ignore
  $effect(() => { if (isChangeHashAllowed.v) window.location.hash = hash; });

  $effect(() => {
    document.body.style.backgroundColor = bgColor.v;
    document.body.style.color = colors.v[0];
  });

  function revealATile(): void {
    if (!win.v) {
      const randomIndex: number = getRandomNumber(0, isDifferent.length - 1);
      const row: number = isDifferent[randomIndex].row;
      const column: number = isDifferent[randomIndex].column;
      tiles.v[row][column] = { colorIndex: tilesSolution.v[row][column].colorIndex, Xed: false };
      saveTiles();
    }
  }

  const sanitizeNumberInput = (n: number): number => Math.max(0, Math.min(Number(String(n).replace(/[^0-9]/g, "")), 100));

  const { isDifferent, allSame } = $derived.by(() => {
    const isDifferent: TilePosition[] = [];
    let allSame = true;
    const numRows: number = tiles.numRows;
    const numColumns: number = tiles.numColumns;

    for (let i: number = 0; i < numRows; i++) {
      for (let j: number = 0; j < numColumns; j++) {
        if (tilesSolution.v[i][j].colorIndex !== tiles.v[i][j].colorIndex) {
          isDifferent.push({ row: i, column: j });
          allSame = false;
        }
      }
    }

    return {
      isDifferent,
      allSame,
    };
  });

  $effect(() => {
    win.v = allSame;
  });

  const MAX_TILE_WIDTH = 100;
  const MIN_TILE_WIDTH = 10;

  function onwheel(e: WheelEvent) {
    e.preventDefault();
    if (e.deltaY < 0 && tileWidth.v < MAX_TILE_WIDTH) tileWidth.v += 5;
    else if (e.deltaY > 0 && tileWidth.v > MIN_TILE_WIDTH) tileWidth.v -= 5;
  }
</script>

<svelte:head>
  <title>Shareogram</title>
</svelte:head>

<svelte:window {onmousedown} {onmouseup} on:wheel|nonpassive={onwheel} oncontextmenu={(e: MouseEvent): void => e.preventDefault()} />

<Header />

<main>
  <Shareogram />
</main>

<Footer />

{#if sidebarOn.v}
  <div>
    <!-- prettier-ignore -->
    <input
  type="text"  
  bind:value={editorWidth.v}
  oninput={(): void => { editorWidth.v = sanitizeNumberInput(editorWidth.v); newEditor(); }}
  />
    <!-- prettier-ignore -->
    <input
  type="text"  
  bind:value={editorHeight.v}
  oninput={(): void => { editorHeight.v = sanitizeNumberInput(editorHeight.v); newEditor(); }}
  />
    <!-- prettier-ignore -->
    <button onclick={(): void => { isGame.reset(); newEditor(); }}>New Editor</button>
    <button onclick={revealATile}>Reveal A Tile</button>
    <!-- prettier-ignore -->
    <input
    type="color"
    onclick={(): void => { isChangeHashAllowed.v = false; }}
    onchange={(): void => { isChangeHashAllowed.reset(); }}
    bind:value={bgColor.v}
  />
    <input
      type="range"
      min="0"
      max={editorWidth.v > 5 || editorHeight.v > 5 ? 2 : 1}
      style:--slider-bg={colors.v[0]}
      style:--slider-color={colors.v[1]}
      bind:value={borderOn.v}
    />
    <input
      type="range"
      min={MIN_TILE_WIDTH}
      max={MAX_TILE_WIDTH}
      style:--slider-bg={colors.v[0]}
      style:--slider-color={colors.v[1]}
      bind:value={tileWidth.v}
    />
    <Palette />
  </div>
{/if}

<style lang="scss">
  main {
    align-items: safe center;
    display: flex;
    flex: 1;
    justify-content: safe center;
    margin: 10px;
    overflow: scroll;
    padding: 20px;
  }

  div {
    background-color: white;
    bottom: 0;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
    width: 200px;
  }
</style>
