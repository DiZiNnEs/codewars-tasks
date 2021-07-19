export function findAverage(array: number[]): number {
  const sum: number = array.reduce((a, b) => a + b);
  return Number((sum / array.length).toFixed(0));
}

console.log(findAverage([3, 3, 4]))
