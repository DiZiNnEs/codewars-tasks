function compare(s1, s2) {
  if (/^\D+$/gi.test(s1) && /^\D+$/gi.test(s2)) {
    return s1.split('').map(x => x.toUpperCase().charCodeAt()).reduce((a, b) => a + b) ===
      s2.split('').map(x => x.toUpperCase().charCodeAt()).reduce((a, b) => a + b)
  }

  return true
}

console.log(compare("AD", "BC"))
