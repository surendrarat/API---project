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