<script lang="ts">
  import { type PinchCustomEvent, pinch } from "svelte-gestures";
  import { tileWidth } from "$lib/refs.svelte";

  const MAX_TILE_WIDTH = 100;
  const MIN_TILE_WIDTH = 10;

  let scale = $state(1);

  const onwheel = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0 && tileWidth.v < MAX_TILE_WIDTH) tileWidth.v += 5;
    else if (e.deltaY > 0 && tileWidth.v > MIN_TILE_WIDTH) tileWidth.v -= 5;
  };

  const onpinch = (e: PinchCustomEvent) => {
    const _scale = scale;
    scale = e.detail.scale;
    const isZoomOut = scale < _scale;
    if (isZoomOut && tileWidth.v > MIN_TILE_WIDTH) tileWidth.v--;
    else if (!isZoomOut && tileWidth.v < MAX_TILE_WIDTH) tileWidth.v++;
  };
</script>

<input bind:value={tileWidth.v} max={MAX_TILE_WIDTH} min={MIN_TILE_WIDTH} type="range" />

<!-- Can't just do {onwheel} because e.preventDefault shows a warning:
Ignoring ‘preventDefault()’ call on event of type ‘wheel’ from a listener registered as ‘passive’. -->
<svelte:window on:wheel|nonpassive={onwheel} />

<svelte:body use:pinch {onpinch}></svelte:body>

<style>
  input[type="range"] {
    appearance: none; /* Chrome */
    direction: rtl;
    height: 100%;
    writing-mode: vertical-lr;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      background-color: black;
      border: 2px solid grey;
      border-radius: 8px;
      cursor: pointer;
      height: 24px;
      width: 190px;
    }

    &::-moz-range-thumb {
      background-color: black;
      cursor: pointer;
      width: 95%;
    }
  }
</style>
