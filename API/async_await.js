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