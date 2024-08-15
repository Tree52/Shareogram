<script lang="ts">
  import { colorsIndexer, colors, isXSelected, isGame } from "$lib/refs.svelte";

  function onkeydown(e: KeyboardEvent): void {
    if (/^[1-9]$/.test(e.key) && Number(e.key) <= colors.v.length) {
      isXSelected.reset();
      colorsIndexer.v = Number(e.key) - 1;
    } else if (e.key === "x" && isGame.v) {
      isXSelected.v = true;
      colorsIndexer.v = -1;
    }
  }
</script>

<div>
  {#each colors.v as _, i}
    <!-- prettier-ignore -->
    <button
			style:background-color={colors.v[i]}
			style:color={i === 0 ? colors.v[1] : colors.v[0]}
			style:border={i === colorsIndexer.v ? (i === 0 ? `solid 2px ${colors.v[1]}` : `solid 2px ${colors.v[0]}`) : `solid 2px ${colors.v[i]}`}
			style:--max-h={colors.v.length > 4 ? "2rem" : "6rem"}
			onclick={(): void => { colorsIndexer.v = i; isXSelected.reset() }}
		>{i + 1}</button>
  {/each}
  {#if isGame.v}
    <!-- prettier-ignore -->
    <button
      onclick={(): void => { isXSelected.v = true; colorsIndexer.v = -1 }}
      style:border={isXSelected.v ? `solid 2px ${colors.v[1]}` : "solid 2px ButtonFace"}
      style:--max-h={colors.v.length > 4 ? "2rem" : "6rem"}
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
