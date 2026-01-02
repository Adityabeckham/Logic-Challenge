// Soal 7
// Buat fungsi divideAsync(a, b) pakai async/await:
// jika b === 0, throw new Error("DIVIDE_BY_ZERO")
// kalau tidak, return a / b
// Buat pemanggil:
// panggil divideAsync(10, 2) dan print hasil
// panggil divideAsync(10, 0) dan tangkap error, print err.message

function divideAsync(a,b) {
    if (b === 0) throw new Error("DIVIDE_BY_ZERO");
    return a / b;
}

divideAsync(10, 2)
.then(console.log)
.catch(err => console.error(err.message));

divideAsync(10, 0)
.then(console.log)
.catch(err => console.error(err.message));