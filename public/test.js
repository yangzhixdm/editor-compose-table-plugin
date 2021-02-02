async function async1 () {
  console.log(1)
  await async2()
  console.log(3)
}

async function async2 () {
  console.log(2)
}

async1()
setTimeout(() => {
  console.log(4)
})

Promise.resolve().then(() => {
  console.log(5)
}).then(() => {
  console.log(6)
})


Promise.resolve().then(() => {

  console.log(7)
})
console.log(8)