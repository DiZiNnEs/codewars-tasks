export const isUpperCase = (str: string): boolean => {
  const arrayString: string[] = str.split('').filter(char => char != ' ');
  return arrayString.every((char) => char != char.toLowerCase())
}

console.log(isUpperCase('hELLO I AM DONALD'))


// best solution :|
export function isUpperCase2(str: string) {
  return str === str.toUpperCase();
}
