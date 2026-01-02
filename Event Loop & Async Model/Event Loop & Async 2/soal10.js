// Soal 10 (Bedakan error sync vs async)
// Apa bedanya hasil error handling untuk dua potongan ini? Jelaskan singkat.
// A:
// try {
//   Promise.reject(new Error("X"));
// } catch (e) {
//   console.log("caught", e.message);
// }
// B:
// try {
//   await Promise.reject(new Error("X"));
// } catch (e) {
//   console.log("caught", e.message);
// }

// Kasus A: try { Promise.reject() } catch {}
// t0: try start
// t1: Promise reject (async)
// t2: try end → catch tidak menangkap
// t3: Promise reject terjadi (tidak tertangkap)

// Kasus B: try { await Promise.reject() } catch {}
// t0: async function start
// t1: await Promise.reject() pause
// t2: Promise reject → throw error di await
// t3: catch menangkap → log error

// Jadi intinya:
//  Promise.reject() → async → try/catch tidak menangkap

// await Promise.reject() → pause → try/catch menangkap

// Kuncinya: await “menjadikan” Promise reject terasa synchronous di baris itu