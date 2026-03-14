// ═══════════════════════════════════════════════════════════
//   DAY 2 CHALLENGE — Async JS Mastery
//   Paste entire block in browser console (F12)
// ═══════════════════════════════════════════════════════════

const BASE = 'https://jsonplaceholder.typicode.com';

// TASK 1: Sequential vs Parallel timing
async function task1() {
  console.group('⏱️ Task 1: Timing Comparison');

  // Sequential
  let t = Date.now();
  await fetch(`${BASE}/posts/1`).then(r=>r.json());
  await fetch(`${BASE}/posts/2`).then(r=>r.json());
  await fetch(`${BASE}/posts/3`).then(r=>r.json());
  console.log(`Sequential: ${Date.now()-t}ms`);

  // Parallel
  t = Date.now();
  await Promise.all([
    fetch(`${BASE}/posts/1`).then(r=>r.json()),
    fetch(`${BASE}/posts/2`).then(r=>r.json()),
    fetch(`${BASE}/posts/3`).then(r=>r.json())
  ]);
  console.log(`Parallel:   ${Date.now()-t}ms ← should be faster!`);
  console.groupEnd();
}

// TASK 2: Safe fetch wrapper
async function safeFetch(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { ok: true, data: await res.json() };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

async function task2() {
  console.group('🛡️ Task 2: Safe Fetch');
  const good = await safeFetch(`${BASE}/users/1`);
  const bad = await safeFetch(`${BASE}/users/9999`); // 404
  console.log('Good URL:', good.ok ? good.data.name : good.error);
  console.log('Bad URL:', bad.ok ? bad.data : bad.error);
  console.groupEnd();
}

// TASK 3: allSettled — show partial results
async function task3() {
  console.group('⚡ Task 3: Promise.allSettled');
  const results = await Promise.allSettled([
    fetch(`${BASE}/users/1`).then(r=>r.json()),
    fetch(`${BASE}/users/2`).then(r=>r.json()),
    fetch(`${BASE}/users/9999`).then(r=>{ if(!r.ok) throw Error('404'); return r.json(); })
  ]);
  results.forEach((r,i) => {
    if(r.status==='fulfilled') console.log(`✅ User ${i+1}:`, r.value.name);
    else console.log(`❌ User ${i+1}: ${r.reason.message}`);
  });
  console.groupEnd();
}

// 🚀 Run all tasks
(async () => {
  await task1();
  await task2();
  await task3();
  console.log('🏆 Day 2 Challenge Complete!');
})();