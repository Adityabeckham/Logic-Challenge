// Soal 6 (Konversi)
// Ubah kode ini ke async/await:
// function work() {
//   return delay(300)
//     .then(() => "step 1")
//     .then((msg) => msg.toUpperCase())
//     .catch(() => "ERROR");
// }
// Target: versi async function work() yang hasilnya sama.

function work() {
    return delay(300)
    .then(() => "step 1")
    .then((msg) => msg.toUpperCase)
    .catch(() => "ERROR");
}

async function work() {
    try {
      await delay(300);
      return "step 1".toUpperCase();
    } catch (err) {
      return "ERROR";
    }
  }
  
 
  work().then(console.log);
  work().catch(console.log);