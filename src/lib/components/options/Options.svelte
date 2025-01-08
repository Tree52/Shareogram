<script lang="ts">
  import GameSettings from "$lib/components/options/GameSettings.svelte";
  import ExportPNG from "$lib/components/options/ExportPNG.svelte";
  import ImportPNG from "$lib/components/options/ImportPNG.svelte";
  import Palette from "$lib/components/options/Palette.svelte";
  import Border from "$lib/components/options/Border.svelte";
  import Reveal from "$lib/components/options/Reveal.svelte";
  import Sticky from "$lib/components/options/Sticky.svelte";
  import Scale from "$lib/components/options/Scale.svelte";
  import { sidebarOn, isGame } from "$lib/refs.svelte";

  const onkeydown = (e: KeyboardEvent) => { if (e.key === "o") sidebarOn.v = !sidebarOn.v; };
</script>

<svelte:window {onkeydown} />

<!-- Note: doing an if and using transition:fly breaks dragscroll for some reason. -->
<div
  style:right={ sidebarOn.v ? "0" : "-300px" }
  class="fixed bottom-0 top-0 z-50 flex w-40 max-w-[75%] flex-col overflow-hidden rounded-l-3xl bg-white"
>
  {#if !isGame.v}
    <ImportPNG />
    <ExportPNG />
  {/if}
  <GameSettings />
  <Palette />
  <Border />
  <Scale />
  {#if isGame.v}
    <Sticky />
    <Reveal />
  {/if}
</div>

<style>
  div {
    transition: right .5s;
  }
</style>
