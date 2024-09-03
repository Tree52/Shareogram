<script lang="ts">
  import { colorsIndexer, isXSelected, colors, isGame, bgColor } from "$lib/refs.svelte";

  const onkeydown = (e: KeyboardEvent) => {
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

<div class="flex flex-wrap">
  {#each colors.v as _, i}
    <button
      style:border={`solid 2px ${i === colorsIndexer.v ? (i === 0 ? colors.v[1] : colors.v[0]) : colors.v[i]}`}
      onclick={() => { colorsIndexer.v = i; isXSelected.v = false; }}
      style:max-height={(colors.v.length > 4 ? "2" : "6") + "rem"}
      style:color={i === 0 ? colors.v[1] : colors.v[0]}
      class="aspect-square min-h-8 flex-1"
      style:background-color={colors.v[i]}
    >{i + 1}</button>
  {/each}
  {#if isGame.v}
    <button
      style:border={`solid 2px ${isXSelected.v ? colors.v[1] : bgColor.v}`}
      onclick={() => { isXSelected.v = true; colorsIndexer.v = -1; }}
      style:max-height={(colors.v.length > 4 ? "2" : "6") + "rem"}
      class="aspect-square min-h-8 flex-1"
    >X</button>
  {/if}
</div>

<svelte:window {onkeydown} />
