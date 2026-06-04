

const numberArray: number[] = [1,2,3,4,5];


numberArray.push(6)
console.log(numberArray)

const numberArray2: (number | string)[]  = [ ...numberArray ];

const numberArray3 = numberArray.map( number => number * 2 )

console.log(numberArray3)