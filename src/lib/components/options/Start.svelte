<script lang="ts">
  import { tiles, editorWidth, editorHeight, isGame, tilesSolution } from "$lib/refs.svelte";
  import { newEditor } from "$lib/main.svelte";
  import { colors } from "$lib/refs.svelte";

  const sanitizeNumberInput = (n: number): number => Math.max(0, Math.min(Number(String(n).replace(/[^0-9]/g, "")), 100));
</script>

<div>
  {#if !isGame.v}
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
  {#if isGame.v}
    <!-- prettier-ignore -->
    <button onclick={(): void => { isGame.reset(); newEditor(); }}>New Editor</button>
  {:else}
    <!-- prettier-ignore -->
    <button onclick={(): void => { isGame.v = true; tilesSolution.v = tiles.v; newEditor(); }}>Start Game</button>
  {/if}
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;

      input[type="text"] {
        flex: 1;
        min-width: 0;
        padding: 10px;
        text-align: center;
      }
    }

    button {
      height: 50px;
    }
  }
</style>
