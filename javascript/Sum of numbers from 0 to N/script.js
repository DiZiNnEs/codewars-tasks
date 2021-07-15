let SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count === 0) return '0=0';
    if (count < 0) return `${count}<0`;
    let x = 0;

    let _count = 0
    let numbers = "";
    while (x <= count) {
      (x === count) ? numbers += `${x}` : numbers += `${x}+`
      _count += x;
      x++;
    }
    return `${numbers} = ${_count}`;
  };

  return SequenceSum;

})();

console.log(SequenceSum.showSequence(6))
console.log(SequenceSum.showSequence(0))
