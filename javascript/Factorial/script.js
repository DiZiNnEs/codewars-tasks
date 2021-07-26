const factorial = (n) =>
{
  if (n === 0) return 1
  if (n < 0 || n > 12) throw RangeError
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array.reduce((a, b) => a * b)
}

console.log(factorial(0))
