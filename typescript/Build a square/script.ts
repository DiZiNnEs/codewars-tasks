export const generateShape = (int: number): string => {
 let arr: string[] = [];
 for (let x = 0; x < int; x++) {
   arr.push('+'.repeat(int));
 }
 return arr.join('\n');
}

console.log(generateShape(2))
