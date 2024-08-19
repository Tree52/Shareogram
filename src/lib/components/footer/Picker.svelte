<script lang="ts">
  import { colorsIndexer, isXSelected, colors, isGame } from "$lib/refs.svelte";

  const onkeydown = (e: KeyboardEvent): void => {
    if (/[1-9]/.test(e.key) && Number(e.key) <= colors.v.length) {
      isXSelected.v = false;
      colorsIndexer.v = Number(e.key) - 1;
    }
    else if (e.key === "x" && isGame.v) {
      isXSelected.v = true;
      colorsIndexer.v = -1;
    }
  };
</script>

<div>
  {#each colors.v as _, i}
    <button
      style:border={`solid 2px ${i === colorsIndexer.v ? (i === 0 ? colors.v[1] : colors.v[0]) : colors.v[i]}`}
      onclick={(): void => { colorsIndexer.v = i; isXSelected.v = false; }}
      style:--max-h={(colors.v.length > 4 ? "2" : "6") + "rem"}
      style:color={i === 0 ? colors.v[1] : colors.v[0]}
      style:background-color={colors.v[i]}
    >{i + 1}</button>
  {/each}
  {#if isGame.v}
    <button
      style:border={`solid 2px ${isXSelected.v ? colors.v[1] : "ButtonFace"}`}
      onclick={(): void => { isXSelected.v = true; colorsIndexer.v = -1; }}
      style:--max-h={(colors.v.length > 4 ? "2" : "6") + "rem"}
    >X</button>
  {/if}
</div>

<svelte:window {onkeydown} />

<style>
  div {
    display: flex;
    flex-wrap: wrap;

    button {
      aspect-ratio: 1/1;
      flex: 1;
      max-height: var(--max-h);
      min-height: 2rem;
      padding: 0;
    }
  }
</style>
