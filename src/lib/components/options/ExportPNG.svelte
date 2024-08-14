<script lang="ts">
  import { tiles, colors } from "$lib/refs.svelte";
  import { generatePNG } from "$lib/utils";

  function onclick() {
    generatePNG(tiles.colorIndices, colors.v, (dataUrl) => {
      const link = document.createElement("a");
      link.download = "shareogram.png";
      link.href = dataUrl;
      link.click();
    });
  }
</script>

<button {onclick}>Export as PNG</button>
