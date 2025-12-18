// 4) Grouping Data (Object sebagai “map”)
// Diberikan data transaksi:
// const transactions = [
//   { userId: 1, amount: 50000 },
//   { userId: 2, amount: 100000 },
//   { userId: 1, amount: 70000 },
//   { userId: 3, amount: 30000 },
//   { userId: 2, amount: 20000 }
// ];

// Tugas:
//  Buat object hasil totalByUser seperti:
// {
//   1: 120000,
//   2: 120000,
//   3: 30000
// }

const transactions = [
  { userId: 1, amount: 50000 },
  { userId: 2, amount: 100000 },
  { userId: 1, amount: 70000 },
  { userId: 3, amount: 30000 },
  { userId: 2, amount: 20000 },
];

const hasil = {};

for (const transaction of transactions) {
    if (!hasil[transaction.userId]) {
        hasil[transaction.userId] = 0;
    }
    hasil[transaction.userId] += transaction.amount;
}

for (const userId in hasil) {
    console.log(`${userId}: ${hasil[userId]}`)
}
  
