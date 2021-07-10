function filter_list(l) {
  let list_ = []
  for (let element of l) {
    if (typeof element === "string") {

    } else {
      list_.push(element)
    }
  }

  return list_;
}

console.log(filter_list([1,2,'a','b']))
