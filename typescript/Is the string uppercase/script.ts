export const isUpperCase = (str: string): boolean => {
  const arrayString: string[] = str.split('').filter(char => char != ' ');
  for (const char of arrayString) {
    if (char == char.toLowerCase()) {
      return false;
    } else {
      continue;
    }
  }

  return true;
}

console.log(isUpperCase('hELLO I AM DONALD'))
