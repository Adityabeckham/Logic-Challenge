// Hitung Jumlah Angka Positif

// Diberikan array angka (positif, negatif, nol), hitung total nilai angka positif saja.

// Contoh:
// [-2, 3, 0, 5, -1] → 8

const jumlahAngkaPositif = arr =>
    arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
  
  console.log(jumlahAngkaPositif([-2, 3, 0, 5, -1])); // 8
  