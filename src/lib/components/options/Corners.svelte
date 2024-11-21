<script lang="ts">
  import { roundedCorners } from "$lib/refs.svelte";
</script>

<div class="border-b-black border-b-2 flex justify-center pb-5">
  <input bind:checked={roundedCorners.v} type="checkbox">
</div>

<style>
  /* From Uiverse.io by nikk7007 */
  input[type=checkbox] {
    appearance: none;
    height: 2rem;
    width: 3.5rem;
    background-color: black;
    position: relative;
    border-radius: .2em;
    cursor: pointer;
  }

  input[type=checkbox]::before {
    content: '';
    background-color: white;
    display: block;
    height: 1.5em;
    width: 1.5em;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: calc(1.5em/2 + .3em);
    border-radius: .2em;
    transition: .3s ease;
  }

  input[type=checkbox]:checked::before {
    left: calc(100% - (1.5em/2 + .3em));
  }
</style>
