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
  import { checkTileColors, isMulticolor } from "$lib/main";
  import { getRandomHexColor } from "$lib/utils";

  // prettier-ignore
  function onclick(): void { isChangeHashAllowed.v = false; }
  // prettier-ignore
  function onchange(): void { isChangeHashAllowed.reset(); }

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

  {#if editorWidth.v > 5 || editorHeight.v > 5}
    <input type="checkbox" style:accent-color={colors.v[1]} bind:checked={borderOn.v} />
  {/if}

  <input type="range" min="10" max="100" style:accent-color={colors.v[1]} bind:value={tileWidth.v} />
</div>

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
