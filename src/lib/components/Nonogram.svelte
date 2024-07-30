<script lang="ts">
  import { tiles, isGame, borderOn, colors, tilesSolution } from "$lib/refs.svelte";
  import Tile from "$lib/components/Tile.svelte";
  import { letterToDec } from "$lib/utils";
</script>

<table>
  {#if isGame.v}
    <thead>
      <tr>
        <th></th>
        <!-- eslint-disable-next-line -->
        {#each { length: tiles.numColumns } as unused, i}
          <th>
            {#each tilesSolution.columnHints[i] as columnHint}
              <div style:color={colors.v[letterToDec(columnHint.color)]}>
                {columnHint.count}
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
        {#if isGame.v}
          <td style:display="flex" style:align-items="center" style:justify-content="right" style:height="var(--tile-width)">
            {#each tilesSolution.rowHints[i] as rowHint}
              <div style:padding="2px" style:color={colors.v[letterToDec(rowHint.color)]}>
                {rowHint.count}
              </div>
            {/each}
          </td>
        {/if}
        <!-- eslint-disable-next-line -->
        {#each { length: tiles.numColumns } as unused, j}
          <td
            style:border-top={i % 5 === 0 && i !== 0 && borderOn.v ? `solid 2px ${colors.v[1]}` : "0"}
            style:border-left={j % 5 === 0 && j !== 0 && borderOn.v ? `solid 2px ${colors.v[1]}` : "0"}
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
