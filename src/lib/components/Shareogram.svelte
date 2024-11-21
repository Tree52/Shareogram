<script lang="ts">
  import {
    isColumnHintsSticky,
    isChangeHashAllowed,
    isRowHintsSticky,
    roundedCorners,
    isMoveSelected,
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
    win,
  } from "$lib/refs.svelte";
  import { lettersToNum } from "$lib/shared.svelte";
  import { isActive } from "$lib/shared.svelte";
  import { fade } from "svelte/transition";

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

  const handlePointerDown = (e: PointerEvent, i: number, j: number) => {
    if (isMoveSelected.v) return;

    if (e.target instanceof HTMLElement) e.target.releasePointerCapture(e.pointerId); // Touch functionality.

    if (e.button === 0) isLeftHeld = true;
    else if (e.button === 2) isRightHeld = true;

    clickTile(i, j);
  };

  const clickTile = (i: number, j: number) => {
    clickedTile.v = { colorIndex: tiles.v[i][j].colorIndex, Xed: tiles.v[i][j].Xed, column: j, row: i };
    isChangeHashAllowed.v = false;
    numTilesEntered = 0;

    if (isGame.v) {
      if (isLeftHeld) {
        if (isXSelected.v && !isActive(tiles.v[i][j])) negateXed(tiles.v[i][j]);
        else if (!isXSelected.v && !isXed(tiles.v[i][j])) {
          isSelectedColor(tiles.v[i][j]) ? deactivate(tiles.v[i][j]) : changeColor(tiles.v[i][j], colorsIndexer.v);
        }
      }
      else if (isRightHeld) {
        isActive(tiles.v[i][j]) ? deactivate(tiles.v[i][j]) : negateXed(tiles.v[i][j]);
      }
    }
    else {
      if (isLeftHeld) changeColor(tiles.v[i][j], colorsIndexer.v);
      else if (isRightHeld) deactivate(tiles.v[i][j]);
    }
  };

  const onpointerup = (e: PointerEvent) => {
    if (e.button === 0) isLeftHeld = false;
    else if (e.button === 2) isRightHeld = false;
    isChangeHashAllowed.v = true;
  };

  const handlePointerEnter = (i: number, j: number) => {
    if ((!isLeftHeld && !isRightHeld) || (isLeftHeld && isRightHeld) || clickedTile.v.row === -1 || isMoveSelected.v) return;

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

  let justWon = $state(false);
  let tempBorderOn = $state(borderOn.v);
  let tempRoundedCorners = $state(roundedCorners.v);

  $effect(() => {
    if (win.v && !justWon) {
      justWon = true;
      tempBorderOn = borderOn.v;
      tempRoundedCorners = roundedCorners.v;
      borderOn.v = 0;
      roundedCorners.v = false;
    }
    else if (!win.v && justWon) {
      justWon = false;
      borderOn.v = tempBorderOn;
      roundedCorners.v = tempRoundedCorners;
    }
  });

  let currentRow = 0;
  let currentCol = 0;

  const handleFocus = (row: number, col: number) => {
    currentRow = row;
    currentCol = col;
  };

  const onkeydown = (e: KeyboardEvent) => {
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown" && e.key !== "ArrowLeft" && e.key !== "ArrowRight" && e.key !== " ") return;

    e.preventDefault();

    let newRow = currentRow;
    let newCol = currentCol;

    if (e.key === "ArrowUp" && currentRow > 0) newRow--;
    else if (e.key === "ArrowDown" && currentRow < tiles.numRows - 1) newRow++;
    else if (e.key === "ArrowLeft" && currentCol > 0) newCol--;
    else if (e.key === "ArrowRight" && currentCol < tiles.numColumns - 1) newCol++;
    else if (e.key === " ") isLeftHeld = true;

    document.querySelector<HTMLTableCellElement>(`[data-row="${newRow}"][data-col="${newCol}"]`)?.focus();

    if (isLeftHeld) clickTile(newRow, newCol);
  };

  const onkeyup = (e: KeyboardEvent) => { if (e.key === " ") isLeftHeld = false; };
</script>

<table class="border-collapse m-32">
  {#if isGame.v}
    <thead class="align-bottom top-0 z-20" style:position={isColumnHintsSticky.v ? "sticky" : ""} style:background-color={isColumnHintsSticky.v ? colors.v[0] : ""}>
      <tr>
        <th style:visibility="hidden"></th>
        {#each { length: tiles.numColumns } as _, i}
          <th>
            {#each tilesSolution.columnHints[i] as columnHint}
              <div
                style:color={colors.v[lettersToNum(columnHint.color)]}
                style:font-size={isColumnHintsSticky.v ? tileWidth.v / 3 + "px" : tileWidth.v / 1.5 + "px"}
              >
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
          <td class="left-0 z-10" style:position={isRowHintsSticky.v ? "sticky" : ""} style:background-color={isRowHintsSticky.v ? colors.v[0] : ""}>
            <div style:justify-content="right" style:display="flex">
              {#each tilesSolution.rowHints[i] as rowHint}
                <div
                  style:color={colors.v[lettersToNum(rowHint.color)]}
                  style:font-size={isRowHintsSticky.v ? tileWidth.v / 3 + "px" : tileWidth.v / 1.5 + "px"}
                  style:min-width={isRowHintsSticky.v ? tileWidth.v / 3 + "px" : tileWidth.v + "px"}
                  style:height={isRowHintsSticky.v ? tileWidth.v / 3 + "px" : tileWidth.v + "px"}
                  style:justify-content="center"
                  style:align-items="center"
                  style:display="flex"
                >{rowHint.count}</div>
              {/each}
            </div>
          </td>
        {/if}
        {#each { length: tiles.numColumns } as _, j}
          <td
            style:border-left={borderOn.v === 0 ? "0" : `solid ${j % 5 === 0 && j !== 0 && borderOn.v === 2 ? `4px ${colors.v[1]}` : `2px ${bgColor.v}`}`}
            style:border-top={borderOn.v === 0 ? "0" : `solid ${i % 5 === 0 && i !== 0 && borderOn.v === 2 ? `4px ${colors.v[1]}` : `2px ${bgColor.v}`}`}
            style:border-radius={roundedCorners.v === true ? "20%" : "0"}
            style:background-color={colors.v[tiles.v[i][j].colorIndex]}
            style:transition="background-color .5s, border-radius .5s"
            onpointerdown={(e) => { handlePointerDown(e, i, j); }}
            onpointerenter={() => { handlePointerEnter(i, j); }}
            style:font-size={tileWidth.v / 1.5 + "px"}
            onfocus={() => { handleFocus(i, j); }}
            style:min-width={tileWidth.v + "px"}
            style:height={tileWidth.v + "px"}
            style:color={colors.v[1]}
            style:text-align="center"
            class="box-content"
            data-row={i}
            data-col={j}
            {onkeydown}
            tabindex=0
          >
            {#if isXed(tiles.v[i][j]) && !win.v}
              <span transition:fade={{ duration: 300 }}>X</span>
            {/if}
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<svelte:window {onpointerup} {onkeyup} />
