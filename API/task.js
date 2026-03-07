

const task2 = async () => {
  const res = await fetch('https://official-joke-api.appspot.com/random_joke');
  const joke = await res.json();
  console.log('Joke:', joke.setup, '→', joke.punchline);
};


const task1 = async () => {
  const res = await fetch('https://restcountries.com/v3.1/name/india');
  const data = await res.json();
  console.log('✅ Task 1 — Capital of India:', data[0].capital[0]);
};


const task3 = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
  const users = await res.json();
  console.log('✅ Task 3 — Users:');
  users.forEach(u => console.log(' →', u.name, '|', u.email));
};

task1();
task2();
task3();