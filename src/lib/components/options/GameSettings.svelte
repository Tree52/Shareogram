<script lang="ts">
  import { editorHeight, editorWidth, isGame } from "$lib/refs.svelte";
  import { newEditor } from "$lib/shared.svelte";

  const sanitizeNumberInput = (n: number) => Math.max(0, Number(String(n).replace(/[^0-9]/g, "")));
</script>

<div>
  {#if isGame.v}
    <button onclick={() => { isGame.v = false; newEditor(); }}>New Editor</button>
  {:else}
    <div>
      <input
        oninput={() => { editorWidth.v = sanitizeNumberInput(editorWidth.v); newEditor(); }}
        bind:value={editorWidth.v}
        type="text"
      />
      <input
        oninput={() => { editorHeight.v = sanitizeNumberInput(editorHeight.v); newEditor(); }}
        bind:value={editorHeight.v}
        type="text"
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
