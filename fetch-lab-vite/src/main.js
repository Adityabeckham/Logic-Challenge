// src/main.js
import { listPosts, createPost } from "./api/endpoints.js";

const out = document.querySelector("#out");
const btnLoad = document.querySelector("#btn");

btnLoad.addEventListener("click", async () => {
  out.textContent = "Loading...";
  try {
    const data = await listPosts({ limit: 5 });
    out.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    out.textContent = `Error: ${err.message}`;
  }
});

// Contoh POST
// createPost({ title: "Hello", body: "World", userId: 1 })
//   .then(res => console.log("Created:", res))
//   .catch(err => console.error(err));
