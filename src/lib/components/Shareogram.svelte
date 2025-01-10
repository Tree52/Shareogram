<script lang="ts">
  import {
    isColumnHintsSticky,
    isChangeHashAllowed,
    isRowHintsSticky,
    isMoveSelected,
    colorsIndexer,
    tilesSolution,
    is2dSelected,
    clickedTile,
    isXSelected,
    type Encode,
    tableScale,
    type Tile,
    type Hint,
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
      if (is2dSelected.v) {
        // 2D selection
        const startRow = Math.min(clickedTile.v.row, i);
        const endRow = Math.max(clickedTile.v.row, i);
        const startCol = Math.min(clickedTile.v.column, j);
        const endCol = Math.max(clickedTile.v.column, j);

        for (let row = startRow; row <= endRow; row++) {
          for (let col = startCol; col <= endCol; col++) {
            const tile = tiles.v[row][col];
            if (isLeftHeld) {
              if (isXSelected.v && !isActive(tile)) tile.Xed = clickedTileCurrent.Xed;
              else if (!isXSelected.v && !isXed(tile)) changeColor(tile, clickedTileCurrent.colorIndex);
            }
            else {
              if (clickedTile.v.Xed && !isActive(tile)) tile.Xed = false;
              else if (clickedTile.v.colorIndex === 0 && !isActive(tile)) tile.Xed = true;
              else if (clickedTile.v.colorIndex !== 0 && !isXed(tile)) deactivate(tile);
            }
          }
        }
      }
      else {
        // 1D selection
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
    }
    else {
      isLeftHeld ? changeColor(tiles.v[i][j], colorsIndexer.v) : deactivate(tiles.v[i][j]);
    }
  };

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

    if (isLeftHeld && !isMoveSelected.v) clickTile(newRow, newCol);
  };

  const onkeyup = (e: KeyboardEvent) => { if (e.key === " ") isLeftHeld = false; };

  const getOffsets = (hintIndex: number, hints: Hint[]) => {
    let offsetHead = 0;
    for (let i = 0; i <= hintIndex; i++) {
      if (i !== 0 && (hints[i - 1].letters === hints[i].letters)) offsetHead++;
      if (i < hintIndex) offsetHead += hints[i].count;
    }

    let offsetTail = 0;
    for (let i = hints.length - 1; i >= hintIndex; i--) {
      if (i !== hints.length - 1 && (hints[i].letters === hints[i + 1].letters)) offsetTail++;
      if (i > hintIndex) offsetTail += hints[i].count;
    }

    return { offsetHead, offsetTail };
  };

  const getEncodesRange = (hintIndex: number, hints: Hint[], encodes: Encode[]) => {
    const { offsetHead, offsetTail } = getOffsets(hintIndex, hints);

    let count = 0;
    let encodesStartIndex = 0;
    while (count < offsetHead && encodesStartIndex <= encodes.length - 1) {
      if (encodes[encodesStartIndex].letters !== "X") count += encodes[encodesStartIndex].count;
      else if (encodesStartIndex > 0) count++;
      encodesStartIndex++;
    }

    count = 0;
    let encodesEndIndex = encodes.length - 1;
    while (count < offsetTail && encodesEndIndex >= 0) {
      if (encodes[encodesEndIndex].letters !== "X") count += encodes[encodesEndIndex].count;
      else if (encodesEndIndex < encodes.length - 1) count++;
      encodesEndIndex--;
    }

    return { encodesStartIndex, encodesEndIndex };
  };

  const getMapIntersect = (hints: Hint[], encodes: Encode[]) => {
    const mapForward: (undefined | number)[] = new Array(hints.length).fill(undefined);
    const mapBackward: (undefined | number)[] = new Array(hints.length).fill(undefined);
    const mapIntersect: (undefined | number)[] = new Array(hints.length).fill(undefined);

    // Forward pass
    for (let hintIndex = 0; hintIndex < hints.length; hintIndex++) {
      const { encodesStartIndex, encodesEndIndex } = getEncodesRange(hintIndex, hints, encodes);
      const hint = hints[hintIndex];

      for (let i = encodesStartIndex; i <= encodesEndIndex; i++) {
        if (hint.letters === encodes[i].letters && hint.count >= encodes[i].count) {
          if (mapForward.slice(0, hintIndex).includes(i)) continue;

          mapForward[hintIndex] = i;

          for (let j = 0; j < hintIndex; j++) {
            if (mapForward[j]! > i) mapForward[j] = undefined;
          }

          break;
        }
      }
    }

    // Backward pass
    for (let hintIndex = hints.length - 1; hintIndex >= 0; hintIndex--) {
      const { encodesStartIndex, encodesEndIndex } = getEncodesRange(hintIndex, hints, encodes);
      const hint = hints[hintIndex];

      for (let i = encodesEndIndex; i >= encodesStartIndex; i--) {
        if (hint.letters === encodes[i].letters && hint.count >= encodes[i].count) {
          if (mapBackward.slice(hintIndex + 1).includes(i)) continue;

          mapBackward[hintIndex] = i;

          for (let j = hints.length - 1; j > hintIndex; j--) {
            if (mapBackward[j]! < i) mapBackward[j] = undefined;
          }

          break;
        }
      }
    }

    for (let i = 0; i < hints.length; i++) {
      if (mapForward[i] === mapBackward[i]) mapIntersect[i] = mapForward[i];
    }

    return mapIntersect;
  };

  const chartMapLine = (hints: Hint[], encodes: Encode[]) => {
    const mapIntersect: (undefined | number)[] = getMapIntersect(hints, encodes);

    // Double check ranges of hints with undefined between.
    let ranges: number[][] = [];
    let prevEncode = mapIntersect[0] !== undefined ? mapIntersect[0] : 0;
    for (let i = 1; i < mapIntersect.length; i++) {
      if (mapIntersect[i] !== undefined && !(prevEncode === 0 && mapIntersect[i] === encodes.length - 1)) {
        if (mapIntersect[i - 1] === undefined) ranges.push([prevEncode, mapIntersect[i]!]);
        prevEncode = mapIntersect[i]!;
      }
    }
    if (mapIntersect[mapIntersect.length - 1] === undefined && prevEncode !== encodes.length - 1 && prevEncode !== 0) ranges.push([prevEncode, encodes.length - 1]);

    for (let i = 0; i < ranges.length; i++) {
      const [encodesStart, encodesEnd] = ranges[i];
      const hintsStart = encodesStart === 0 ? 0 : mapIntersect.indexOf(encodesStart);
      const hintsEnd = encodesEnd === encodes.length - 1 ? hints.length - 1 : mapIntersect.indexOf(encodesEnd);
      const subHints = hints.slice(hintsStart, hintsEnd + 1);
      const subEncodes = encodes.slice(encodesStart, encodesEnd + 1);

      let subEncodesCount = 0;
      for (let j = 0; j < subEncodes.length; j++) {
        if (encodes[j].letters !== "X") subEncodesCount += encodes[j].count;
        else if (j > 0 && j < subEncodes.length - 1) subEncodesCount++;
      }
      const { offsetTail } = getOffsets(0, subHints);
      if (offsetTail + subHints[0].count > subEncodesCount) continue;

      const subMap = getMapIntersect(subHints, subEncodes);
      for (let j = 0; j < subMap.length; j++) {
        if (subMap[j] !== undefined) subMap[j]! = subMap[j]! + encodesStart;
      }
      mapIntersect.splice(hintsStart, hintsEnd - hintsStart + 1, ...subMap);
    }

    return mapIntersect;
  };

  // TEST: http://localhost:5173/#1-10-5-476fb8-f8fafc-020617-47d9ee-50a-1b1c3b1c3b2a1c1b1a1b1a1c2b1a6b1c4a1c1a1b1a1b1c1b1c1a1b1c2b1c3b1c1a
  // TODO: http://localhost:5173/#1-10-1-476fb8-f8fafc-020617-47d9ee-1a2X2a2b3a-5a2b1a2b
  // TODO: http://localhost:5173/#1-11-1-476fb8-f8fafc-020617-0ee55d-8f19be-2X3a1X1b1X3a-2b1a1b1a1b5a
  const rowHintsMap: (undefined | number)[][] = $derived.by(() => {
    let map: (undefined | number)[][] = [[]];

    for (let rowIndex = 0; rowIndex < tilesSolution.rowHints.length; rowIndex++) {
      const hints = tilesSolution.rowHints[rowIndex];
      const encodes = tiles.rowEncodes[rowIndex];
      map[rowIndex] = chartMapLine(hints, encodes);
      // Debug columnHints:
      // map[rowIndex] = [];
    }

    return map;
  });

  const columnHintsMap: (undefined | number)[][] = $derived.by(() => {
    let map: (undefined | number)[][] = [[]];

    for (let columnIndex = 0; columnIndex < tilesSolution.columnHints.length; columnIndex++) {
      const hints = tilesSolution.columnHints[columnIndex];
      const encodes = tiles.columnEncodes[columnIndex];
      map[columnIndex] = chartMapLine(hints, encodes);
      // Debug rowHints:
      // map[columnIndex] = [];
    }

    return map;
  });

  const isHintSatisfied = (i: number, j: number, hint: Hint, isRowHint: boolean) => {
    const map = isRowHint ? rowHintsMap : columnHintsMap;
    const encodes = isRowHint ? tiles.rowEncodes[i] : tiles.columnEncodes[i];

    return map[i][j] !== undefined && JSON.stringify(hint) === JSON.stringify(encodes[map[i][j]]);
  };
