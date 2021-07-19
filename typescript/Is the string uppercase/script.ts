export const isUpperCase = (str: string): boolean =>
  Array.from(str)
    .filter(char => char != ' ')
    .every(char => char != char.toLowerCase())

console.log(isUpperCase('hELLO I AM DONALD'))


// best solution :|
export function isUpperCase2(str: string) {
  return str === str.toUpperCase();
}
