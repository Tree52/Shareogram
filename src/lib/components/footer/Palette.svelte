<script lang="ts">
  import { colors, colorsIndexer } from "$lib/refs.svelte";

  function onkeydown(e: KeyboardEvent): void {
    if (/^[1-9]$/.test(e.key)) colorsIndexer.v = Number(e.key) > colors.v.length ? colorsIndexer.v : Number(e.key) - 1;
  }
</script>

<!-- eslint-disable-next-line -->
<div>
  {#each colors.v as unused, i}
    <!-- prettier-ignore -->
    <button
      style:background-color={colors.v[i]}
      style:color={i === 0 ? colors.v[1] : colors.v[0]}
      style:border={i === colorsIndexer.v ? (i === 0 ? `solid 2px ${colors.v[1]}` : `solid 2px ${colors.v[0]}`) : "0"}
      onclick={(): void => { colorsIndexer.v = i; }}
    >{i < 9 ? i + 1 : ""}</button>
  {/each}
</div>

<svelte:window {onkeydown} />

<style lang="scss">
  div {
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);

    button {
      aspect-ratio: 1/1;
      height: 3rem;
      vertical-align: top;
    }
  }
</style>
