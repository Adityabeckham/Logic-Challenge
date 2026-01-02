// Soal 2
// Buat fungsi isEvenAsync(n) yang:
// resolve dengan string "GENAP" jika n genap
// reject dengan Error "GANJIL" jika n ganjil
// Ekspektasi:
// isEvenAsync(4).then(console.log).catch(err => console.error(err.message));
// isEvenAsync(3).then(console.log).catch(err => console.error(err.message));

function isEvenAsync(n) {
    return new Promise((resolve, reject) => {
      if (n % 2 === 0) {
        resolve("GENAP");
      } else {
        reject(new Error("GANJIL"));
      }
    });
  }
  

isEvenAsync(4)
.then(console.log)
.catch(err => console.error(err.message));

isEvenAsync(3)
.then(console.log)
.catch(err => console.error(err.message));

