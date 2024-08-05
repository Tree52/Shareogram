<script lang="ts">
  import {
    tiles,
    isGame,
    tilesHistory,
    tilesHistoryIndexer,
    editorWidth,
    editorHeight,
    tilesSolution,
    type TilePosition,
  } from "$lib/refs.svelte";
  import { getRandomNumber } from "$lib/utils";
  import { initializeTiles, saveTiles } from "$lib/main.svelte";

  const sanitizeNumberInput = (n: number): number => Math.max(0, Math.min(Number(String(n).replace(/[^0-9]/g, "")), 100));

  const { isDifferent, win } = $derived.by(() => {
    const isDifferent: TilePosition[] = [];
    let win = true;
    const numRows: number = tiles.numRows;
    const numColumns: number = tiles.numColumns;

    for (let i: number = 0; i < numRows; i++) {
      for (let j: number = 0; j < numColumns; j++) {
        if (tilesSolution.v[i][j].colorIndex !== tiles.v[i][j].colorIndex) {
          isDifferent.push({ row: i, column: j });
          win = false;
        }
      }
    }

    return {
      isDifferent,
      win,
    };
  });

  function newEditor(): void {
    if (editorWidth.v < 1 || editorHeight.v < 1) return;
    tiles.v = initializeTiles();
    tilesHistory.reset();
    tilesHistory.v[0] = $state.snapshot(tiles.v);
    tilesHistoryIndexer.reset();
  }

  function revealATile(): void {
    if (!win) {
      const randomIndex: number = getRandomNumber(0, isDifferent.length - 1);
      const row: number = isDifferent[randomIndex].row;
      const column: number = isDifferent[randomIndex].column;
      tiles.v[row][column] = { colorIndex: tilesSolution.v[row][column].colorIndex, Xed: false };
      saveTiles();
    }
  }
</script>

<header>
  {#if !isGame.v}
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
    <button onclick={(): void => { isGame.v = true; tilesSolution.v = tiles.v; newEditor(); }}>Start Game</button>
  {:else}
    <span>{win ? "You win" : "Keep trying"}</span>
    <!-- prettier-ignore -->
    <button onclick={(): void => { isGame.reset(); newEditor(); }}>New Editor</button>
    <button onclick={revealATile}>Reveal A Tile</button>
  {/if}
</header>

<style lang="scss">
  header {
    align-items: center;
    display: flex;
    justify-content: center;

    button,
    input[type="text"] {
      height: 2rem;
      padding: 0 10px;
    }
  }

  span {
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }

  input[type="text"] {
    padding: 0;
    text-align: center;
    width: 2rem;

    &:focus {
      outline: none;
    }
  }
</style>
