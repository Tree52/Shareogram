<script lang="ts">
  import UndoRedo from "$lib/components/footer/UndoRedo.svelte";
  import Settings from "$lib/components/footer/Settings.svelte";
  import Palette from "$lib/components/footer/Palette.svelte";
</script>

<footer>
  <UndoRedo />
  <Settings />
</footer>

<Palette />

<style lang="scss">
  footer {
    display: flex;
    justify-content: space-between;
  }
</style>
