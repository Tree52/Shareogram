<script lang="ts">
  import { editorHeight, editorWidth, borderOn } from "$lib/refs.svelte";
</script>

<div>
  <input bind:group={borderOn.v} name="border" type="radio" value={0} />
  <input bind:group={borderOn.v} name="border" type="radio" value={1} />
  {#if editorWidth.v > 5 || editorHeight.v > 5}
    <input bind:group={borderOn.v} name="border" type="radio" value={2} />
  {/if}
</div>

<style>
  div {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    accent-color: black;

    input[type="radio"] {
      transform: scale(2);
    }
  }
</style>
