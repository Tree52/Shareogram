<script lang="ts">
  import { tileWidth } from "$lib/refs.svelte";

  const MAX_TILE_WIDTH = 100;
  const MIN_TILE_WIDTH = 10;

  function onwheel(e: WheelEvent) {
    e.preventDefault();
    if (e.deltaY < 0 && tileWidth.v < MAX_TILE_WIDTH) tileWidth.v += 5;
    else if (e.deltaY > 0 && tileWidth.v > MIN_TILE_WIDTH) tileWidth.v -= 5;
  }
</script>

<input type="range" min={MIN_TILE_WIDTH} max={MAX_TILE_WIDTH} bind:value={tileWidth.v} />

<svelte:window on:wheel|nonpassive={onwheel} />
