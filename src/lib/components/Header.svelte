<script lang="ts">
	import {
		tiles,
		tilesHistory,
		tilesHistoryIndexer,
		borderOn,
		colors,
		colorsIndexer,
		isGame,
		isColorblindMode,
		bgColor,
		isChangeHashAllowed
	} from "$lib/refs.svelte";
	import { getRandomHexColor, decToLetter } from "$lib/utils";
	import { checkTileColors, isMulticolor } from "$lib/main";

	function browseHistory(): void {
		tiles.value = $state.snapshot(tilesHistory.value[tilesHistoryIndexer.value]);
		checkTileColors();
	}

	function undo(): void {
		if (tilesHistoryIndexer.value !== 0) {
			tilesHistoryIndexer.value--;
			browseHistory();
		}
	}

	function redo(): void {
		if (tilesHistoryIndexer.value !== tilesHistory.value.length - 1) {
			tilesHistoryIndexer.value++;
			browseHistory();
		}
	}

	function handleKeydown(e: KeyboardEvent): void {
		if (e.ctrlKey && e.key === "z") undo();
		else if (e.ctrlKey && e.key === "y") redo();
	}

	function handleOnClick(): void {
		isChangeHashAllowed.value = false;
	}

	function handleOnChange(): void {
		isChangeHashAllowed.reset();
	}

	$effect(() => {
		document.body.style.backgroundColor = bgColor.value;
		document.body.style.color = colors.value[0];
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
			{#each colors.value as unused, i}
				<button
					style:background-color={colors.value[i]}
					style:color={colors.value[0]}
					onclick={(): void => {
						colorsIndexer.value = i;
					}}
					>{#if i !== 0 && isColorblindMode.value}
						<label for={colors.value[i]}>{decToLetter(i)}</label>
					{/if}</button
				>
			{/each}
		</div>
	{/if}
	<div>
		<!-- eslint-disable-next-line -->
		<div
			style:width="40rem"
			style:display="flex"
			style:flex-wrap="wrap"
			style:justify-content="right"
		>
			<input
				type="color"
				onclick={handleOnClick}
				onchange={handleOnChange}
				bind:value={bgColor.value}
			/>
			<!-- eslint-disable-next-line -->
			{#each colors.value as unused, i}
				<input
					type="color"
					onclick={handleOnClick}
					onchange={handleOnChange}
					bind:value={colors.value[i]}
				/>
			{/each}
		</div>
		{#if !isGame.value}
			{#if isMulticolor()}
				<button
					onclick={(): void => {
						colors.value.pop();
						colorsIndexer.value = 1;
						checkTileColors();
					}}>-</button
				>
			{/if}
			{#if colors.value.length < 16}
				<button
					onclick={(): void => {
						colors.value.push(getRandomHexColor());
					}}>+</button
				>
			{/if}
		{/if}
		{#if isMulticolor()}
			<input type="checkbox" bind:checked={isColorblindMode.value} />
		{/if}
		{#if tiles.numRows > 5 || tiles.numColumns > 5}
			<input type="checkbox" bind:checked={borderOn.value} />
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
