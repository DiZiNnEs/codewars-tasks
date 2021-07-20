export class Kata {
  static findLongest(array:number[]):number {
    return array.reduce((a, b) => Math.max(a, b))
  }
}

console.log(Kata.findLongest([1, 200, 3]))
