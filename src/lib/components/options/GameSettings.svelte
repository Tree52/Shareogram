<script lang="ts">
  import { editorWidth, editorHeight, isGame } from "$lib/refs.svelte";
  import { newEditor } from "$lib/main.svelte";

  const sanitizeNumberInput = (n: number): number => Math.max(0, Number(String(n).replace(/[^0-9]/g, "")));
</script>

<div>
  {#if isGame.v}
    <!-- prettier-ignore -->
    <button onclick={(): void => { isGame.reset(); newEditor(); }}>New Editor</button>
  {:else}
    <div>
      <!-- prettier-ignore -->
      <input
        type="text"
        bind:value={editorWidth.v}
        oninput={(): void => { editorWidth.v = sanitizeNumberInput(editorWidth.v); newEditor(); }}
      />
      <!-- prettier-ignore -->
      <input
        type="text"  
        bind:value={editorHeight.v}
        oninput={(): void => { editorHeight.v = sanitizeNumberInput(editorHeight.v); newEditor(); }}
      />
    </div>
  {/if}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;

    div {
      flex-direction: row;

      input[type="text"] {
        flex: 1;
        min-width: 0;
        text-align: center;
      }
    }
  }
</style>
