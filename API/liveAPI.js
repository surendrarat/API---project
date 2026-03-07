const res=await fetch('https://catfact.ninja/fact');
const data=await res.json();
console.log(data);// i thinks this is give us a oject of object types senario or information 
console.log(data.fact);// this is also give me information like a set of strings 