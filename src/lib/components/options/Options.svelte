<script lang="ts">
  import GameSettings from "$lib/components/options/GameSettings.svelte";
  import ExportPNG from "$lib/components/options/ExportPNG.svelte";
  import ImportPNG from "$lib/components/options/ImportPNG.svelte";
  import Palette from "$lib/components/options/Palette.svelte";
  import Border from "$lib/components/options/Border.svelte";
  import Scale from "$lib/components/options/Scale.svelte";
  import { sidebarOn, isGame } from "$lib/refs.svelte";
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
  <button onclick={() => { sidebarOn.v = false; }}>Close Options</button>
</div>

<style>
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
