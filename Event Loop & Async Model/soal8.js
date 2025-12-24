// // Soal Praktik: Tebak Output
// Soal 8
// function logLater(msg) {
//   setTimeout(() => console.log(msg), 0);
// }
// console.log("1");
// logLater("2");
// console.log("3");

function logLater(msg) {
  setTimeout(() => console.log(msg), 0);
}
console.log("1");
logLater("2");
console.log("3");

// Output
// 1
// 3
// 2