<script lang="ts">
  import GameSettings from "$lib/components/options/GameSettings.svelte";
  import ExportPNG from "$lib/components/options/ExportPNG.svelte";
  import ImportPNG from "$lib/components/options/ImportPNG.svelte";
  import Palette from "$lib/components/options/Palette.svelte";
  import Corners from "$lib/components/options/Corners.svelte";
  import Border from "$lib/components/options/Border.svelte";
  import Reveal from "$lib/components/options/Reveal.svelte";
  import Scale from "$lib/components/options/Scale.svelte";
  import { sidebarOn, isGame } from "$lib/refs.svelte";

  const onkeydown = (e: KeyboardEvent) => { if (e.key === "o") sidebarOn.v = !sidebarOn.v; };
</script>

<svelte:window {onkeydown} />

<!-- Note: doing an if and using transition:fly breaks dragscroll for some reason. -->
<div style:right={ sidebarOn.v ? "0" : "-200px" }>
  {#if !isGame.v}
    <ImportPNG />
    <ExportPNG />
  {/if}
  <GameSettings />
  <Palette />
  <Border />
  <Corners />
  <Scale />
  {#if isGame.v}
    <Reveal />
  {/if}
</div>

<style>
  div {
    background-color: white;
    bottom: 0;
    flex-direction: column;
    position: fixed;
    display: flex;
    top: 0;
    width: 200px;
    transition: right .5s;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    overflow: hidden;
  }
</style>
