const solution2 = (str, ending) => {
  for (let x = 1; x <= ending.length; x++) {
    if (str.slice(-x) === ending.slice(-x)) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

// best solution
function solution(str, ending){
  return str.endsWith(ending);
}

console.log(solution('abcde', 'cde'))
