export const evensAndOdds = (n: number): string => {
  return n % 2 == 0 ? n.toString(2) : n.toString(16)
}
