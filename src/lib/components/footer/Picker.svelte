<script lang="ts">
  import { isMoveSelected, colorsIndexer, isXSelected, colors, isGame } from "$lib/refs.svelte";

  const onkeydown = (e: KeyboardEvent) => {
    if (/[1-9]/.test(e.key) && Number(e.key) <= colors.v.length) handleClickColor(Number(e.key) - 1);
    else if (e.key === "m") handleClickMove();
    else if (e.key === "x" && isGame.v) handleClickX();
  };

  const handleClickColor = (colorIndex: number) => {
    isXSelected.v = false;
    isMoveSelected.v = false;
    colorsIndexer.v = colorIndex;
  };

  const handleClickX = () => {
    isXSelected.v = true;
    isMoveSelected.v = false;
    colorsIndexer.v = -1;
  };

  const handleClickMove = () => {
    isXSelected.v = false;
    isMoveSelected.v = true;
    colorsIndexer.v = -1;
  };
</script>

<div>
  {#each colors.v as _, i}
    <button
      style:border={`solid 2px ${i === colorsIndexer.v ? (i === 0 ? colors.v[1] : colors.v[0]) : colors.v[i]}`}
      style:color={i === 0 ? colors.v[1] : colors.v[0]}
      onclick={() => { handleClickColor(i); }}
      style:background-color={colors.v[i]}
    >{i + 1}</button>
  {/each}
  {#if isGame.v}
    <button
      style:border={`solid 2px ${isXSelected.v ? colors.v[1] : "ButtonFace"}`}
      onclick={handleClickX}
    >X</button>
  {/if}
  <button
    style:border={`solid 2px ${isMoveSelected.v ? colors.v[1] : "ButtonFace"}`}
    onclick={handleClickMove}
    aria-label="Move"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21v-9m0 9l3-3m-3 3l-3-3m3-6V3m0 9H3m9 0h9m-9-9L9 6m3-3l3 3M3 12l3 3m-3-3l3-3m15 3l-3-3m3 3l-3 3"/></svg>
  </button>
</div>

<svelte:window {onkeydown} />

<style>
  div {
    display: flex;
    flex-wrap: wrap;

    button {
      aspect-ratio: 1/1;
      flex: 1;
      height: 2rem;
      padding: 0;
    }
  }
</style>
