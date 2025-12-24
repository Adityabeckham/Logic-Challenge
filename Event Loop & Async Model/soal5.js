// // Soal Praktik: Tebak Output
// Soal 5
// console.log("1");

// setTimeout(() => {
//   console.log("2");
//   setTimeout(() => console.log("3"), 0);
// }, 0);

// console.log("4");

console.log("1");

setTimeout(() => {
  console.log("2");
  setTimeout(() => console.log("3"), 0);    
}, 0);

console.log("4");

// Output
// 1
// 4
// 2
// 3    