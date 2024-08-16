<script lang="ts">
  import { colorsIndexer, editorHeight, tilesHistory, editorWidth, tolerance, colors, tiles } from "$lib/refs.svelte";
  import { initializeTiles } from "$lib/main.svelte";
  import { importPNG } from "$lib/utils";

  let files: undefined | FileList = $state();

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
<input accept="image/png" id="file-upload" type="file" bind:files />
{#if files}
  <input bind:value={tolerance.v} type="range" max="442" min="10" />
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
