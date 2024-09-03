<script lang="ts">
  import { editorHeight, editorWidth, borderOn, colors } from "$lib/refs.svelte";
</script>

<div class="flex justify-between p-5">
  <input bind:group={borderOn.v} class="scale-[2]" name="border" type="radio" value={0} style:accent-color={colors.v[0]} />
  <input bind:group={borderOn.v} class="scale-[2]" name="border" type="radio" value={1} style:accent-color={colors.v[0]} />
  {#if editorWidth.v > 5 || editorHeight.v > 5}
    <input bind:group={borderOn.v} class="scale-[2]" name="border" type="radio" value={2} style:accent-color={colors.v[0]} />
  {/if}
</div>
