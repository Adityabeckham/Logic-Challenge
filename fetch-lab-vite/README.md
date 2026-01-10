# Fetch Lab Vite
  
**Fetch Lab Vite** adalah mini-lab interaktif untuk belajar **Fetch API** di browser menggunakan Vite. Proyek ini mengajarkan cara:

- Melakukan **GET / POST / PUT / DELETE** request dengan `fetch()`  
- Menangani **HTTP error vs network error** dengan benar  
- Menambahkan **timeout & cancel request** menggunakan `AbortController`  
- Membuat **wrapper request** yang rapi dan reusable  
- (Opsional) Retry selektif untuk error sementara atau network error  

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan lab ini, kamu bisa:

1. Memahami mental model Fetch API: fetch **tidak gagal** saat 404/500; hanya gagal untuk network error, CORS blocked, atau request yang dibatalkan.  
2. Membaca Response dengan aman: `res.ok`, `res.status`, `res.headers.get("content-type")`, dan hanya memanggil `res.json()` sekali.  
3. Membuat helper wrapper seperti `getJson`, `sendJson`, `fetchWithTimeout`, `getJsonWithTimeout`, `getJsonWithRetry`, dan `buildUrl`.  
4. Menangani timeout, cancel, dan retry selektif sesuai praktik real-world.  

---

## 🛠️ Setup Proyek

**Prasyarat:** Node.js 18+, browser modern (Chrome,Edge,Firefox,Safari,Opera), VS Code (disarankan).  

1. Buat project Vite vanilla:  
```bash
npm create vite@latest fetch-lab -- --template vanilla
cd fetch-lab
npm install
npm run dev
Buka browser di http://localhost:5173/.

Struktur folder:

fetch-lab-vite/
├─ public
├─ src/
│  ├─ api/
│     ├─ client.js
│     └─ endpoints.js
│  └─ main.js


💻 Lab Praktikum
Lab 1 — GET list
Tampilkan 5 post pertama dari JSONPlaceholder:
https://jsonplaceholder.typicode.com/posts?_limit=5

Lab 2 — GET dengan query builder
Ambil post userId=1 limit 5 menggunakan buildUrl().

Lab 3 — Error handling HTTP
Panggil URL yang salah, misal:
https://jsonplaceholder.typicode.com/unknown
Pastikan muncul HTTP error message.

Lab 4 — POST JSON
Kirim data:

{ "title": "Hello", "body": "World", "userId": 1 }
Endpoint: https://jsonplaceholder.typicode.com/posts

Lab 5 — Timeout
Gunakan getJsonWithTimeout(url, { timeoutMs: 1 }) untuk memaksa timeout dan tangani AbortError.

Lab 6 — Cancel request
Saat user mengetik, request lama dibatalkan menggunakan AbortController.

Lab 7 — Retry selektif
Bungkus request dengan getJsonWithRetry() dan uji dengan network error atau status 502/503/504.

🎨 Tampilan Modern & Responsif
Dark/light mode otomatis mengikuti preferensi browser

Font system-ui modern, hover animasi pada tombol dan logo

Layout responsif untuk mobile & desktop

Contoh tampilan:
<img width="2070" height="1294" alt="fetch-lab-vite" src="https://github.com/user-attachments/assets/2b229e67-5994-420d-b731-24991e9711fa" />

