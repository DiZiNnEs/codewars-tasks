export function maxTriSum(nums: number[]) {
  nums = nums.filter((number, index) => {
    return nums.indexOf(number) === index;
  })

  nums.sort((a, b) => a - b);

  return nums.slice(Math.max(nums.length - 3, 0)).reduce((a, b) => a + b)

}


export function maxTriSum2(nums: number[]) {
  return nums
    .filter((number, index) => nums.indexOf(number) === index)
    .sort((a, b) => a - b)
    .slice(Math.max(nums.length - 3, 0))
    .reduce((a, b) => a + b)
}

console.log(maxTriSum2([1, 2, 3, 4]))
