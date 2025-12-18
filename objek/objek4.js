// 5) Nested Object + Safe Access
// Diberikan object:
// const company = {
//   name: "TechNova",
//   address: {
//     city: "Jakarta",
//     zip: "12950"
//   },
//   employees: [
//     { id: 1, name: "Budi", skills: ["JS", "React"] },
//     { id: 2, name: "Siti", skills: ["Python"] }
//   ]
// };

// Tugas:
// Ambil city.
// Ambil skill kedua dari karyawan pertama (hasil: "React").
// Tambahkan skill "Node.js" ke karyawan kedua.
// Buat function getEmployeeNameById(company, id) yang mengembalikan nama karyawan berdasarkan id (jika tidak ada, kembalikan "Not found").

const company = {
  name: "TechNova",
  address: {
    city: "Jakarta",
    zip: "12950",
  },
  employees: [
    { id: 1, name: "Budi", skills: ["JS", "React"] },
    { id: 2, name: "Siti", skills: ["Python"] },
  ],
};

console.log(company.employees[0].skills[1]);
company.employees[1].skills.push("Node.js");
console.log(company.employees);

function getEmployeeNameById(company,id) {
    for (const employee of company.employees) {
        if (employee.id === id) {
            return employee.name;
        }
    }
    return "Not found";

}

console.log(getEmployeeNameById(company, 1));
console.log(getEmployeeNameById(company, 3));