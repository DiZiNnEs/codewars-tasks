export class Kata {
  static getCount(str: string): number {
    const arrayString: string[] = str.split('');
    console.log(arrayString)
    const vowelString = ['a', 'e', 'i', 'o', 'u']
    const sortedArray = arrayString.filter(char => new RegExp(vowelString.join("|")).test(char)).length
    return Number(sortedArray)
  }
}

console.log(Kata.getCount('abracadabra'))

