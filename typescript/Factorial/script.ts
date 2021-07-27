export const factorial = (n: number) => {
  return Array.from(Array(n + 1).keys()).slice(1).reduce((a, b) => a * b, 1)
}

console.log(factorial(5))
