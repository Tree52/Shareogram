<script lang="ts">
	import { array2DToHexString } from "$lib/utils";

	let { tileColorIndices }: { tileColorIndices: number[][] } = $props();
</script>

<button
	onclick={(): void => {
		navigator.clipboard.writeText(array2DToHexString(tileColorIndices));
		alert("Copied to clipboard");
	}}
>
	Export
</button>
