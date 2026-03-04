// 3 way to call the API
//fetch() 

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


