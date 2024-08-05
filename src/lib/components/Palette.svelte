<script lang="ts">
  import { colors, colorsIndexer, isChangeHashAllowed, isGame, bgColor } from "$lib/refs.svelte";
  import { checkTileColors, isMulticolor } from "$lib/main.svelte";
  import { getRandomHexColor } from "$lib/utils";
</script>

<div>
  <div>
    <div>
       <!-- prettier-ignore -->
       <input
         type="color"
         onclick={(): void => { isChangeHashAllowed.v = false; }}
         onchange={(): void => { isChangeHashAllowed.reset(); }}
         bind:value={bgColor.v}
       />
     </div>
    <!-- eslint-disable-next-line -->
    {#each colors.v as unused, i}
      <div>
        <!-- prettier-ignore -->
        <input
          type="color"
          onclick={(): void => { isChangeHashAllowed.v = false }}
          onchange={(): void => { isChangeHashAllowed.reset(); }}
          bind:value={colors.v[i]}
        />
      </div>
    {/each}
  </div>
  <div>
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
  </div>
</div>

<style lang="scss">
  div {
    div {
      display: flex;

      button {
        flex: 1;
      }

      div {
        flex-direction: column;
        flex-wrap: wrap;

        input[type="color"],
        button {
          height: 1.5rem;
          width: 3rem;
        }

        button {
          height: 2rem;
        }
      }
    }
  }
</style>
