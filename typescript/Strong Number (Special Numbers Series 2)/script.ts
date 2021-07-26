const getFactorial = (n: number): number => {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array.reduce((a, b) => a * b);
}

export const strongNumber = (num: number): string | any => {
  if (num === 1) return 'STRONG!!!!';
  const number = Array.from(num.toString(), Number)
    .map(x => getFactorial(x))
    .reduce((a, b) => a + b, 0);

  return number === num ? 'STRONG!!!!' : 'Not Strong !!';
};

console.log(strongNumber(145));
