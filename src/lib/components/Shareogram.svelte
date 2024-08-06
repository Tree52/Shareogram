<script lang="ts">
  import {
    borderOn,
    tilesSolution,
    isLeftHeld,
    isRightHeld,
    tiles,
    clickedTile,
    direction,
    numTilesEntered,
    isGame,
    colors,
    colorsIndexer,
    isChangeHashAllowed,
    type Tile,
    bgColor,
    tileWidth,
    isXSelected,
  } from "$lib/refs.svelte";
  import { getAdjacentDirection, letterToDec } from "$lib/utils";
  import { isActive } from "$lib/main.svelte";

  const isXed = (tile: Tile): boolean => tile.Xed;
  const isSelectedColor = (tile: Tile): boolean => tile.colorIndex === colorsIndexer.v;
  // prettier-ignore
  function changeColor(tile: Tile, colorIndex: number): void { tile.colorIndex = colorIndex; }
  // prettier-ignore
  function deactivate(tile: Tile): void { tile.colorIndex = 0; }
  // prettier-ignore
  function negateXed(tile: Tile): void { tile.Xed = !tile.Xed; }

  function handleMouseDown(e: MouseEvent, i: number, j: number): void {
    if (isGame.v) {
      if (e.button === 0 && isXSelected.v && !isActive(tiles.v[i][j])) negateXed(tiles.v[i][j]);
      else if (e.button === 0 && !isXSelected.v && !isXed(tiles.v[i][j])) {
        if (isSelectedColor(tiles.v[i][j])) changeColor(tiles.v[i][j], 0);
        else changeColor(tiles.v[i][j], colorsIndexer.v);
      } else if (e.button === 2 && !isActive(tiles.v[i][j])) negateXed(tiles.v[i][j]);
    } else {
      if (e.button === 0 && !isSelectedColor(tiles.v[i][j])) changeColor(tiles.v[i][j], colorsIndexer.v);
      else deactivate(tiles.v[i][j]);
    }

    isChangeHashAllowed.v = false;
    clickedTile.v = { row: i, column: j };
    numTilesEntered.reset();
  }

  function handleMouseEnter(i: number, j: number): void {
    if ((!isLeftHeld.v && !isRightHeld.v) || (isLeftHeld.v && isRightHeld.v) || clickedTile.v.row === -1) return;

    numTilesEntered.v++;

    if (numTilesEntered.v === 1) direction.v = getAdjacentDirection(clickedTile.v.row, clickedTile.v.column, i, j);

    const clickedTileCurrent: Tile = tiles.v[clickedTile.v.row][clickedTile.v.column];
    if (isGame.v) {
      if (direction.v === "above" || direction.v === "below") {
        const startIndex: number = Math.min(clickedTile.v.row, i);
        const endIndex: number = Math.max(clickedTile.v.row, i);
        for (let l: number = startIndex; l < endIndex + 1; l++) {
          const columnTile: Tile = tiles.v[l][clickedTile.v.column];
          if (isLeftHeld.v && isXSelected.v && !isActive(columnTile)) columnTile.Xed = clickedTileCurrent.Xed;
          else if (isLeftHeld.v && !isXSelected.v && !isXed(columnTile)) changeColor(columnTile, clickedTileCurrent.colorIndex);
          else if (isRightHeld.v && !isActive(columnTile)) columnTile.Xed = clickedTileCurrent.Xed;
        }
      } else {
        const startIndex: number = Math.min(clickedTile.v.column, j);
        const endIndex: number = Math.max(clickedTile.v.column, j);
        for (let m: number = startIndex; m < endIndex + 1; m++) {
          const rowTile: Tile = tiles.v[clickedTile.v.row][m];
          if (isLeftHeld.v && isXSelected.v && !isActive(rowTile)) rowTile.Xed = clickedTileCurrent.Xed;
          else if (isLeftHeld.v && !isXSelected.v && !isXed(rowTile)) changeColor(rowTile, clickedTileCurrent.colorIndex);
          else if (isRightHeld.v && !isActive(rowTile)) rowTile.Xed = clickedTileCurrent.Xed;
        }
      }
    } else {
      if (isActive(clickedTileCurrent)) changeColor(tiles.v[i][j], colorsIndexer.v);
      else deactivate(tiles.v[i][j]);
    }
  }
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
              <div style:font-size={tileWidth.v / 1.5 + "px"} style:color={colors.v[letterToDec(columnHint.color)]}>
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
          <td style:display="flex" style:justify-content="right">
            {#each tilesSolution.rowHints[i] as rowHint}
              <div
                style:display="flex"
                style:justify-content="center"
                style:align-items="center"
                style:min-width={tileWidth.v + "px"}
                style:height={tileWidth.v + "px"}
                style:font-size={tileWidth.v / 1.5 + "px"}
                style:color={colors.v[letterToDec(rowHint.color)]}
              >
                {rowHint.count}
              </div>
            {/each}
          </td>
        {/if}
        <!-- eslint-disable-next-line -->
        {#each { length: tiles.numColumns } as unused, j}
          <!-- prettier-ignore -->
          <td
            onmousedown={(e: MouseEvent): void => { handleMouseDown(e, i, j); }}
            onmouseenter={(): void => { handleMouseEnter(i, j); }}
            style:background-color={colors.v[tiles.v[i][j].colorIndex]}
            style:color={colors.v[1]}
            style:min-width={tileWidth.v + "px"}
            style:height={tileWidth.v + "px"}
            style:font-size={tileWidth.v / 1.5 + "px"}
            style:text-align="center"
            style:border-top={borderOn.v === 0 ? "0" : (i % 5 === 0 && i !== 0 && borderOn.v === 2 ? `solid 4px ${colors.v[1]}` : `solid 2px ${bgColor.v}`)}
            style:border-left={borderOn.v === 0 ? "0" : (j % 5 === 0 && j !== 0 && borderOn.v === 2 ? `solid 4px ${colors.v[1]}` : `solid 2px ${bgColor.v}`)}
          >{isXed(tiles.v[i][j]) ? "X" : ""}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style lang="scss">
  th {
    font-weight: normal;
    vertical-align: bottom;
  }

  table {
    border-collapse: collapse;
    font-size: 1.5rem;
  }
</style>
