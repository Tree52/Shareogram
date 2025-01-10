<script lang="ts">
  import { getRandomNumber } from "$lib/shared.svelte";
  import { bgColor } from "$lib/refs.svelte";
</script>

<ul style:background-color={bgColor.v} class="absolute inset-0 -z-10 m-0 overflow-hidden p-0">
  {#each { length: 35 } as _}
    <li
      class="absolute -bottom-[200px] block aspect-square rounded-[10%] bg-white/20"
      style:animation-delay={getRandomNumber(0, 60) + "s"}
      style:width={getRandomNumber(5, 200) + "px"}
      style:left={getRandomNumber(0, 100) + "%"}
    ></li>
  {/each}
</ul>

<style>
  @keyframes myAnimation {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
    }
  }

  ul li {
    animation: myAnimation 60s linear infinite;
  }
</style>
