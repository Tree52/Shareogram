<script>
	import Nonogram from "$lib/components/Nonogram.svelte";
</script>

<main>
	<Nonogram />
</main>

<style lang="scss">
	@import "$lib/../mixins.scss";

	main {
		flex: 1;
		@include center-div;
	}
</style>
