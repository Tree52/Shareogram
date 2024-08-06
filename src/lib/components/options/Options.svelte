<script lang="ts">
  import { sidebarOn, isGame } from "$lib/refs.svelte";
  import Palette from "$lib/components/options/Palette.svelte";
  import Border from "$lib/components/options/Border.svelte";
  import Reveal from "$lib/components/options/Reveal.svelte";
  import Scale from "$lib/components/options/Scale.svelte";
  import Start from "$lib/components/options/Start.svelte";
</script>

{#if sidebarOn.v}
  <div>
    <!-- prettier-ignore -->
    <button style:height="5rem" onclick={(): void => { sidebarOn.reset() }}>Close Options</button>
    <Start />
    <Border />
    <Scale />
    <Palette />
    {#if isGame.v}
      <Reveal />
    {/if}
  </div>
{/if}

<style lang="scss">
  div {
    background-color: white;
    bottom: 0;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
    width: 10rem;
  }
</style>
