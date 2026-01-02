// Soal 3 (Chaining)
// Diberikan:
// function getNumber() {
//   return Promise.resolve(5);
// }
// Buat chain .then() sehingga output akhirnya adalah ((5 * 2) + 10) = 20.
// Ekspektasi:
// getNumber()
//   // chain di sini
//   .then(result => console.log(result)); // 20

function getNumber() {
    return Promise.resolve(5);
}

getNumber()
.then(result => result * 2)
.then(result => result + 10)
.then(result => console.log(result)); // 20
