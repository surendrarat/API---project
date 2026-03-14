// create a promise

const myPromise=new Promise ((resolve,reject) => {
    // this function runs immediately (synchronously)
    const success=true;
    if(success){
        resolve("Here's your data!");

    } else{
        reject (new Error("Something went wrong"));
    }
} );

// consuming a promise 
myPromise
.then(data =>{
    console.log(data);//here's your data!
    return data.toUpperCase();//can chian-returns new Promise

})
.then(upperData => {
    console.log(upperData)//HERE's your data
})
.catch(err => {
    console.error("Error:",err.message);// catches any error in the chain
})
.finally(()=>{
    console.log("Always runs - success OR failure"); // Good for cleanup
});

//Real fetch example with promise chian

fetch('https://api.example.com/users')//Retruns Promise <Response>
.then(Response =>{
    if(!Response.ok) throw new Error(`Status: ${Response.status}`);
    return Response.json();

})
.then(users => console.log(users)) // got the actual data
.catch(err=> console.error(err)) // network or parse error
.finally(() => hideLoadingSpinner()); // Always hide spinner
