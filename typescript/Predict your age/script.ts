export
const predictAge = (age1:number, age2:number, age3:number,age4:number,age5:number,age6:number,age7:number,age8:number): number =>{
  let arrayAges: number[] | number = [age1, age2, age3, age4, age5, age6, age7, age8];
  let number = arrayAges.map(x => x * x).reduce((a, b) => a + b);
  return Math.floor(Math.sqrt(number) / 2)
};

console.log(predictAge(65,60,75,55,60,63,64,45))
console.log(predictAge(32,54,76,65,34,63,64,45))
