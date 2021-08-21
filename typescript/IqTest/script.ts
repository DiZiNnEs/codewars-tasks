export function iqTest(numbers: string): number | any {
  const arrayOfNumber: number[] = numbers.split(' ').map(number => Number(number));

  const evens: number[] = [];
  const odds: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (arrayOfNumber[i] & 1) {
      odds.push(i + 1)
    } else {
      evens.push(i + 1)
    }
  }

  return arrayOfNumber.length == 1 ? evens[0] : odds[0]
}

console.log(iqTest("2 4 7 8 10"))
