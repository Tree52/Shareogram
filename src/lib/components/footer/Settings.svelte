<script lang="ts">
  import {
    borderOn,
    colors,
    colorsIndexer,
    isGame,
    bgColor,
    isChangeHashAllowed,
    editorWidth,
    editorHeight,
    tileWidth,
  } from "$lib/refs.svelte";
  import { checkTileColors, isMulticolor } from "$lib/main.svelte";
  import { getRandomHexColor } from "$lib/utils";

  const MAX_TILE_WIDTH = 100;
  const MIN_TILE_WIDTH = 10;

  // prettier-ignore
  function onclick(): void { isChangeHashAllowed.v = false; }
  // prettier-ignore
  function onchange(): void { isChangeHashAllowed.reset(); }

  function onwheel(e: WheelEvent) {
    e.preventDefault();
    if (e.deltaY < 0 && tileWidth.v < MAX_TILE_WIDTH) tileWidth.v += 5;
    else if (e.deltaY > 0 && tileWidth.v > MIN_TILE_WIDTH) tileWidth.v -= 5;
  }

  $effect(() => {
    document.body.style.backgroundColor = bgColor.v;
    document.body.style.color = colors.v[0];
  });
</script>

<div>
  <div>
    <input type="color" {onclick} {onchange} bind:value={bgColor.v} />
    <!-- eslint-disable-next-line -->
    {#each colors.v as unused, i}
      <input type="color" {onclick} {onchange} bind:value={colors.v[i]} />
    {/each}
  </div>

  {#if !isGame.v}
    {#if isMulticolor()}
      <!-- prettier-ignore -->
      <button onclick={(): void => { colors.v.pop(); if(colorsIndexer.v > colors.v.length - 1) colorsIndexer.v--; checkTileColors() }}>-</button>
    {/if}
    {#if colors.v.length < 16}
      <!-- prettier-ignore -->
      <button onclick={(): void => { colors.v.push(getRandomHexColor()); }}>+</button>
    {/if}
  {/if}

  <input
    type="range"
    min="0"
    max={editorWidth.v > 5 || editorHeight.v > 5 ? 2 : 1}
    style:accent-color={colors.v[1]}
    bind:value={borderOn.v}
  />
  <input type="range" min={MIN_TILE_WIDTH} max={MAX_TILE_WIDTH} style:accent-color={colors.v[1]} bind:value={tileWidth.v} />
</div>

<svelte:window on:wheel|nonpassive={onwheel} />

<style lang="scss">
  div {
    display: flex;

    div {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: right;
      margin-right: 4px;
      max-width: 36rem;
    }

    input[type="range"] {
      direction: rtl;
      height: 60px;
      writing-mode: vertical-lr;
    }
  }
</style>
