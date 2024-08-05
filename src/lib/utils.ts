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
