<script lang="ts">
  import UndoRedo from "$lib/components/header/UndoRedo.svelte";
  import Settings from "$lib/components/header/Settings.svelte";
  import Palette from "$lib/components/header/Palette.svelte";
</script>

<header>
  <UndoRedo />
  <Settings />
</header>

<div class="middle">
  <Palette />
</div>

<style lang="scss">
  @import "$lib/../mixins.scss";

  header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  .middle {
    display: flex;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
</style>
