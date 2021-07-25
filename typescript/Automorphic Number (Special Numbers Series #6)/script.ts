export const automorphic = (n: number): string => {
  const sqrt = n * n;
  return sqrt.toString().endsWith(n.toString()) ? 'Automorphic' : 'Not!!'
}

console.log(automorphic(25))
