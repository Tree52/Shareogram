<script lang="ts">
  import {
    isLeftHeld,
    isRightHeld,
    tiles,
    tilesHistory,
    editorWidth,
    editorHeight,
    isGame,
    bgColor,
    colors,
    isChangeHashAllowed,
    tilesSolution,
  } from "$lib/refs.svelte";
  import { decodeTiles } from "$lib/main.svelte";
  import Shareogram from "$lib/components/Shareogram.svelte";
  import Options from "$lib/components/options/Options.svelte";
  import Footer from "$lib/components/footer/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import "$lib/../global.css";

  function onmousedown(e: MouseEvent): void {
    if (e.button === 0) isLeftHeld.v = true;
    else if (e.button === 2) isRightHeld.v = true;
  }

  function onmouseup(e: MouseEvent): void {
    if (e.button === 0) isLeftHeld.reset();
    else if (e.button === 2) isRightHeld.reset();
  }

  let importFlag: boolean = true;
  $effect.pre(() => {
    if (window.location.hash && importFlag) {
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
      } catch (error) {
        alert("Couldn't load the code from the URL. Make sure you copied the link correctly.");
      }
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

  $effect(() => {
    if (isChangeHashAllowed.v) window.location.hash = hash;
  });

  $effect(() => {
    document.body.style.backgroundColor = bgColor.v;
    document.body.style.color = colors.v[0];
  });
</script>

<svelte:head>
  <title>Shareogram</title>
</svelte:head>

<svelte:window {onmousedown} {onmouseup} oncontextmenu={(e: MouseEvent): void => e.preventDefault()} />

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
