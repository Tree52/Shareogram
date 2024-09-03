<script lang="ts">
  import GameSettings from "$lib/components/options/GameSettings.svelte";
  import ExportPNG from "$lib/components/options/ExportPNG.svelte";
  import ImportPNG from "$lib/components/options/ImportPNG.svelte";
  import Palette from "$lib/components/options/Palette.svelte";
  import { sidebarOn, isGame, colors } from "$lib/refs.svelte";
  import Border from "$lib/components/options/Border.svelte";
  import Scale from "$lib/components/options/Scale.svelte";
</script>

<div class="absolute inset-0 left-auto w-1/2 max-w-52 flex-col lg:text-3xl" style:background-color={colors.v[1]} style:display={sidebarOn.v ? "flex" : "none"}>
  {#if !isGame.v}
    <ImportPNG />
    <ExportPNG />
  {/if}
  <GameSettings />
  <Palette />
  <Border />
  <Scale />
  <button class="p-2" onclick={() => { sidebarOn.v = false; }}>Close Options</button>
</div>
