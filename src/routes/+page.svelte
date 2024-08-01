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
    tilesSolution,
  } from "$lib/refs.svelte";
  import { decodeTiles } from "$lib/main";
  import Shareogram from "$lib/components/Shareogram.svelte";
  import Header from "$lib/components/header/Header.svelte";
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
</script>

<svelte:head>
  <title>Shareogram</title>
</svelte:head>

<svelte:window onmousedown={handleMouseDown} onmouseup={handleMouseUp} oncontextmenu={(e: MouseEvent): void => e.preventDefault()} />

<Header />

<main>
  <Shareogram />
</main>

<Footer />

<style lang="scss">
  @import "$lib/../mixins.scss";

  main {
    flex: 1;
    margin: 10px;
    @include center-div;
  }
</style>
