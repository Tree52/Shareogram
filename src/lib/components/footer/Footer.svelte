<script lang="ts">
  import UndoRedo from "$lib/components/footer/UndoRedo.svelte";
  import Picker from "$lib/components/footer/Picker.svelte";
  import { sidebarOn } from "$lib/refs.svelte";
</script>

<footer class="flex justify-center">
  <div class="flex overflow-hidden rounded-t-lg">
    <button onclick={() => { sidebarOn.v = !sidebarOn.v; }}>Options</button>
    <div>
      <Picker />
      <UndoRedo />
    </div>
  </div>
</footer>
