const countCertainElement = (arr: number[], val: number) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

export const findOdd = (xs: number[]): number | any => {
  let count = 0
  let array = xs.sort((a, b) => a - b)
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        count++
      }

    }
    if (count % 2 !== 0) {
      return array[i]
    }
  }
};


console.log(findOdd([5, 5, 5, 5, 1, 1, 1, 3, 3, 3]))
