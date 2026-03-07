const postId=1;
const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
const post =await response.json();
console.log(post.title,post.boby);