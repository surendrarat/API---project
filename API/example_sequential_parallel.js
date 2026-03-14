async function sequential() {
  const t0 = Date.now();
  const p1 = await fetch('https://jsonplaceholder.typicode.com/posts/1').then(r=>r.json());
  const p2 = await fetch('https://jsonplaceholder.typicode.com/posts/2').then(r=>r.json());
  const p3 = await fetch('https://jsonplaceholder.typicode.com/posts/3').then(r=>r.json());
  return { time: Date.now() - t0, posts: [p1,p2,p3] };
}
async function parallel() {
  const t0 = Date.now();
  const [p1,p2,p3] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(r=>r.json()),
    fetch('https://jsonplaceholder.typicode.com/posts/2').then(r=>r.json()),
    fetch('https://jsonplaceholder.typicode.com/posts/3').then(r=>r.json())
  ]);
  return { time: Date.now() - t0, posts: [p1,p2,p3] };
}

// Error handling
async function safeFetch(url){
    try{
        const res=await fetch(url);
        if(!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
            return await res.json();

    }
    catch(err){
        return {
            error:err.message
        };
    }
}