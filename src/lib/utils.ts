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

export function numberToLetter(n: number): string {
	// 1 === a
	if (n === 0) return "";
	else return String.fromCharCode(96 + n);
}

export function letterToNumber(l: string): number {
	// a === 1
	if (l === "") return 0;
	else return l.charCodeAt(0) - 96;
}

export function extractPropertyFrom2DArray<T, K extends keyof T>(
	items: T[][],
	property: K
): T[K][][] {
	return items.map((innerArray) => innerArray.map((item) => item[property]));
}

export function compare2DArrays(arr1: number[][], arr2: number[][]): boolean {
	if (arr1.length !== arr2.length) return false;

	for (let i: number = 0; i < arr1.length; i++) {
		if (arr1[i].length !== arr2[i].length) return false;
		for (let j: number = 0; j < arr1[i].length; j++) if (arr1[i][j] !== arr2[i][j]) return false;
	}

	return true;
}

// prettier-ignore
export const array2DToHexString = (arr: number[][]): string =>
	arr.flat().map((num) => num.toString(16)).join("");

export const hexToNum = (hex: string): number => parseInt(hex, 16);
