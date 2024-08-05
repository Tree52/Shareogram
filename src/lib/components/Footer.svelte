<script lang="ts">
  import UndoRedo from "$lib/components/UndoRedo.svelte";
  import Picker from "$lib/components/Picker.svelte";
</script>

<footer>
  <div>
    <Picker />
    <UndoRedo />
  </div>
</footer>

<style lang="scss">
  footer {
    display: flex;
    justify-content: center;
  }

  footer:global {
    div {
      div {
        display: flex;

        button {
          flex: 1;
        }
      }
    }
  }
</style>
