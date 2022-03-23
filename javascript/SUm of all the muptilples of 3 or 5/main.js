function findSum(n) {
  const multiplesNumbers = []
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplesNumbers.push(i)
    }
  }
  return multiplesNumbers.reduce((prev, curr) => prev + curr)    
}

console.log(findSum(10))