<script lang="ts">
	import {
		tiles,
		isGame,
		type Tile as TileT,
		borderOn,
		colors,
		isColorblindMode
	} from "$lib/refs.svelte";
	import Tile from "$lib/components/Tile.svelte";
	import { letterToDec, decToLetter } from "$lib/utils";
	import { isActive } from "$lib/main";

	type Hint = {
		count: number;
		color: string;
	};

	// Todo: have these run on import.
	function calculateRowHints(value: TileT[][]): Hint[][] {
		const rowHints: Hint[][] = [[]];
		for (let row: number = 0; row < tiles.numRows; row++) {
			rowHints[row] = [{ count: 0, color: "" }];
			for (let column: number = 0; column < tiles.numColumns; column++) {
				if (isActive(row, column)) {
					const previousColorIndex: number | null =
						column === 0 ? null : value[row][column - 1].colorIndex;
					const currentColorIndex: number = value[row][column].colorIndex;
					if (previousColorIndex !== currentColorIndex)
						rowHints[row].push({ count: 1, color: decToLetter(currentColorIndex) });
					else rowHints[row][rowHints[row].length - 1].count++;
				}
			}
			if (rowHints[row].length > 1 && rowHints[row][0].count === 0) rowHints[row].shift();
		}
		return rowHints;
	}

	function calculateColumnHints(value: TileT[][]): Hint[][] {
		const columnHints: Hint[][] = [[]];
		for (let column: number = 0; column < tiles.numColumns; column++) {
			columnHints[column] = [{ count: 0, color: "" }];
			for (let row: number = 0; row < tiles.numRows; row++) {
				if (isActive(row, column)) {
					const previousColorIndex: number | null =
						row === 0 ? null : value[row - 1][column].colorIndex;
					const currentColorIndex: number = value[row][column].colorIndex;
					if (previousColorIndex !== currentColorIndex)
						columnHints[column].push({ count: 1, color: decToLetter(currentColorIndex) });
					else columnHints[column][columnHints[column].length - 1].count++;
				}
			}
			if (columnHints[column].length > 1 && columnHints[column][0].count === 0)
				columnHints[column].shift();
		}
		return columnHints;
	}

	let rowHints: Hint[][] = $state([[]]);
	let columnHints: Hint[][] = $state([[]]);
	$effect(() => {
		if (!isGame.value) {
			rowHints = calculateRowHints(tiles.value);
			columnHints = calculateColumnHints(tiles.value);
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
						{#each columnHints[i] as columnHint}
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
						{#each rowHints[i] as rowHint}
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
