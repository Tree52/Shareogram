<script lang="ts">
  import { type PinchCustomEvent, pinch } from "svelte-gestures";
  import { isMoveSelected, tableScale } from "$lib/refs.svelte";

  const MAX_SCALE = 3;
  const MIN_SCALE = 0.5;

  let scale = $state(1);

  const onwheel = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0 && tableScale.v < MAX_SCALE) tableScale.v += 0.05;
    else if (e.deltaY < 0 && tableScale.v > MIN_SCALE) tableScale.v -= 0.05;
  };

  const onpinch = (e: PinchCustomEvent) => {
    if (!isMoveSelected.v) return;
    const _scale = scale;
    scale = e.detail.scale;
    const isZoomOut = scale < _scale;
    if (isZoomOut && tableScale.v > MIN_SCALE) tableScale.v -= 0.025;
    else if (!isZoomOut && tableScale.v < MAX_SCALE) tableScale.v += 0.025;
  };
</script>

<input bind:value={tableScale.v} step=".025" max={MAX_SCALE} min={MIN_SCALE} type="range" />

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
