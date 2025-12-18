// 3) Transform Array of Objects
// Diberikan data:
// const products = [
//   { id: 1, name: "Keyboard", price: 250000, stock: 10 },
//   { id: 2, name: "Mouse", price: 150000, stock: 0 },
//   { id: 3, name: "Monitor", price: 2000000, stock: 3 }
// ];

// Tugas:
// Buat array availableProducts yang hanya berisi produk dengan stock > 0.
// Buat array productNames yang hanya berisi name.
// Buat total nilai inventori: sum(price * stock) untuk semua produk.

const products = [
    { id: 1, name: "Keyboard", price: 250000, stock: 10 },
    { id: 2, name: "Mouse", price: 150000, stock: 0 },
    { id: 3, name: "Monitor", price: 2000000, stock: 3  }
];

let availableProducts = [];
let productNames = [];
let total = 0;

for (const product of products) {
    if (product.stock > 0) {
        availableProducts.push(product);
        productNames.push(product.name);
        total += product.price * product.stock
    }
}
  
console.log(availableProducts);
console.log(productNames);
console.log(total);