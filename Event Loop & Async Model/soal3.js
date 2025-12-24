// // Soal Praktik: Tebak Output
// Soal 3
// console.log("start");
// setTimeout(() => {
//   console.log("timeout");
// }, 0);
// for (let i = 0; i < 100000000; i++) {} // loop berat (simulasi blocking)
// console.log("end");

console.log("start");
setTimeout(() => {
  console.log("timeout");
}, 0);
// for (let i = 0; i < 100000000; i++) {} // loop berat (simulasi blocking)
console.log("end");

// Output
// start
// end
// timeout
