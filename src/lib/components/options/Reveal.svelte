<script lang="ts">
  import { type TilePosition, tilesSolution, tiles, win } from "$lib/refs.svelte";
  import { getRandomNumber, saveTiles } from "$lib/shared.svelte";

  const { isDifferent, allSame } = $derived.by(() => {
    const isDifferent: TilePosition[] = [];
    let allSame = true;
    const numRows = tiles.numRows;
    const numColumns = tiles.numColumns;

    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numColumns; j++) {
        if (tilesSolution.v[i][j].colorIndex !== tiles.v[i][j].colorIndex) {
          isDifferent.push({ column: j, row: i });
          allSame = false;
        }
      }
    }

    return { isDifferent, allSame };
  });

  $effect(() => { win.v = allSame; });

  const revealATile = () => {
    if (!win.v) {
      const randomIndex = getRandomNumber(0, isDifferent.length - 1);
      const row = isDifferent[randomIndex].row;
      const column = isDifferent[randomIndex].column;
      tiles.v[row][column] = { colorIndex: tilesSolution.v[row][column].colorIndex, Xed: false };
      saveTiles();
    }
  };
</script>

<button onclick={revealATile}>Reveal Tile</button>
