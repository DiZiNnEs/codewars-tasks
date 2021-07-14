const stray = (numbers) => {
    const func = numbers.filter((c, index) => {
        return numbers.indexOf(c) === index;
    })
}

console.log(stray([1, 1, 2]))