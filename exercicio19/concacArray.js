const a1 = [1,2,3]
const a2 = [4,5,6]
//const a3 = a1.concat(a2)
const a3 = [...a1,99, ...a2, ...[1,2,3]]

console.log(a3)
console.log(typeof a3)