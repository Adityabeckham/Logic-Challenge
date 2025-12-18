// 1) Akses dan Update Properti
// Diberikan object:
// const user = {
//   id: 12,
//   name: "Alya",
//   email: "alya@mail.com",
//   isActive: false
// };

// Tugas:
// Ubah isActive menjadi true.
// Tambahkan properti role dengan nilai "admin".
// Hapus properti email.
// Buat output string: "Alya (id: 12) - admin"

const user  = {
    id: 12,
    name: "Alya",
    email: "alya@mail.com",
    isActive: false
}

user.isActive = true;
user.role = "admin";
delete user.email;

console.log(`${user.name} (id: ${user.id}) - ${user.role}`);