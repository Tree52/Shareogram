<script lang="ts">
  import { editorWidth, editorHeight, borderOn } from "$lib/refs.svelte";
</script>

<div>
  <div style:justify-content="center">Tile Spacing:</div>
  <div style:justify-content="space-between">
    <input type="radio" id="off" name="border" value={0} bind:group={borderOn.v} />
    <input type="radio" id="css" name="border" value={1} bind:group={borderOn.v} />
    {#if editorWidth.v > 5 || editorHeight.v > 5}
      <input type="radio" id="javascript" name="border" value={2} bind:group={borderOn.v} />
    {/if}
  </div>
</div>

<style lang="scss">
  div {
    div {
      align-items: center;
      color: black;
      display: flex;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.25rem;
      padding: 10px 20px;
    }

    input[type="radio"] {
      transform: scale(2);
    }
  }
</style>
