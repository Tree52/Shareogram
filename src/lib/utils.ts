type Position = "not adjacent" | "above" | "below" | "right" | "left";
export function getAdjacentDirection(r1: number, c1: number, r2: number, c2: number): Position {
  const dr: number = Math.abs(r1 - r2);
  const dc: number = Math.abs(c1 - c2);

  // Note: (0, 0) is top left, not bottom left.
  if (dr === 0 && dc === 1) return c2 > c1 ? "right" : "left";
  else if (dr === 1 && dc === 0) return r2 > r1 ? "below" : "above";
  else return "not adjacent";
}

export function getRandomHexColor(): string {
  const characters: string = "0123456789abcdef";
  let result: string = "#";
  for (let i: number = 0; i < 6; i++) {
    const randomIndex: number = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

export function extractPropertyFrom2DArray<T, K extends keyof T>(items: T[][], property: K): T[K][][] {
  return items.map((innerArray) => innerArray.map((item) => item[property]));
}

export function numToLetters(num: number): string {
  let letters = "";
  while (num >= 0) {
    letters = String.fromCharCode((num % 26) + 97) + letters;
    num = Math.floor(num / 26) - 1;
  }
  return letters;
}

export function lettersToNum(letters: string): number {
  let num = 0;
  for (let i = 0; i < letters.length; i++) {
    num *= 26;
    num += letters.charCodeAt(i) - 97 + 1;
  }
  return num - 1;
}

export function splitString(input: string): { letters: string[]; numbers: number[] } {
  const splitString: RegExpMatchArray | null = input.match(/(\d+|[a-zX]+)/g);
  const numbers: number[] = [];
  const letters: string[] = [];

  if (splitString) {
    for (let i = 0; i < splitString.length; i++) {
      const match: string = splitString[i];
      if (isNaN(Number(match))) letters.push(match);
      else numbers.push(Number(match));
    }
  }

  if (numbers.length !== letters.length) throw new Error("Error: different number of counts and letters.");

  return { letters, numbers };
}

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function hexToRGB(hex: string): [number, number, number] {
  const bigint = parseInt(hex.replace("#", ""), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

export function generatePNG(array: number[][], colorMap: string[], callback: (dataUrl: string) => void): void {
  const width = array[0].length;
  const height = array.length;

  // Create an off-screen canvas
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  if (ctx) {
    const imageData = ctx.createImageData(width, height);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const hexColor = colorMap[array[y][x]];
        const rgb = hexToRGB(hexColor);
        if (rgb) {
          const [r, g, b] = rgb;
          const index = (y * width + x) * 4;
          imageData.data[index] = r;
          imageData.data[index + 1] = g;
          imageData.data[index + 2] = b;
          imageData.data[index + 3] = 255; // Full opacity
        }
      }
    }

    ctx.putImageData(imageData, 0, 0);
    // Export as a data URL (base64)
    const dataUrl = canvas.toDataURL("image/png");
    callback(dataUrl);
  }
}

export function importPNG(file: File, tolerance: number, callback: (array: number[][], colorMap: string[]) => void): void {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, img.width, img.height).data;
        const colorMap: string[] = [];
        const array: number[][] = [];

        for (let y = 0; y < img.height; y++) {
          const row: number[] = [];
          for (let x = 0; x < img.width; x++) {
            const index = (y * img.width + x) * 4;
            const r = imageData[index];
            const g = imageData[index + 1];
            const b = imageData[index + 2];
            const hexColor = rgbToHex(r, g, b);

            const colorIndex = addColorToMap(hexColor, colorMap, tolerance);
            row.push(colorIndex);
          }
          array.push(row);
        }

        callback(array, colorMap);
      }
    };
    img.src = e.target?.result as string;
  };
  reader.readAsDataURL(file);
}

function colorsAreSimilar(color1: [number, number, number], color2: [number, number, number], tolerance: number): boolean {
  const [r1, g1, b1] = color1;
  const [r2, g2, b2] = color2;

  const distance = Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);

  return distance <= tolerance;
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((x) => Math.round(x).toString(16).padStart(2, "0")).join("");
}

function addColorToMap(hexColor: string, colorMap: string[], tolerance: number): number {
  const color = hexToRGB(hexColor);
  for (let i = 0; i < colorMap.length; i++) {
    const existingColor = hexToRGB(colorMap[i]);
    if (colorsAreSimilar(color, existingColor, tolerance)) return i;
  }
  colorMap.push(hexColor);
  return colorMap.length - 1;
}
