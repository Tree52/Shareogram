<script lang="ts">
  import { colorsIndexer, editorHeight, tilesHistory, editorWidth, colors, tiles } from "$lib/refs.svelte";
  import { initializeTiles, hexToRGB } from "$lib/main.svelte";

  let tolerance: number = $state(10);
  let files: undefined | FileList = $state();

  function colorsAreSimilar(color1: [number, number, number], color2: [number, number, number], tolerance: number): boolean {
    const [r1, g1, b1] = color1;
    const [r2, g2, b2] = color2;

    const distance = Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);

    return distance <= tolerance;
  }

  function rgbToHex(r: number, g: number, b: number): string {
    return "#" + [r, g, b].map((x) => Math.round(x).toString(16).padStart(2, "0")).join("");
  }

  function addColorToMap(hexColor: string, colorMap: string[], tolerance: number): number {
    const color = hexToRGB(hexColor);
    for (let i = 0; i < colorMap.length; i++) {
      const existingColor = hexToRGB(colorMap[i]);
      if (colorsAreSimilar(color, existingColor, tolerance)) return i;
    }
    colorMap.push(hexColor);
    return colorMap.length - 1;
  }

  function importPNG(file: File, tolerance: number, callback: (array: number[][], colorMap: string[]) => void): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          const imageData = ctx.getImageData(0, 0, img.width, img.height).data;
          const colorMap: string[] = [];
          const array: number[][] = [];

          for (let y = 0; y < img.height; y++) {
            const row: number[] = [];
            for (let x = 0; x < img.width; x++) {
              const index = (y * img.width + x) * 4;
              const r = imageData[index];
              const g = imageData[index + 1];
              const b = imageData[index + 2];
              const hexColor = rgbToHex(r, g, b);

              const colorIndex = addColorToMap(hexColor, colorMap, tolerance);
              row.push(colorIndex);
            }
            array.push(row);
          }

          callback(array, colorMap);
        }
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  $effect(() => {
    if (files) {
      importPNG(files[0], tolerance, (array, colorMap) => {
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
  <input bind:value={tolerance} type="range" max="442" min="10" />
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
