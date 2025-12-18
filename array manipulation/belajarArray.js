// Ambil 3 Karakter Pertama Setiap String

// Diberikan array string, ambil maksimal 3 karakter pertama dari tiap elemen.

// Contoh:
// ["apel", "pisang", "teh"] → ["ape", "pis", "teh"]

const array = ["apel","pisang","teh"];

// ambil 3 karakter pertama setiap string
const hasil = array.map(item => item.slice(0,3));

console.log(hasil);
