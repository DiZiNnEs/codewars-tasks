const oddOrEven = (array: number[]): string => {
  const sum: number = array.reduce((a: number, b: number) => a + b, 0);
  return sum % 2 == 0 ? 'even' : 'odd';
}

console.log(oddOrEven([0, 1, 5]));
