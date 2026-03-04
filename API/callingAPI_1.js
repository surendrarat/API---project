// 3 way to call the API
//fetch() 
//this is the first way 

async function getweather() {
    try {
        const response =await fetch ('https://api.example.com/weather?city=jaipur');

        // always check if response is ok
        if(!response.ok) throw new Error (`HTTP error: ${response.status}` );
        const data =await response.json(); // parse JSON
    }
    catch (error){
        console.error('Error: ', error.message);
    }

}

getweather();


// sanding data to an API (post request)
async function createUser(userData) {
    const response =await fetch('https://api.example.com/users', {
        method : 'POST',
        headers: {
            'Content-type' : 'application/json',//tell API you're sending JSON
            'Authorization':`Bearer ${YOUR_API_KEY}` // Auth token
        },
        body:JSON.stringify(userData)// convert js object to JSON string
    });
    return response.json();
}
createUser({name:'Arjun',email:'arjun@example.com'});

// third way
//Axios (npm library)
//npm install axios - cleaner syntax , auto JSON parse

import axios from 'axios';
const getUser=async(id)=> {
    const {data}=await axios.get(`hppts://api.example.com/users/${id}`, {
        headers :{'Authorization': `Bearer ${TOKEN}`  }
    });
    console.log(data);
};

// Axios POST - auto stringfies the body!
await axios.post('/users',{name:'Arjun'});