</script>

<table class="m-32 border-collapse" style:zoom={tableScale.v}>
  {#if isGame.v}
    <thead
      style:background-color={isColumnHintsSticky.v ? colors.v[0] : ""}
      style:position={isColumnHintsSticky.v ? "sticky" : ""}
      class="top-0 z-20 align-bottom"
    >
      <tr>
        <th
          style:visibility={isRowHintsSticky.v && isColumnHintsSticky.v ? "" : "hidden"}
          style:background-color={colors.v[0]}
          class="sticky left-0 z-30"
        ></th>
        {#each { length: tiles.numColumns } as _, i}
          <th>
            {#each tilesSolution.columnHints[i] as columnHint, j}
              <div
                style:opacity={isHintSatisfied(i, j, columnHint, false) ? 0.2 : 1}
                style:color={colors.v[lettersToNum(columnHint.letters)]}
                style:font-size={isColumnHintsSticky.v ? ".5rem" : ""}
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
          <td
            style:background-color={isRowHintsSticky.v ? colors.v[0] : ""}
            style:position={isRowHintsSticky.v ? "sticky" : ""}
            class="left-0 z-10"
          >
            <div class="flex justify-end">
              {#each tilesSolution.rowHints[i] as rowHint, j}
                <div
                  style:opacity={isHintSatisfied(i, j, rowHint, true) ? 0.2 : 1}
                  style:width={isRowHintsSticky.v ? ".75rem" : "1.5rem"}
                  style:color={colors.v[lettersToNum(rowHint.letters)]}
                  style:font-size={isRowHintsSticky.v ? ".5rem" : ""}
                  class="flex items-center justify-center"
                >{rowHint.count}</div>
              {/each}
            </div>
          </td>
        {/if}
        {#each { length: tiles.numColumns } as _, j}
          <td
            style:border-left={win.v || !isGame.v ? "0" : `solid ${j % 5 === 0 && j !== 0 ? `4px ${colors.v[1]}` : `2px ${bgColor.v}`}`}
            style:border-top={win.v || !isGame.v ? "0" : `solid ${i % 5 === 0 && i !== 0 ? `4px ${colors.v[1]}` : `2px ${bgColor.v}`}`}
            class="box-content h-6 min-w-6 text-center transition-colors duration-500"
            style:background-color={colors.v[tiles.v[i][j].colorIndex]}
            onpointerdown={(e) => { handlePointerDown(e, i, j); }}
            onpointerenter={() => { handlePointerEnter(i, j); }}
            onfocus={() => { handleFocus(i, j); }}
            style:color={colors.v[1]}
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
        {#if tiles.numRows > 10 && isGame.v}
          <td class="px-1 text-center">
            {i % 5 === 4 ? i + 1 : ""}
          </td>
        {/if}
      </tr>
    {/each}
    {#if tiles.numColumns > 10 && isGame.v}
      <tr>
        <td></td>
        {#each { length: tiles.numColumns } as _, j}
          <td class="text-center">
            {j % 5 === 4 ? j + 1 : ""}
          </td>
        {/each}
      </tr>
    {/if}
  </tbody>
</table>

<svelte:window {onpointerup} {onkeyup} />
