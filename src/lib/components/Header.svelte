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
      <span>Ctrl + z</span>
    </div>
    <div class="left">
      <button id="undo" onclick={redo}>Redo</button>
      <span>Ctrl + y</span>
    </div>
  </div>
  <div class="middle">
    <!-- eslint-disable-next-line -->
    {#each colors.v as unused, i}
      <!-- prettier-ignore -->
      <div>
          <button
            style:background-color={colors.v[i]}
            style:border={i === colorsIndexer.v ? (i === 0 ? `solid 2px ${colors.v[1]}` : `solid 2px ${colors.v[0]}`) : "0"}
            onclick={(): void => { colorsIndexer.v = i; }}
          ></button>
          {#if i < 9}
          <span>{i + 1}</span>
          {/if}
        </div>
    {/each}
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

    .middle {
      left: 50%;
      position: absolute;
      transform: translateX(-50%);

      div {
        align-items: center;
        flex-direction: column;
      }

      button {
        height: 2rem;
        width: 2rem;
      }
    }

    input[type="color"] {
      padding: 1px;
    }
  }
</style>
