<script lang="ts">
  import { isGame, win, sidebarOn } from "$lib/refs.svelte";
</script>

<header>
  <!-- prettier-ignore -->
  <button onclick={(): void => { sidebarOn.v = !sidebarOn.v; }}>Options</button>
  {#if isGame.v}
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
      height: 3rem;
      padding: 0 16px;
    }
  }

  span {
    font-size: 1.25rem;
    margin-left: 0.5rem;
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
