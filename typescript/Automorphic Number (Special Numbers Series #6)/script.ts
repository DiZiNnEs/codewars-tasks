export const automorphic = (n: number): string => {
  const numberLength = n.toString().length;
  const sqrt = n * n;
  return sqrt.toString().endsWith(n.toString()) ? 'Automorphic' : 'Not!!'
}

console.log(automorphic(25))
