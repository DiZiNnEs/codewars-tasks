export function noOdds(values: number[]): number[] {
  return values.filter(x => x % 2 == 0)
}
