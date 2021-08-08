export const countSmileys = (arr: string[]): number => {
  const validSmileys = [":)",";)",":D",";D",":-D",":~D",":-)",":~)",";~D",";~)",";-D",";-)"]
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (validSmileys.includes(arr[i])) {
      count++
    }
  }
  return count;
}

console.log(countSmileys([':D',':~)',';~D',':)'])) // 4
