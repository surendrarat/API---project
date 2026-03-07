const response= await fetch('https://randomuser.me/api/?nat=in');
const data=await response.json();
const user=data.results[0]; //array take first item 
console.log(user.name.first,user.location.city);
console.log(user.name,user.location);
