// Tambah 1 ke Semua Angka Kecuali 0

// Jika elemen adalah angka dan bukan 0, tambahkan 1.
// Angka 0 tetap.

// Contoh:
// [0, 2, 5] → [0, 3, 6]

const tambahSatuKecualiNol = arr =>
  arr.map(n => (typeof n === "number" && n !== 0) ? n + 1 : n);

// Contoh
console.log(tambahSatuKecualiNol([0, 2, 5]));
// [0, 3, 6]
