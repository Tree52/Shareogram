<script lang="ts">
  import { colors, colorsIndexer } from "$lib/refs.svelte";

  function onkeydown(e: KeyboardEvent): void {
    if (/^[1-9]$/.test(e.key)) colorsIndexer.v = Number(e.key) > colors.v.length ? colorsIndexer.v : Number(e.key) - 1;
  }
</script>

<!-- eslint-disable-next-line -->
{#each colors.v as unused, i}
  <div>
    <!-- prettier-ignore -->
    <button
      style:background-color={colors.v[i]}
      style:color={i === 0 ? colors.v[1] : colors.v[0]}
      style:border={i === colorsIndexer.v ? (i === 0 ? `solid 2px ${colors.v[1]}` : `solid 2px ${colors.v[0]}`) : "0"}
      onclick={(): void => { colorsIndexer.v = i; }}
    >{i < 10 ? i + 1 : ""}</button>
  </div>
{/each}

<svelte:window {onkeydown} />

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
