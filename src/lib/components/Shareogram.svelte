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
  import { getAdjacentDirection, lettersToNum } from "$lib/utils";
  import { isActive } from "$lib/main.svelte";

  const isXed = (tile: Tile): boolean => tile.Xed;
  const isSelectedColor = (tile: Tile): boolean => tile.colorIndex === colorsIndexer.v;
  function changeColor(tile: Tile, colorIndex: number): void {
    tile.colorIndex = colorIndex;
  }
  function deactivate(tile: Tile): void {
    tile.colorIndex = 0;
  }
  function negateXed(tile: Tile): void {
    tile.Xed = !tile.Xed;
  }

  function handleMouseDown(e: MouseEvent, i: number, j: number): void {
    clickedTile.v = { colorIndex: tiles.v[i][j].colorIndex, Xed: tiles.v[i][j].Xed, row: i, column: j };
    isChangeHashAllowed.v = false;
    numTilesEntered.reset();

    // prettier-ignore
    if (isGame.v) {
      if (e.button === 0 && isXSelected.v && !isActive(tiles.v[i][j])) negateXed(tiles.v[i][j]);
      else if (e.button === 0 && !isXSelected.v && !isXed(tiles.v[i][j])) {
        if (isSelectedColor(tiles.v[i][j])) changeColor(tiles.v[i][j], 0);
        else changeColor(tiles.v[i][j], colorsIndexer.v);
      }
      else if (e.button === 2 && !isActive(tiles.v[i][j])) negateXed(tiles.v[i][j]);
      else if (e.button === 2 && isActive(tiles.v[i][j])) deactivate(tiles.v[i][j]);
    }
    else {
      if (e.button === 0 && !isSelectedColor(tiles.v[i][j])) changeColor(tiles.v[i][j], colorsIndexer.v);
      else if (e.button === 2) deactivate(tiles.v[i][j]);
    }
  }

  function onmouseup(): void {
    isChangeHashAllowed.v = true;
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
          // Testing hash: #1-9-2-476fb8-f8fafc-020617-1e52fa-1c1a1x1c1a1x1c1a1x3c3a3x-18a
          if (isLeftHeld.v && isXSelected.v && !isActive(columnTile)) columnTile.Xed = clickedTileCurrent.Xed;
          else if (isLeftHeld.v && !isXSelected.v && !isXed(columnTile)) changeColor(columnTile, clickedTileCurrent.colorIndex);
          else if (isRightHeld.v && clickedTile.v.Xed && !isActive(columnTile)) columnTile.Xed = false;
          else if (isRightHeld.v && clickedTile.v.colorIndex === 0 && !isActive(columnTile)) columnTile.Xed = true;
          else if (isRightHeld.v && clickedTile.v.colorIndex !== 0 && !isXed(columnTile)) deactivate(columnTile);
        }
      } else {
        const startIndex: number = Math.min(clickedTile.v.column, j);
        const endIndex: number = Math.max(clickedTile.v.column, j);
        for (let m: number = startIndex; m < endIndex + 1; m++) {
          const rowTile: Tile = tiles.v[clickedTile.v.row][m];
          if (isLeftHeld.v && isXSelected.v && !isActive(rowTile)) rowTile.Xed = clickedTileCurrent.Xed;
          else if (isLeftHeld.v && !isXSelected.v && !isXed(rowTile)) changeColor(rowTile, clickedTileCurrent.colorIndex);
          else if (isRightHeld.v && clickedTile.v.Xed && !isActive(rowTile)) rowTile.Xed = false;
          else if (isRightHeld.v && clickedTile.v.colorIndex === 0 && !isActive(rowTile)) rowTile.Xed = true;
          else if (isRightHeld.v && clickedTile.v.colorIndex !== 0 && !isXed(rowTile)) deactivate(rowTile);
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
        {#each { length: tiles.numColumns } as _, i}
          <th>
            {#each tilesSolution.columnHints[i] as columnHint}
              <div style:font-size={tileWidth.v / 1.5 + "px"} style:color={colors.v[lettersToNum(columnHint.color)]}>
                {columnHint.count}
              </div>
            {/each}
          </th>
        {/each}
      </tr>
    </thead>
  {/if}

  <tbody>
    {#each { length: tiles.numRows } as _, i}
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
                style:color={colors.v[lettersToNum(rowHint.color)]}
              >
                {rowHint.count}
              </div>
            {/each}
          </td>
        {/if}
        {#each { length: tiles.numColumns } as _, j}
          <td
            onmousedown={(e: MouseEvent): void => {
              handleMouseDown(e, i, j);
            }}
            onmouseenter={(): void => {
              handleMouseEnter(i, j);
            }}
            style:background-color={colors.v[tiles.v[i][j].colorIndex]}
            style:color={colors.v[1]}
            style:min-width={tileWidth.v + "px"}
            style:height={tileWidth.v + "px"}
            style:font-size={tileWidth.v / 1.5 + "px"}
            style:text-align="center"
            style:border-top={borderOn.v === 0 ? "0" : `solid ${i % 5 === 0 && i !== 0 && borderOn.v === 2 ? `4px ${colors.v[1]}` : `2px ${bgColor.v}`}`}
            style:border-left={borderOn.v === 0 ? "0" : `solid ${j % 5 === 0 && j !== 0 && borderOn.v === 2 ? `4px ${colors.v[1]}` : `2px ${bgColor.v}`}`}
            style:transition="background-color .5s">{isXed(tiles.v[i][j]) ? "X" : ""}</td
          >
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<svelte:window {onmouseup} />

<style>
  th {
    font-weight: normal;
    vertical-align: bottom;
  }

  table {
    border-collapse: collapse;
    font-size: 1.5rem;
  }
</style>
