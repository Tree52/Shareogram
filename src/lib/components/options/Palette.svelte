<script lang="ts">
  import { isChangeHashAllowed, colorsIndexer, bgColor, colors, isGame } from "$lib/refs.svelte";
  import { checkTileColors } from "$lib/main.svelte";

  function getRandomHexColor(): string {
    const characters: string = "0123456789abcdef";
    let result: string = "#";
    for (let i: number = 0; i < 6; i++) {
      const randomIndex: number = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }

  const isMulticolor = (): boolean => colors.v.length > 2;
</script>

<div>
  <div>
    {#if !isGame.v}
      {#if isMulticolor()}
        <button
          onclick={(): void => {
            colors.v.pop();
            if (colorsIndexer.v > colors.v.length - 1) colorsIndexer.v--;
            checkTileColors();
          }}>-</button
        >
      {/if}
      <button
        onclick={(): void => {
          colors.v.push(getRandomHexColor());
        }}>+</button
      >
    {/if}
  </div>
  <div>
    <input
      onchange={(): void => {
        isChangeHashAllowed.v = true;
      }}
      onclick={(): void => {
        isChangeHashAllowed.v = false;
      }}
      bind:value={bgColor.v}
      type="color"
    />
    {#each colors.v as _, i}
      <input
        onchange={(): void => {
          isChangeHashAllowed.v = true;
        }}
        onclick={(): void => {
          isChangeHashAllowed.v = false;
        }}
        bind:value={colors.v[i]}
        type="color"
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
