// Filter Kata Lebih dari 4 Huruf

// Ambil hanya string yang memiliki panjang lebih dari 4 karakter.

// Contoh:
// ["apel", "pisang", "teh", "semangka"] → ["pisang", "semangka"]

const filterKataPanjang = arr =>
    arr.filter(kata => kata.length > 4);
  
  // Contoh penggunaan
  const data = ["apel", "pisang", "teh", "semangka"];
  console.log(filterKataPanjang(data));
  // ["pisang", "semangka"]
  