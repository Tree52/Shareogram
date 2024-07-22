<script lang="ts">
	import { footerImport, editorWidth, editorHeight, tiles, colors } from "$lib/refs.svelte";
	import { initializeTiles } from "$lib/main";

	const sanitizeStringInput = (s: string): string => s.replace(/[^0-9A-F]/g, "");
</script>

<input
	bind:value={footerImport.value}
	oninput={(): void => {
		footerImport.value = sanitizeStringInput(footerImport.value);
		tiles.value = initializeTiles(editorWidth.value, editorHeight.value, footerImport.value);
	}}
	placeholder={"0123456789ABCDEF"}
/>

<style lang="scss">
	input {
		padding-left: 4px;
	}
</style>
