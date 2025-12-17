const array = [3, 1, 3, 2, 1];

function duplikat(A) {
  let B = [];

  for (let i = 0; i < A.length; i++) {
    if (!B.includes(A[i])) {
      B.push(A[i]);
    }
  }
  return B.sort();
}

const hasil = duplikat(array);

console.log(hasil);
