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

  // http://localhost:5173/#1-10-5-476fb8-f8fafc-020617-47d9ee-50a-1b1c3b1c3b2a1c1b1a1b1a1c2b1a6b1c4a1c1a1b1a1b1c1b1c1a1b1c2b1c3b1c1a
  // http://localhost:5173/#1-10-1-476fb8-f8fafc-020617-47d9ee-10a-1a1c1b1a1b1a1c2b1a
  const rowHintsMap: number[][] = $derived.by(() => {
    let map: number[][] = [[]];

    for (let rowIndex = 0; rowIndex < tilesSolution.rowHints.length; rowIndex++) {
      map[rowIndex] = [];
      const hints = tilesSolution.rowHints[rowIndex];
      for (let hintIndex = 0; hintIndex < hints.length; hintIndex++) {
        const hint = hints[hintIndex];

        let offsetHead = 0;
        let offsetTail = 0;
        for (let i = 0; i < hints.length; i++) {
          if (i !== 0 && (hints[i - 1].color === hints[i].color)) {
            if (i <= hintIndex) offsetHead++;
            else if (i > hintIndex) offsetTail++;
          }

          if (i < hintIndex) offsetHead += hints[i].count;
          else if (i > hintIndex) offsetTail += hints[i].count;
        }

        const encodes = tiles.rowEncodes[rowIndex];

        let startIndex = 0;
        let endIndex = encodes.length - 1;
        let count = 0;
        for (let i = 0; i < encodes.length; i++) {
          if (count >= offsetHead) break;
          count += encodes[i].count;
          startIndex++;
        }

        count = 0;
        for (let i = endIndex; i >= 0; i--) {
          if (count >= offsetTail) break;
          count += encodes[i].count;
          endIndex--;
        }

        for (let i = startIndex; i <= endIndex; i++) {
          if (JSON.stringify(hint) === JSON.stringify(encodes[i])) {
            map[rowIndex][hintIndex] = i;

            if (map[rowIndex].slice(0, -1).includes(i)) continue;
            else break;
          }
        }
      }
    }

    return map;
  });

  const columnHintsMap: number[][] = $derived.by(() => {
    let map: number[][] = [[]];

    for (let columnIndex = 0; columnIndex < tilesSolution.columnHints.length; columnIndex++) {
      map[columnIndex] = [];
      const hints = tilesSolution.columnHints[columnIndex];
      for (let hintIndex = 0; hintIndex < hints.length; hintIndex++) {
        const hint = hints[hintIndex];

        let offsetHead = 0;
        let offsetTail = 0;
        for (let i = 0; i < hints.length; i++) {
          if (i !== 0 && (hints[i - 1].color === hints[i].color)) {
            if (i <= hintIndex) offsetHead++;
            else if (i > hintIndex) offsetTail++;
          }

          if (i < hintIndex) offsetHead += hints[i].count;
          else if (i > hintIndex) offsetTail += hints[i].count;
        }

        const encodes = tiles.columnEncodes[columnIndex];

        let startIndex = 0;
        let endIndex = encodes.length - 1;
        let count = 0;
        for (let i = 0; i < encodes.length; i++) {
          if (count >= offsetHead) break;
          count += encodes[i].count;
          startIndex++;
        }

        count = 0;
        for (let i = endIndex; i >= 0; i--) {
          if (count >= offsetTail) break;
          count += encodes[i].count;
          endIndex--;
        }

        for (let i = startIndex; i <= endIndex; i++) {
          if (JSON.stringify(hint) === JSON.stringify(encodes[i])) {
            map[columnIndex][hintIndex] = i;

            if (map[columnIndex].slice(0, -1).includes(i)) continue;
            else break;
          }
        }
      }
    }

    return map;
  });

  const isAmbiguous = (arr: number[], value: number) => arr.filter(item => item === value).length > 1;
</script>

<table class="m-32 border-collapse">
  {#if isGame.v}
    <thead class="top-0 z-20 align-bottom" style:position={isColumnHintsSticky.v ? "sticky" : ""} style:background-color={isColumnHintsSticky.v ? colors.v[0] : ""}>
      <tr>
        <th class="invisible"></th>
        {#each { length: tiles.numColumns } as _, i}
          <th>
            {#each tilesSolution.columnHints[i] as columnHint, j}
              <div
                style:opacity={columnHintsMap[i][j] >= 0 && !isAmbiguous(columnHintsMap[i], columnHintsMap[i][j]) ? 0.2 : 1}
                style:font-size={isColumnHintsSticky.v ? tileWidth.v / 3 + "px" : tileWidth.v / 1.5 + "px"}
                style:color={colors.v[lettersToNum(columnHint.color)]}
                class="font-normal"
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
              {#each tilesSolution.rowHints[i] as rowHint, j}
                <div
                  style:opacity={rowHintsMap[i][j] >= 0 && !isAmbiguous(rowHintsMap[i], rowHintsMap[i][j]) ? 0.2 : 1}
                  style:font-size={isRowHintsSticky.v ? tileWidth.v / 3 + "px" : tileWidth.v / 1.5 + "px"}
                  style:min-width={isRowHintsSticky.v ? tileWidth.v / 3 + "px" : tileWidth.v + "px"}
                  style:height={isRowHintsSticky.v ? tileWidth.v / 3 + "px" : tileWidth.v + "px"}
                  style:color={colors.v[lettersToNum(rowHint.color)]}
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
