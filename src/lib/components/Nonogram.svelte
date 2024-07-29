<script lang="ts">
	import {
		tiles,
		isGame,
		borderOn,
		colors,
		isColorblindMode,
		rowHints,
		columnHints
	} from "$lib/refs.svelte";
	import Tile from "$lib/components/Tile.svelte";
	import { letterToDec } from "$lib/utils";
	import { calculateRowHints, calculateColumnHints } from "$lib/main";

	$effect(() => {
		if (!isGame.value) {
			rowHints.value = calculateRowHints(tiles.value);
			columnHints.value = calculateColumnHints(tiles.value);
		}
	});
</script>

<table>
	{#if isGame.value}
		<thead>
			<tr>
				<th></th>
				<!-- eslint-disable-next-line -->
				{#each { length: tiles.numColumns } as unused, i}
					<th>
						{#each columnHints.value[i] as columnHint}
							<div style:color={colors.value[letterToDec(columnHint.color)]}>
								{isColorblindMode.value ? columnHint.count + columnHint.color : columnHint.count}
							</div>
						{/each}
					</th>
				{/each}
			</tr>
		</thead>
	{/if}

	<tbody>
		<!-- eslint-disable-next-line -->
		{#each { length: tiles.numRows } as ununsed, i}
			<tr>
				{#if isGame.value}
					<td
						style:display="flex"
						style:align-items="center"
						style:justify-content="right"
						style:height="var(--tile-width)"
					>
						{#each rowHints.value[i] as rowHint}
							<div style:padding="2px" style:color={colors.value[letterToDec(rowHint.color)]}>
								{isColorblindMode.value ? rowHint.count + rowHint.color : rowHint.count}
							</div>
						{/each}
					</td>
				{/if}
				<!-- eslint-disable-next-line -->
				{#each { length: tiles.numColumns } as unused, j}
					<td
						style:border-top={i % 5 === 0 && i !== 0 && borderOn.value
							? `solid 2px ${colors.value[1]}`
							: "0"}
						style:border-left={j % 5 === 0 && j !== 0 && borderOn.value
							? `solid 2px ${colors.value[1]}`
							: "0"}
					>
						<Tile {i} {j} />
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style lang="scss">
	td {
		padding: 1px;
		text-align: right;
	}

	th {
		font-weight: normal;
		vertical-align: bottom;
	}

	table {
		border-collapse: collapse;
		font-size: 1.5rem;
		user-select: none;
	}
</style>
