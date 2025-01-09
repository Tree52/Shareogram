<script lang="ts">
  import { editorHeight, editorWidth, isGame, win } from "$lib/refs.svelte";
  import { newEditor } from "$lib/shared.svelte";

  const sanitizeNumberInput = (n: number) => Math.max(0, Number(String(n).replace(/[^0-9]/g, "")));
</script>

{#if isGame.v}
  <button onclick={() => { win.v = false; isGame.v = false; newEditor(); }}>New Editor</button>
{:else}
  <div class="flex">
    <input
      oninput={() => { editorWidth.v = sanitizeNumberInput(editorWidth.v); newEditor(); }}
      class="min-w-0 text-center"
      bind:value={editorWidth.v}
      type="text"
    />
    <input
      oninput={() => { editorHeight.v = sanitizeNumberInput(editorHeight.v); newEditor(); }}
      class="min-w-0 text-center"
      bind:value={editorHeight.v}
      type="text"
    />
  </div>
{/if}
