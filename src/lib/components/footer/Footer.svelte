<script lang="ts">
  import UndoRedo from "$lib/components/footer/UndoRedo.svelte";
  import Picker from "$lib/components/footer/Picker.svelte";
</script>

<footer>
  <div>
    <Picker />
    <UndoRedo />
  </div>
</footer>

<style>
  footer {
    display: flex;
    justify-content: center;
  }
</style>
