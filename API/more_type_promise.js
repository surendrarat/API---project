// promise.all () - all must succeed.

// Runs ALL in parallel. Resolves when ALL resolve.
// Rejects IMMEDIATELY if ANY one rejects (fail-fast)

const [user,posts,weather] = await Promise.all([
  fetch('/api/user').then(r => r.json()),
  fetch('/api/posts').then(r => r.json()),
  fetch('/api/weather').then(r => r.json())
]);

// ─── Promise.allSettled() ── Don't care if some fail ────────────
// Like Promise.all but NEVER rejects — gives you each result

const results = await Promise.allSettled([
  fetchUser(),
  fetchPosts(),  // This might fail — that's OK
  fetchWeather()
]);
results.forEach(result => {
  if (result.status === 'fulfilled') {
    console.log('Got:', result.value); // Success
  } else {
    console.log('Failed:', result.reason.message); // Failure
  }
});

// ─── Promise.race() ── Fastest wins ─────────────────────────────
// Resolves OR rejects with the FIRST promise to settle
// Use case: timeout! If API takes > 5s, reject
const timeout = (ms) => new Promise((_, reject) =>
  setTimeout(() => reject(new Error('Request timed out!')), ms)
);

const data = await Promise.race([
  fetch('/api/data').then(r => r.json()),
  timeout(5000) // If fetch takes > 5s, timeout wins → throws error
]);

// ─── Promise.any() ── First success wins (ES2021) ───────────────
// Like race but ignores rejections — resolves on first SUCCESS
const fastest = await Promise.any([
  fetchFromServer1(),  // Try 3 servers at once
  fetchFromServer2(),  // Use whichever responds first
  fetchFromServer3()   // (great for CDN fallbacks!)
]);