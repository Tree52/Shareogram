<script lang="ts">
  import { win, tilesSolution, tiles, type TilePosition } from "$lib/refs.svelte";
  import { getRandomNumber } from "$lib/utils";
  import { saveTiles } from "$lib/main.svelte";

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

  function revealATile(): void {
    if (!win.v) {
      const randomIndex: number = getRandomNumber(0, isDifferent.length - 1);
      const row: number = isDifferent[randomIndex].row;
      const column: number = isDifferent[randomIndex].column;
      tiles.v[row][column] = { colorIndex: tilesSolution.v[row][column].colorIndex, Xed: false };
      saveTiles();
    }
  }
</script>

<button onclick={revealATile}>Reveal Tile</button>
