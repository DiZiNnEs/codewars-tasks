function getDivisorsCnt(n) {
    let array = [];
    for (let x = 1; x <= n; x++) {
        if (n % x === 0) {
            array.push(x);
        } else {
            continue;
        }
    }
    return array.length
}

console.log(getDivisorsCnt(30))
