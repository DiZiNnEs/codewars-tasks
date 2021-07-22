export const capitalize = (s: string) => {
  const array: string[] = s.split('');

  let firstArray = [];
  let secondArray = []

  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      firstArray.push(array[i].toUpperCase())
    } else {
      firstArray.push(array[i].toLowerCase())
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      secondArray.push(array[i].toLowerCase())
    } else {
      secondArray.push(array[i].toUpperCase())
    }
  }

  return [firstArray.join(""), secondArray.join("")]
}

console.log(capitalize('abcdef'))
