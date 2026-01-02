// Soal 8 (Throw dari hasil validasi)
// Buat async function validateUser(user):
// jika user.name kosong → throw "NAME_REQUIRED"
// jika user.age < 18 → throw "UNDERAGE"
// jika valid → return "OK"
// Lalu buat handler:
// try {
//   const result = await validateUser({ name: "", age: 20 });
//   console.log(result);
// } catch (e) {
//   console.log("Gagal:", e.message);
// }

async function validateUser(user) {
  if (user.name === "") throw new Error("NAME_REQUIRED");
  if (user.age < 18) throw new Error("UNDERAGE");
  return "OK";
}

(async () => {
  try {
    const result = await validateUser({ name: "", age: 20 });
    console.log(result);
  } catch (e) {
    console.log("Gagal:", e.message);
  }
})();

