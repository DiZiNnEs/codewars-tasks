export function maxTriSum(nums: number[]) {
  nums = nums.filter((number, index) => {
    return nums.indexOf(number) === index;
  })

  nums.sort((a, b) => a - b);

  return nums.slice(Math.max(nums.length - 3, 0)).reduce((a, b) => a + b)

}

console.log(maxTriSum([3, 2, 6, 8, 2, 3, 10,49, 50, 51, 11, 13, ]))
