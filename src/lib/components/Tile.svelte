<script lang="ts">
  import {
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
  } from "$lib/refs.svelte";
  import { getAdjacentDirection } from "$lib/utils";
  import { isActive } from "$lib/main";

  const { i, j }: { i: number; j: number } = $props();

  const isXed = (tile: Tile): boolean => tile.Xed;
  const isSelectedColor = (tile: Tile): boolean => tile.colorIndex === colorsIndexer.v;
  // prettier-ignore
  function changeColor(tile: Tile, colorIndex: number): void { tile.colorIndex = colorIndex; }
  // prettier-ignore
  function deactivate(tile: Tile): void { tile.colorIndex = 0; }
  // prettier-ignore
  function negateXed(tile: Tile): void { tile.Xed = !tile.Xed; }

  function handleMouseDown(e: MouseEvent): void {
    if (isGame.v) {
      if (e.button === 0 && !isXed(tiles.v[i][j])) {
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

  function handleMouseEnter(): void {
    if ((!isLeftHeld.v && !isRightHeld.v) || (isLeftHeld.v && isRightHeld.v) || clickedTile.v.row === -1) return;

    numTilesEntered.v++;

    if (numTilesEntered.v === 1) direction.v = getAdjacentDirection(clickedTile.v.row, clickedTile.v.column, i, j);

    if (isGame.v) {
      if (direction.v === "above" || direction.v === "below") {
        const startIndex: number = Math.min(clickedTile.v.row, i);
        const endIndex: number = Math.max(clickedTile.v.row, i);
        for (let l: number = startIndex; l < endIndex + 1; l++) {
          if (isLeftHeld.v && !isXed(tiles.v[l][clickedTile.v.column])) {
            changeColor(tiles.v[l][clickedTile.v.column], tiles.v[clickedTile.v.row][clickedTile.v.column].colorIndex);
          } else if (isRightHeld.v && !isActive(tiles.v[l][clickedTile.v.column])) {
            tiles.v[l][clickedTile.v.column].Xed = tiles.v[clickedTile.v.row][clickedTile.v.column].Xed;
          }
        }
      } else {
        const startIndex: number = Math.min(clickedTile.v.column, j);
        const endIndex: number = Math.max(clickedTile.v.column, j);
        for (let m: number = startIndex; m < endIndex + 1; m++) {
          if (isLeftHeld.v && !isXed(tiles.v[clickedTile.v.row][m])) {
            changeColor(tiles.v[clickedTile.v.row][m], tiles.v[clickedTile.v.row][clickedTile.v.column].colorIndex);
          } else if (isRightHeld.v && !isActive(tiles.v[clickedTile.v.row][m])) {
            tiles.v[clickedTile.v.row][m].Xed = tiles.v[clickedTile.v.row][clickedTile.v.column].Xed;
          }
        }
      }
    } else {
      if (isActive(tiles.v[clickedTile.v.row][clickedTile.v.column])) changeColor(tiles.v[i][j], colorsIndexer.v);
      else deactivate(tiles.v[i][j]);
    }
  }
</script>

<button
  onmousedown={handleMouseDown}
  onmouseenter={handleMouseEnter}
  style:background-color={colors.v[tiles.v[i][j].colorIndex]}
  style:color={colors.v[1]}
>
  {isXed(tiles.v[i][j]) ? "X" : ""}
</button>

<style lang="scss">
  button {
    border: 0;
    font-size: var(--tile-font-size);
    height: var(--tile-width);
    width: var(--tile-width);
  }
</style>
