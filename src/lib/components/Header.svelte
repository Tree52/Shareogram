<script lang="ts">
  import {
    tiles,
    tilesHistory,
    tilesHistoryIndexer,
    borderOn,
    colors,
    colorsIndexer,
    isGame,
    bgColor,
    isChangeHashAllowed,
    editorWidth,
    editorHeight,
  } from "$lib/refs.svelte";
  import { checkTileColors, isMulticolor } from "$lib/main";
  import Palette from "$lib/components/Palette.svelte";
  import { getRandomHexColor } from "$lib/utils";

  function browseHistory(): void {
    tiles.v = $state.snapshot(tilesHistory.v[tilesHistoryIndexer.v]);
    checkTileColors();
  }

  function undo(): void {
    if (tilesHistoryIndexer.v !== 0) {
      tilesHistoryIndexer.v--;
      browseHistory();
    }
  }

  function redo(): void {
    if (tilesHistoryIndexer.v !== tilesHistory.v.length - 1) {
      tilesHistoryIndexer.v++;
      browseHistory();
    }
  }

  function handleKeydown(e: KeyboardEvent): void {
    if (e.ctrlKey && e.key === "z") undo();
    else if (e.ctrlKey && e.key === "y") redo();
    else if (/^[1-9]$/.test(e.key)) colorsIndexer.v = Number(e.key) > colors.v.length ? colorsIndexer.v : Number(e.key) - 1;
  }

  // prettier-ignore
  function handleOnClick(): void { isChangeHashAllowed.v = false; }
  // prettier-ignore
  function handleOnChange(): void { isChangeHashAllowed.reset(); }

  $effect(() => {
    document.body.style.backgroundColor = bgColor.v;
    document.body.style.color = colors.v[0];
  });
</script>

<header>
  <div>
    <div class="left">
      <button id="undo" onclick={undo}>Undo</button>
      Ctrl + z
    </div>
    <div class="left">
      <button id="undo" onclick={redo}>Redo</button>
      Ctrl + y
    </div>
  </div>
  <div>
    <div style:width="40rem" style:display="flex" style:flex-wrap="wrap" style:justify-content="right">
      <input type="color" onclick={handleOnClick} onchange={handleOnChange} bind:value={bgColor.v} />
      <!-- eslint-disable-next-line -->
      {#each colors.v as unused, i}
        <input type="color" onclick={handleOnClick} onchange={handleOnChange} bind:value={colors.v[i]} />
      {/each}
    </div>

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

    {#if editorWidth.v > 5 || editorHeight.v > 5}
      <input type="checkbox" bind:checked={borderOn.v} />
    {/if}
  </div>
</header>

<div class="middle">
  <Palette />
</div>

<svelte:window onkeydown={handleKeydown} />

<style lang="scss">
  @import "$lib/../mixins.scss";

  header {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;

    div {
      display: flex;

      * {
        margin: 0.1rem;
      }
    }

    .left {
      align-items: center;
      flex-direction: column;
    }

    input[type="color"] {
      padding: 1px;
    }
  }

  .middle {
    display: flex;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
</style>
