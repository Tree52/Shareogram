<script lang="ts">
  import { tiles, colors, editorWidth, editorHeight, tilesHistory, colorsIndexer } from "$lib/refs.svelte";
  import { initializeTiles } from "$lib/main.svelte";
  import { importPNG } from "$lib/utils";

  function onchange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      importPNG(input.files[0], (array, colorMap) => {
        editorWidth.v = array[0].length;
        editorHeight.v = array.length;
        tiles.v = initializeTiles();
        tilesHistory.v[0] = $state.snapshot(tiles.v);
        for (let i: number = 0; i < tiles.numRows; i++) {
          for (let j: number = 0; j < tiles.numColumns; j++) tiles.v[i][j].colorIndex = array[i][j];
        }
        colors.v = colorMap;
        colorsIndexer.v = 0;
      });
    }
  }
</script>

<label for="file-upload">Upload PNG</label>
<input type="file" id="file-upload" accept="image/png" {onchange} />

<style lang="scss">
  input[type="file"] {
    display: none;
  }

  label {
    align-items: center;
    color: black;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: ButtonFace;
    }
  }
</style>
