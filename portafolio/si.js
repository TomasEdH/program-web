let a = 1
let b = 1

setTimeout(() => {
  a = 2
}, 0)

setTimeout(() => {
  console.log(a + b)
}, 0)
setTimeout(() => {
  b = 2
}, 0)
