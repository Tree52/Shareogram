<script lang="ts">
  import { tiles, isGame, tilesSolution, win, sidebarOn } from "$lib/refs.svelte";
  import { newEditor } from "$lib/main.svelte";
</script>

<header>
  <button
    onclick={(): void => {
      sidebarOn.v = !sidebarOn.v;
    }}
  >
    sidebar
  </button>
  {#if !isGame.v}
    <!-- prettier-ignore -->
    <button onclick={(): void => { isGame.v = true; tilesSolution.v = tiles.v; newEditor(); }}>Start Game</button>
  {:else}
    <span>{win.v ? "You win" : "Keep trying"}</span>
  {/if}
</header>

<style lang="scss">
  header {
    align-items: center;
    display: flex;
    justify-content: center;

    button,
    input[type="text"] {
      height: 2rem;
      padding: 0 10px;
    }
  }

  span {
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }

  input[type="text"] {
    padding: 0;
    text-align: center;
    width: 2rem;

    &:focus {
      outline: none;
    }
  }
</style>
