<script lang="ts">
	import {
    tiles,
    editorWidth,
    editorHeight,
    isGame,
    bgColor,
    colors,
    tilesSolution,
    win,
    borderOn,
    tileWidth,
    type TilePosition,
    sidebarOn,
  } from "$lib/refs.svelte";
  import { saveTiles, newEditor } from "$lib/main.svelte";
  import { getRandomNumber } from "$lib/utils";
  import "$lib/../global.scss";
  import Palette from "$lib/components/Palette.svelte";

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

	$effect(() => {
    document.body.style.backgroundColor = bgColor.v;
    document.body.style.color = colors.v[0];
  });
</script>

{#if sidebarOn.v}
  <div>
    <!-- prettier-ignore -->
    <button onclick={(): void => { sidebarOn.reset() }}>Close Options</button>
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
  <button onclick={(): void => { isGame.v = true; tilesSolution.v = tiles.v; newEditor(); sidebarOn.reset() }}>Start Game</button>
    <!-- prettier-ignore -->
    <button onclick={(): void => { isGame.reset(); newEditor(); }}>New Editor</button>
    <button onclick={revealATile}>Reveal A Tile</button>
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

<svelte:window on:wheel|nonpassive={onwheel} />

<style lang="scss">
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