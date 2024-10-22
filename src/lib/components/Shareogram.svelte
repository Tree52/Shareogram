<script lang="ts">
  import {
    isChangeHashAllowed,
    colorsIndexer,
    tilesSolution,
    clickedTile,
    isXSelected,
    type Tile,
    tileWidth,
    borderOn,
    bgColor,
    colors,
    isGame,
    tiles,
  } from "$lib/refs.svelte";
  import { lettersToNum } from "$lib/shared.svelte";
  import { isActive } from "$lib/shared.svelte";

  let isLeftHeld = $state(false);
  let isRightHeld = $state(false);
  let direction = $state("");
  let numTilesEntered = $state(0);

  const getAdjacentDirection = (r1: number, c1: number, r2: number, c2: number) => {
    const dr = Math.abs(r1 - r2);
    const dc = Math.abs(c1 - c2);

    if (dr === 0 && dc === 1) return c2 > c1 ? "right" : "left";
    else if (dr === 1 && dc === 0) return r2 > r1 ? "below" : "above";
    else return "not adjacent";
  };

  const isXed = (tile: Tile) => tile.Xed;
  const isSelectedColor = (tile: Tile) => tile.colorIndex === colorsIndexer.v;
  const changeColor = (tile: Tile, colorIndex: number) => { tile.colorIndex = colorIndex; };
  const deactivate = (tile: Tile) => { tile.colorIndex = 0; };
  const negateXed = (tile: Tile) => { tile.Xed = !tile.Xed; };

  const handleMouseDown = (e: MouseEvent, i: number, j: number) => {
    clickedTile.v = { colorIndex: tiles.v[i][j].colorIndex, Xed: tiles.v[i][j].Xed, column: j, row: i };
    isChangeHashAllowed.v = false;
    numTilesEntered = 0;

    if (isGame.v) {
      if (e.button === 0) {
        if (isXSelected.v && !isActive(tiles.v[i][j])) negateXed(tiles.v[i][j]);
        else if (!isXSelected.v && !isXed(tiles.v[i][j])) {
          isSelectedColor(tiles.v[i][j]) ? deactivate(tiles.v[i][j]) : changeColor(tiles.v[i][j], colorsIndexer.v);
        }
      }
      else if (e.button === 2) {
        isActive(tiles.v[i][j]) ? deactivate(tiles.v[i][j]) : negateXed(tiles.v[i][j]);
      }
    }
    else {
      if (e.button === 0) changeColor(tiles.v[i][j], colorsIndexer.v);
      else if (e.button === 2) deactivate(tiles.v[i][j]);
    }
  };

  const onmousedown = (e: MouseEvent) => {
    if (e.button === 0) isLeftHeld = true;
    else if (e.button === 2) isRightHeld = true;
  };

  const onmouseup = (e: MouseEvent) => {
    if (e.button === 0) isLeftHeld = false;
    else if (e.button === 2) isRightHeld = false;
    isChangeHashAllowed.v = true;
  };

  const handleMouseEnter = (i: number, j: number) => {
    if ((!isLeftHeld && !isRightHeld) || (isLeftHeld && isRightHeld) || clickedTile.v.row === -1) return;

    numTilesEntered++;

    if (numTilesEntered === 1) direction = getAdjacentDirection(clickedTile.v.row, clickedTile.v.column, i, j);

    const clickedTileCurrent = tiles.v[clickedTile.v.row][clickedTile.v.column];
    if (isGame.v) {
      if (direction === "above" || direction === "below") {
        const startIndex = Math.min(clickedTile.v.row, i);
        const endIndex = Math.max(clickedTile.v.row, i);
        for (let l = startIndex; l < endIndex + 1; l++) {
          const columnTile = tiles.v[l][clickedTile.v.column];
          if (isLeftHeld) {
            if (isXSelected.v && !isActive(columnTile)) columnTile.Xed = clickedTileCurrent.Xed;
            else if (!isXSelected.v && !isXed(columnTile)) changeColor(columnTile, clickedTileCurrent.colorIndex);
          }
          else {
            if (clickedTile.v.Xed && !isActive(columnTile)) columnTile.Xed = false;
            else if (clickedTile.v.colorIndex === 0 && !isActive(columnTile)) columnTile.Xed = true;
            else if (clickedTile.v.colorIndex !== 0 && !isXed(columnTile)) deactivate(columnTile);
          }
        }
      }
      else {
        const startIndex = Math.min(clickedTile.v.column, j);
        const endIndex = Math.max(clickedTile.v.column, j);
        for (let m = startIndex; m < endIndex + 1; m++) {
          const rowTile = tiles.v[clickedTile.v.row][m];
          if (isLeftHeld) {
            if (isXSelected.v && !isActive(rowTile)) rowTile.Xed = clickedTileCurrent.Xed;
            else if (!isXSelected.v && !isXed(rowTile)) changeColor(rowTile, clickedTileCurrent.colorIndex);
          }
          else {
            if (clickedTile.v.Xed && !isActive(rowTile)) rowTile.Xed = false;
            else if (clickedTile.v.colorIndex === 0 && !isActive(rowTile)) rowTile.Xed = true;
            else if (clickedTile.v.colorIndex !== 0 && !isXed(rowTile)) deactivate(rowTile);
          }
        }
      }
    }
    else {
      isLeftHeld ? changeColor(tiles.v[i][j], colorsIndexer.v) : deactivate(tiles.v[i][j]);
    }
  };
</script>

<table>
  {#if isGame.v}
    <thead>
      <tr>
        <th></th>
        {#each { length: tiles.numColumns } as _, i}
          <th>
            {#each tilesSolution.columnHints[i] as columnHint}
              <div style:color={colors.v[lettersToNum(columnHint.color)]} style:font-size={tileWidth.v / 1.5 + "px"}>
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
          <td style:justify-content="right" style:display="flex">
            {#each tilesSolution.rowHints[i] as rowHint}
              <div
                style:color={colors.v[lettersToNum(rowHint.color)]}
                style:font-size={tileWidth.v / 1.5 + "px"}
                style:min-width={tileWidth.v + "px"}
                style:height={tileWidth.v + "px"}
                style:justify-content="center"
                style:align-items="center"
                style:display="flex"
              >{rowHint.count}</div>
            {/each}
          </td>
        {/if}
        {#each { length: tiles.numColumns } as _, j}
          <td
            style:border-left={borderOn.v === 0 ? "0" : `solid ${j % 5 === 0 && j !== 0 && borderOn.v === 2 ? `4px ${colors.v[1]}` : `2px ${bgColor.v}`}`}
            style:border-top={borderOn.v === 0 ? "0" : `solid ${i % 5 === 0 && i !== 0 && borderOn.v === 2 ? `4px ${colors.v[1]}` : `2px ${bgColor.v}`}`}
            style:background-color={colors.v[tiles.v[i][j].colorIndex]}
            onmousedown={(e) => { handleMouseDown(e, i, j); }}
            onmouseenter={() => { handleMouseEnter(i, j); }}
            style:font-size={tileWidth.v / 1.5 + "px"}
            style:transition="background-color .5s"
            style:min-width={tileWidth.v + "px"}
            style:height={tileWidth.v + "px"}
            style:color={colors.v[1]}
            style:text-align="center"
          >{isXed(tiles.v[i][j]) ? "X" : ""}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<svelte:window {onmousedown} {onmouseup} />

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
