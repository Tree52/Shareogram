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
  {#each colors.v as unused, i}
    <!-- prettier-ignore -->
    <button
			style:background-color={colors.v[i]}
			style:color={i === 0 ? colors.v[1] : colors.v[0]}
			style:border={i === colorsIndexer.v ? (i === 0 ? `solid 2px ${colors.v[1]}` : `solid 2px ${colors.v[0]}`) : `solid 2px ${colors.v[i]}`}
			style:--max-h={colors.v.length > 4 ? "2rem" : "6rem"}
			onclick={(): void => { colorsIndexer.v = i; isXSelected.reset() }}
		>{i < 9 ? i + 1 : ""}</button>
  {/each}
  {#if isGame.v}
    <!-- prettier-ignore -->
    <button
      onclick={(): void => { isXSelected.v = true }}
      style:border={isXSelected.v ? "solid 2px black" : "solid 2px white"}
      style:--max-h={colors.v.length > 4 ? "2rem" : "6rem"}
    >X</button>
  {/if}
</div>

<svelte:window {onkeydown} />

<style lang="scss">
  div {
    flex-wrap: wrap;

    button {
      aspect-ratio: 1/1;
      max-height: var(--max-h);
      min-height: 2rem;
    }
  }
</style>
