<script lang="ts">
  import { editorHeight, editorWidth, isGame, colors } from "$lib/refs.svelte";
  import { newEditor } from "$lib/shared.svelte";

  const sanitizeNumberInput = (n: number) => Math.max(0, Number(String(n).replace(/[^0-9]/g, "")));
</script>

<div class="flex justify-center">
  {#if isGame.v}
    <button class="p-2" onclick={() => { isGame.v = false; newEditor(); }}>New Editor</button>
  {:else}
    <input
      oninput={() => { editorWidth.v = sanitizeNumberInput(editorWidth.v); newEditor(); }}
      class="min-w-0 flex-1 text-center bg-inherit"
      bind:value={editorWidth.v}
      type="text"
    />
    <input
      oninput={() => { editorHeight.v = sanitizeNumberInput(editorHeight.v); newEditor(); }}
      class="min-w-0 flex-1 text-center bg-inherit"
      bind:value={editorHeight.v}
      type="text"
    />
  {/if}
</div>
