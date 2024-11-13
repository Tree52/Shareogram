<script lang="ts">
  import UndoRedo from "$lib/components/footer/UndoRedo.svelte";
  import Picker from "$lib/components/footer/Picker.svelte";
  import { sidebarOn } from "$lib/refs.svelte";
</script>

<footer>
  <div style:border-top-right-radius=8px style:border-top-left-radius=8px style:overflow="hidden" style:display="flex">
    <button onclick={() => { sidebarOn.v = !sidebarOn.v; }}>Options</button>
    <div>
      <Picker />
      <UndoRedo />
    </div>
  </div>
</footer>

<style>
  footer {
    display: flex;
    justify-content: center;
  }
</style>
