<script lang="ts">
  import { tileWidth, colors } from "$lib/refs.svelte";

  const MAX_TILE_WIDTH = 100;
  const MIN_TILE_WIDTH = 10;

  const onwheel = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0 && tileWidth.v < MAX_TILE_WIDTH) tileWidth.v += 5;
    else if (e.deltaY > 0 && tileWidth.v > MIN_TILE_WIDTH) tileWidth.v -= 5;
  };
</script>

<input
  class="border-y-2 bg-inherit"
  style:border-color={colors.v[0]}
  style:--thumb-color={colors.v[0]}
  bind:value={tileWidth.v}
  max={MAX_TILE_WIDTH}
  min={MIN_TILE_WIDTH}
  type="range"
/>

<svelte:window on:wheel|nonpassive={onwheel} />

<style>
  input[type="range"] {
    appearance: none; /* Chrome */
    direction: rtl;
    height: 100%;
    writing-mode: vertical-lr;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      background-color: var(--thumb-color);
      border: 2px solid grey;
      border-radius: 8px;
      cursor: pointer;
      height: 24px;
      width: 190px;
    }

    &::-moz-range-thumb {
      background-color: var(--thumb-color);
      cursor: pointer;
      width: 95%;
    }
  }
</style>
