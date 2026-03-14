// basic async/await
async function getUser(id) {
    const response = await fetch(`https://api.example.com/user/${id}`);
    const user =await response.json();
    return user;//async function always return a promise
}

// calling an anync function -still returns a promise
getUser(1).then(user=> console.log(user));//option 1: .then()
const user=await getUser(1); // option 2 : await (inside async fn)


// arrow function syntex
const fetchPosts=async () =>{
    const res= await fetch(
    'https://jsonplaceholder.typicode.com/posts'
    );
    return res.json();
};

// important -
// sequenitial vs  parallel 
//sequential -total time =A+B (slower)
async function sequential() {
    const user = await fetchUser(); // Waits is
    const posts =await fetchPosts(); // then waits is more
    // total : ~2 seconds 
}

// paraller - total time =max (A,B)(faster!)

async function parallel() {
    const [user , posts] =await Promise.all([
        fetchUser(),
        fetchPosts()
    ]);
    // total: ~ 1 second (they run together!)
}

// returning values
async function getTemperature(city) {
    const res=await fetch (`/api/weather?city=${city}`)
    const data = await res.json();
    return data.temp; // returns a Promise that resolves to the temp number
}   

const temp = await getTemperature('jaipur');
console.log(`Temperature: ${temp}°C`);