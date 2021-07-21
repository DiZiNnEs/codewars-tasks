export const minValue = (values: number[]): number => {
  values = values.filter((char, index) => values.indexOf(char) === index);
  // @ts-ignore
  return Number(values.sort((a, b) => a - b).reduce((a, b) => String(a) + String(b)))
};

console.log(minValue([5, 7, 5, 9, 7]))
