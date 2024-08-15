<script lang="ts">
  import { colors, colorsIndexer, isChangeHashAllowed, isGame, bgColor } from "$lib/refs.svelte";
  import { checkTileColors, isMulticolor } from "$lib/main.svelte";
  import { getRandomHexColor } from "$lib/utils";
</script>

<div>
  <div>
    {#if !isGame.v}
      {#if isMulticolor()}
        <!-- prettier-ignore -->
        <button onclick={(): void => { colors.v.pop(); if(colorsIndexer.v > colors.v.length - 1) colorsIndexer.v--; checkTileColors() }}>-</button>
      {/if}
      <!-- prettier-ignore -->
      <button onclick={(): void => { colors.v.push(getRandomHexColor()); }}>+</button>
    {/if}
  </div>
  <div>
    <!-- prettier-ignore -->
    <input
      type="color"
      onclick={(): void => { isChangeHashAllowed.v = false; }}
      onchange={(): void => { isChangeHashAllowed.reset(); }}
      bind:value={bgColor.v}
    />
    {#each colors.v as _, i}
      <!-- prettier-ignore -->
      <input
        type="color"
        onclick={(): void => { isChangeHashAllowed.v = false }}
        onchange={(): void => { isChangeHashAllowed.reset(); }}
        bind:value={colors.v[i]}
      />
    {/each}
  </div>
</div>

<style>
  div {
    div {
      display: flex;
      flex-wrap: wrap;

      button,
      input[type="color"] {
        flex: 1;
      }

      input[type="color"] {
        height: 2rem;
        min-width: 3rem;
      }
    }
  }
</style>
