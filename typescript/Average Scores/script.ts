export const average = (scores:number[]):number | string => Number(scores.reduce((a, b) => a + b) / scores.length).toFixed()


console.log(average([49,3,5,300,7]))
