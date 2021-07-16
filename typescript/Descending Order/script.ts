const descendingOrder = (n: number): number => Number(Array.from(n.toString()).map(x => Number(x)).sort((a, b) => b - a).join(""))


// best practice
export const descendingOrder2 = (num: number): number => {
  // Casts the `num` variable into a string, splits the string into an array of digits, and casts the type to an array of numbers.
  const splitDigits: Array<number> = num.toString().split("").map(Number);

  // Sorts the `splitDigits` variable from the greatest to the least value in the array and returns it as `sortedDigits`.
  const sortedDigits: ReadonlyArray<number> = Object.freeze(splitDigits.sort((previous: number, current: number) => current - previous));

  // Casts the `sortedDigits` from a number array into a string array, reduces the array into a single string, and casts it into a number.
  const sortedNumber: number = Number(sortedDigits.map(String).reduce((previous: string, current: string) => previous + current));

  // Returning our final results. Should result in a single variable of the number type that is sorted from greatest to least.
  return sortedNumber;
};
