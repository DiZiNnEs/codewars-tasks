function compareNumbers(a: number, b: number) {
  return a - b;
}

export const isSortedAndHow = (nums: number[]) => {
  const sortedArray = [...nums].sort().sort((a, b) => a - b);
  if (JSON.stringify(sortedArray) === JSON.stringify(nums)) {
    return 'yes, ascending';
  } else if (JSON.stringify(sortedArray.reverse()) === JSON.stringify(nums)) {
    return 'yes, descending'
  }

  return 'no'
}

console.log(isSortedAndHow([1, 2]))
