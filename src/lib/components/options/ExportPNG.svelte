<script lang="ts">
  import { colors, tiles } from "$lib/refs.svelte";
  import { hexToRGB } from "$lib/shared.svelte";

  const generatePNG = (array: number[][], colorMap: string[], callback: (dataUrl: string) => void): void => {
    const width = array[0].length;
    const height = array.length;

    // Create an off-screen canvas
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      const imageData = ctx.createImageData(width, height);

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const hexColor = colorMap[array[y][x]];
          const rgb = hexToRGB(hexColor);
          if (rgb) {
            const [r, g, b] = rgb;
            const index = (y * width + x) * 4;
            imageData.data[index] = r;
            imageData.data[index + 1] = g;
            imageData.data[index + 2] = b;
            imageData.data[index + 3] = 255; // Full opacity
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      // Export as a data URL (base64)
      const dataUrl = canvas.toDataURL("image/png");
      callback(dataUrl);
    }
  };

  const onclick = () => {
    generatePNG(tiles.colorIndices, colors.v, (dataUrl) => {
      const link = document.createElement("a");
      link.download = "shareogram.png";
      link.href = dataUrl;
      link.click();
    });
  };
</script>

<button {onclick}>Export as PNG</button>
