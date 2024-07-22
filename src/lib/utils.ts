type Position = "above" | "below" | "left" | "right" | "not adjacent";
export const getAdjacentDirection = (x1: number, y1: number, x2: number, y2: number): Position => {
	const dx = Math.abs(x1 - x2);
	const dy = Math.abs(y1 - y2);

	if (dx === 1 && dy === 0) {
		return x2 > x1 ? "below" : "above";
	} else if (dx === 0 && dy === 1) {
		return y2 > y1 ? "right" : "left";
	}

	return "not adjacent";
};

export function getRandomHexColor(length: number = 6): string {
	const characters = "0123456789ABCDEF";
	let result = "#";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters[randomIndex];
	}
	return result;
}

export function numberToLetter(n: number): string {
	// 1 === a
	if (n === 0) return "";
	return String.fromCharCode(96 + n);
}

export function letterToNumber(l: string): number {
	if (l === "") return 0;
	return l.charCodeAt(0) - 96;
}

export function hexToDecimal(hex: string): number {
	return parseInt(hex, 16);
}

export function extractPropertyFrom2DArray<T, K extends keyof T>(
	items: T[][],
	property: K
): T[K][][] {
	return items.map((innerArray) => innerArray.map((item) => item[property]));
}

export function compare2DArrays(arr1: number[][], arr2: number[][]): boolean {
	// Check if the outer arrays have the same length
	if (arr1.length !== arr2.length) {
		return false;
	}

	// Check if each corresponding inner array has the same length and elements
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i].length !== arr2[i].length) {
			return false;
		}
		for (let j = 0; j < arr1[i].length; j++) {
			if (arr1[i][j] !== arr2[i][j]) {
				return false;
			}
		}
	}

	// If all checks pass, the arrays are equal
	return true;
}

function numberToHex(num: number): string {
	if (num < 0 || num > 15) {
		throw new Error("Number out of range (0-15)");
	}
	return num.toString(16).toUpperCase();
}

export function array2DToHexString(arr: number[][]): string {
	return arr.flat().map(numberToHex).join("");
}
