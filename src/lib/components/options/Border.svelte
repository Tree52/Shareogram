<script lang="ts">
  import { editorWidth, editorHeight, borderOn } from "$lib/refs.svelte";
</script>

<div>
  <input type="radio" name="border" value={0} bind:group={borderOn.v} />
  <input type="radio" name="border" value={1} bind:group={borderOn.v} />
  {#if editorWidth.v > 5 || editorHeight.v > 5}
    <input type="radio" name="border" value={2} bind:group={borderOn.v} />
  {/if}
</div>

<style lang="scss">
  div {
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-between;
    padding: 20px;

    input[type="radio"] {
      transform: scale(2);
    }
  }
</style>
