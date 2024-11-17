import { isMoveSelected } from "./refs.svelte";

export const dragscroll = (node: HTMLElement) => {
  let isScrolling = false;
  let startX: number;
  let startY: number;
  let scrollLeft: number;
  let scrollTop: number;

  const handleMouseDown = (e: MouseEvent) => {
    if (e.button === 1 || (e.button === 0 && isMoveSelected.v)) {
      e.preventDefault();
      isScrolling = true;
      startX = e.pageX - node.offsetLeft;
      startY = e.pageY - node.offsetTop;
      scrollLeft = node.scrollLeft;
      scrollTop = node.scrollTop;

      node.style.cursor = "grabbing";

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isScrolling) return;

    e.preventDefault();
    const x = e.pageX - node.offsetLeft;
    const y = e.pageY - node.offsetTop;
    const walkX = (x - startX) * 2;
    const walkY = (y - startY) * 2;

    node.scrollLeft = scrollLeft - walkX;
    node.scrollTop = scrollTop - walkY;
  };

  const handleMouseUp = () => {
    isScrolling = false;
    node.style.cursor = "";
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  node.addEventListener("mousedown", handleMouseDown);

  return {
    destroy: () => {
      node.removeEventListener("mousedown", handleMouseDown);
      node.style.cursor = "";
    },
  };
};
