// 2) Loop Object dan Hitung Total
// Diberikan object belanja:
// const cart = {
//   apple: 3,
//   orange: 2,
//   mango: 5
// };

// Tugas:
// Hitung total item (hasilnya 3+2+5).
// Buat array hasil seperti ini (urutan bebas):
//  ["apple: 3", "orange: 2", "mango: 5"]

const cart = {
    apple: 3,
    orange: 2,
    mango: 5
}

let total = 0;

const hasil = [];

for (const item in cart) {
    total += cart[item];
    hasil.push(`${item}: ${cart[item]}`);

}

console.log(total);
console.log(hasil);