// src/api/client.js

export function buildUrl(base, query = {}) {
    const url = new URL(base);
    for (const [k, v] of Object.entries(query)) {
      if (v === undefined || v === null) continue;
      url.searchParams.set(k, String(v));
    }
    return url.toString();
  }
  
  export async function request(url, options = {}) {
    const res = await fetch(url, options);
  
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`HTTP ${res.status} ${res.statusText} - ${text}`);
    }
  
    return res;
  }
  
  export async function getJson(url, { signal } = {}) {
    const res = await request(url, { signal });
    const ct = res.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
      throw new Error(`Expected JSON, got: ${ct}`);
    }
    return res.json();
  }
  
  export async function sendJson(url, { method = "POST", data, signal } = {}) {
    const res = await request(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
      signal,
    });
  
    if (res.status === 204) return null;
    return res.json();
  }
  
  export async function fetchWithTimeout(url, init = {}, timeoutMs = 8000) {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), timeoutMs);
  
    try {
      const res = await fetch(url, { ...init, signal: controller.signal });
      return res;
    } finally {
      clearTimeout(t);
    }
  }
  
  export async function getJsonWithTimeout(url, { timeoutMs = 8000 } = {}) {
    const res = await fetchWithTimeout(url, {}, timeoutMs);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }
  
  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  
  export async function getJsonWithRetry(url, { retries = 2 } = {}) {
    let attempt = 0;
    while (true) {
      try {
        const res = await fetch(url);
  
        if (!res.ok) {
          const retryable = [502, 503, 504].includes(res.status);
          if (retryable && attempt < retries) {
            attempt++;
            await sleep(200 * 2 ** (attempt - 1));
            continue;
          }
          const text = await res.text().catch(() => "");
          throw new Error(`HTTP ${res.status} - ${text}`);
        }
  
        return await res.json();
      } catch (err) {
        if (err.name !== "AbortError" && attempt < retries) {
          attempt++;
          await sleep(200 * 2 ** (attempt - 1));
          continue;
        }
        throw err;
      }
    }
  }
  