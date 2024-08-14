<script lang="ts">
  import { isGame, sidebarOn } from "$lib/refs.svelte";
  import Palette from "$lib/components/options/Palette.svelte";
  import Border from "$lib/components/options/Border.svelte";
  import Scale from "$lib/components/options/Scale.svelte";
  import GameSettings from "$lib/components/options/GameSettings.svelte";
  import ImportPNG from "$lib/components/options/ImportPNG.svelte";
  import ExportPNG from "$lib/components/options/ExportPNG.svelte";
</script>

<div style:display={sidebarOn.v ? "flex" : "none"}>
  {#if !isGame.v}
    <ImportPNG />
    <ExportPNG />
  {/if}
  <GameSettings />
  <Palette />
  <Border />
  <Scale />
  <!-- prettier-ignore -->
  <button onclick={(): void => { sidebarOn.reset() }}>Close Options</button>
</div>

<style lang="scss">
  div {
    background-color: white;
    bottom: 0;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
    width: 200px;
  }
</style>
