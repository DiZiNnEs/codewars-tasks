export const specialNumber = (n: number): boolean | any => {
  const numbers: number[] = Array.from(String(n), Number)

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
      return "NOT!!"
    }
  }

  return "Special!!"
}

console.log(specialNumber(222259))
