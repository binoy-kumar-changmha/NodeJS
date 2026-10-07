// const Error = () => {
//   console.log('Hello testingSyntax')
// }

// logical Error
// const Error = () => {
//   const num = 10;
//   if (num = 5) {
//     console.log(`Number is ${num}`);
//   }
// }

// logical error, most hard
// const Error = () => {
//   let num = 10;
//   if (num = 5)
//     console.log(`Number is ${num}`);
// }

// runtime error
const Error = () => {
  const num = 10;
  if (num = 5)
    console.log(`Number is ${num}`);
}

module.exports = Error;