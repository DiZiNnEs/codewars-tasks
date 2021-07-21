const maxNumber = (n: number): number => {
  const numberArray = n.toString().split('').map(x => Number(x));
  const array = numberArray.sort((x, y ) => x - y).reverse();
  let str = '';
  for (let i = 0; i < numberArray.length; i++) {
    str += array[i];
  }
  return Number(str)
}

console.log(maxNumber(2134542329))
