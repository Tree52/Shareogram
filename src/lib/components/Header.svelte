<script lang="ts">
	import {
		tiles,
		tilesHistory,
		tilesHistoryIndexer,
		borderOn,
		colors,
		colorsIndexer,
		isGame,
		bgColor,
		isChangeHashAllowed
	} from "$lib/refs.svelte";
	import { checkTileColors, isMulticolor } from "$lib/main";
	import { getRandomHexColor } from "$lib/utils";

	function browseHistory(): void {
		tiles.v = $state.snapshot(tilesHistory.v[tilesHistoryIndexer.v]);
		checkTileColors();
	}

	function undo(): void {
		if (tilesHistoryIndexer.v !== 0) {
			tilesHistoryIndexer.v--;
			browseHistory();
		}
	}

	function redo(): void {
		if (tilesHistoryIndexer.v !== tilesHistory.v.length - 1) {
			tilesHistoryIndexer.v++;
			browseHistory();
		}
	}

	function handleKeydown(e: KeyboardEvent): void {
		if (e.ctrlKey && e.key === "z") undo();
		else if (e.ctrlKey && e.key === "y") redo();
	}

	// prettier-ignore
	function handleOnClick(): void { isChangeHashAllowed.v = false; }
	// prettier-ignore
	function handleOnChange(): void { isChangeHashAllowed.reset(); }

	$effect(() => {
		document.body.style.backgroundColor = bgColor.v;
		document.body.style.color = colors.v[0];
	});
</script>

<header>
	<div>
		<div class="left">
			<button id="undo" onclick={undo}>Undo</button>
			<span>Ctrl + z</span>
		</div>
		<div class="left">
			<button id="undo" onclick={redo}>Redo</button>
			<span>Ctrl + y</span>
		</div>
	</div>
	{#if isMulticolor()}
		<div class="middle">
			<!-- eslint-disable-next-line -->
			{#each colors.v as unused, i}
				<!-- prettier-ignore -->
				<button
					style:background-color={colors.v[i]}
					onclick={(): void => { colorsIndexer.v = i; }}
				></button>
			{/each}
		</div>
	{/if}
	<div>
		<div style:width="40rem" style:display="flex" style:flex-wrap="wrap" style:justify-content="right">
			<input type="color" onclick={handleOnClick} onchange={handleOnChange} bind:value={bgColor.v} />
			<!-- eslint-disable-next-line -->
			{#each colors.v as unused, i}
				<input type="color" onclick={handleOnClick} onchange={handleOnChange} bind:value={colors.v[i]} />
			{/each}
		</div>

		{#if !isGame.v}
			{#if isMulticolor()}
				<!-- prettier-ignore -->
				<button onclick={(): void => { colors.v.pop(); colorsIndexer.v = 1; checkTileColors(); }}>-</button>
			{/if}
			{#if colors.v.length < 16}
				<!-- prettier-ignore -->
				<button onclick={(): void => { colors.v.push(getRandomHexColor()); }}>+</button>
			{/if}
		{/if}

		{#if tiles.numRows > 5 || tiles.numColumns > 5}
			<input type="checkbox" bind:checked={borderOn.v} />
		{/if}
	</div>
</header>

<svelte:window onkeydown={handleKeydown} />

<style lang="scss">
	@import "$lib/../mixins.scss";

	header {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem;

		div {
			display: flex;

			* {
				margin: 0.1rem;
			}
		}

		.left {
			align-items: center;
			flex-direction: column;
		}

		.middle {
			left: 50%;
			position: absolute;
			transform: translateX(-50%);

			button {
				font-size: var(--tile-font-size);
				height: var(--tile-width);
				width: var(--tile-width);

				&:active {
					border: 2px solid white;
				}
			}
		}

		input[type="color"] {
			padding: 1px;
		}
	}
</style>
