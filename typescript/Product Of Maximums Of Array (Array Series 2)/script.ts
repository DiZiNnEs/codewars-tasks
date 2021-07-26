export const maxProduct = (numbers: number[], size: number) =>
  numbers.sort((a, b) => a + b)
  .slice(-size)
  .reduce((a, b) => a * b)


console.log(maxProduct([5, 4, 3, 1, 1], 2))
