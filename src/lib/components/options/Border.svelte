<script lang="ts">
  import { editorHeight, editorWidth, borderOn } from "$lib/refs.svelte";
</script>

<div class="flex justify-between p-5 accent-black border-b-black border-b-2">
  <input bind:group={borderOn.v} name="border" type="radio" value={0} />
  <input bind:group={borderOn.v} name="border" type="radio" value={1} />
  {#if editorWidth.v > 5 || editorHeight.v > 5}
    <input bind:group={borderOn.v} name="border" type="radio" value={2} />
  {/if}
</div>

<style>
  div {
    input[type="radio"] {
      transform: scale(2);
    }
  }
</style>
