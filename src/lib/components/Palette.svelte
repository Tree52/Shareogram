<script lang="ts">
  import { colors, colorsIndexer } from "$lib/refs.svelte";
</script>

<!-- eslint-disable-next-line -->
{#each colors.v as unused, i}
  <div>
    <!-- prettier-ignore -->
    <button
			style:background-color={colors.v[i]}
			style:border={i === colorsIndexer.v ? (i === 0 ? `solid 2px ${colors.v[1]}` : `solid 2px ${colors.v[0]}`) : "0"}
			onclick={(): void => { colorsIndexer.v = i; }}
		></button>
    {#if i < 9}
      {i + 1}
    {/if}
  </div>
{/each}

<style lang="scss">
  div {
    align-items: center;
    display: flex;
    flex-direction: column;

    button {
      aspect-ratio: 1/1;
      height: 3rem;
    }
  }
</style>
