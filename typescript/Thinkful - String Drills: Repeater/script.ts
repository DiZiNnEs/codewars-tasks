export const repeater = (str: string, n: number): string => {
  let result = ''
  for (let k = 0; k < n; k++) {
    result += str;
  }
  return result
}

console.log(repeater('a', 5))

// best solution
const repeat2 = (str: string, n: number): string => str.repeat(n)
