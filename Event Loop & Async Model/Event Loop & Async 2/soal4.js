// Soal 4 (Return Promise di then)
// Buat fungsi:
// function addAsync(a, b) {
//   // return Promise yang resolve ke a+b setelah 200ms
// }
// Lalu gunakan chaining:
// ambil hasil addAsync(2,3) → 5
// lanjut addAsync(hasil, 10) → 15
// print 15

function addAsync(a, b) {
   return new Promise((resolve)=> setTimeout((resolve(a + b)), 200));   
}


addAsync(2,3)
.then((result) => {
    return addAsync(result, 10);
})
.then((finalResult) => {
    console.log(finalResult);
})