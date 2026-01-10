// src/api/endpoints.js
import { buildUrl, getJson, sendJson } from "./client.js";

export function listPosts({ limit = 5, userId } = {}) {
  const url = buildUrl("https://jsonplaceholder.typicode.com/posts", { _limit: limit, userId });
  return getJson(url);
}

export function createPost(payload) {
  return sendJson("https://jsonplaceholder.typicode.com/posts", { method: "POST", data: payload });
}
