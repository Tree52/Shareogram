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
	import { letterToNumber, numberToLetter } from "$lib/utils";
	import { isActive } from "$lib/main";

	type Hint = {
		count: number;
		color: string;
	};

	function calculateRowHints(value: TileT[][]): Hint[][] {
		const rowHints: Hint[][] = [[]];
		for (let row: number = 0; row < tiles.numRows; row++) {
			rowHints[row] = [{ count: 0, color: "" }];
			for (let column: number = 0; column < tiles.numColumns; column++) {
				if (isActive(row, column)) {
					if (column !== 0 && value[row][column].colorIndex !== value[row][column - 1].colorIndex)
						rowHints[row].push({ count: 1, color: numberToLetter(value[row][column].colorIndex) });
					else {
						rowHints[row][rowHints[row].length - 1].count++;
						rowHints[row][rowHints[row].length - 1].color = numberToLetter(
							value[row][column].colorIndex
						);
					}
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
					if (row !== 0 && value[row][column].colorIndex !== value[row - 1][column].colorIndex)
						columnHints[column].push({
							count: 1,
							color: numberToLetter(value[row][column].colorIndex)
						});
					else {
						columnHints[column][columnHints[column].length - 1].count++;
						columnHints[column][columnHints[column].length - 1].color = numberToLetter(
							value[row][column].colorIndex
						);
					}
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
						{#each columnHints[i] as columnHint, j}
							<div style="color: {colors.value[letterToNumber(columnHint.color)]};">
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
						style="display: flex; align-items: center; justify-content: right; height: var(--tile-width)"
					>
						{#each rowHints[i] as rowHint, j}
							<div style="padding: 2px; color: {colors.value[letterToNumber(rowHint.color)]};">
								{isColorblindMode.value ? rowHint.count + rowHint.color : rowHint.count}
							</div>
						{/each}
					</td>
				{/if}
				<!-- eslint-disable-next-line -->
				{#each { length: tiles.numColumns } as unused, j}
					<!-- prettier-ignore -->
					<td style="
						border-top: {i % 5 === 0 && i !== 0 && borderOn.value ? `solid 2px ${colors.value[1]}` : '0'};
						border-left: {j % 5 === 0 && j !== 0 && borderOn.value ? `solid 2px ${colors.value[1]}` : '0'};"
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
