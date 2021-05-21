const arr = [1, 2, 3, 4, 5]
/*
  [
    {number:1,doubleNumber:2},
    {number:3,doubleNumber:6},
    {number:5,doubleNumber:10}
  ]ƒ
*/
const result = arr
	.filter((i) => i % 2 === 1)
	.map((j) => ({ number: j, doubleNumber: j * 2 }))
console.log(result)
