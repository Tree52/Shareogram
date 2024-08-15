<script lang="ts">
  import { tiles, colors, editorWidth, editorHeight, tilesHistory, colorsIndexer, tolerance } from "$lib/refs.svelte";
  import { initializeTiles } from "$lib/main.svelte";
  import { importPNG } from "$lib/utils";

  let files: FileList | undefined = $state();

  $effect(() => {
    if (files) {
      importPNG(files[0], tolerance.v, (array, colorMap) => {
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
  });
</script>

<label for="file-upload">Upload PNG</label>
<input type="file" id="file-upload" accept="image/png" bind:files />
{#if files}
  <input type="range" bind:value={tolerance.v} min="10" max="442" />
{/if}

<style>
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
