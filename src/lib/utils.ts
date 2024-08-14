type Position = "above" | "below" | "left" | "right" | "not adjacent";
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

export const decToLetter = (dec: number): string => String.fromCharCode(97 + dec);

export const letterToDec = (l: string): number => l.charCodeAt(0) - 97;

export function splitString(input: string): { numbers: number[]; letters: string[] } {
  const splitString: RegExpMatchArray | null = input.match(/(\d+|[a-z])/g);
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

  return { numbers, letters };
}

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isValidHexColor(color: string): boolean {
  // Regular expression to match 6-digit hex color codes, with optional leading '#'
  const hexRegex = /^#?([a-fA-F0-9]{6})$/;
  return hexRegex.test(color);
}

function hexToRGB(hex: string): [number, number, number] | null {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
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

export function importPNG(file: File, callback: (array: number[][], colorMap: string[]) => void): void {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      if (img.width > 100 || img.height > 100) {
        alert("Error: Image dimensions must be at most 100x100 pixels.");
        return;
      }

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
            const a = imageData[index + 3];
            const hexColor = rgbaToHex(r, g, b, a);

            let colorIndex = colorMap.indexOf(hexColor);
            if (colorIndex === -1) {
              if (colorMap.length >= 16) {
                alert("Error: Image must not contain more than 16 unique colors.");
                return;
              }
              colorMap.push(hexColor);
              colorIndex = colorMap.length - 1;
            }
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

function rgbaToHex(r: number, g: number, b: number, a: number): string {
  return (
    "#" +
    [r, g, b, a]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
      .slice(0, 6)
  );
}
