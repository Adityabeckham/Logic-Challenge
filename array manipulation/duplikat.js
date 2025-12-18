// Hapus Duplikat Tapi Tetap Urutan

// Diberikan array A. Buat array baru yang hanya menyimpan kemunculan pertama setiap nilai (urutan tetap).
// Contoh: [3,1,3,2,1] → [3,1,2]

const array = [3,1,3,2,1];

function duplikat(A) {
  let B = [];

  for (let i = 0; i < A.length; i++) {
    if (!B.includes(A[i])) {
      B.push(A[i]);
    }
    B.sort();
  }
   console.log(B);
}                   
    
 duplikat(array);


