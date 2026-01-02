// Soal 1
// Buat fungsi delay(ms) yang mengembalikan Promise dan resolve setelah ms milidetik.
// Ekspektasi pemakaian:
// delay(500).then(() => console.log("jalan setelah 0.5 detik"));

function delay (ms) {
  return new Promise (resolve => setTimeout(resolve, ms));
 
}

delay(500).then(() => console.log("jalan setelah 0.5 detik"));

