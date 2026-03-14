// try / catch (recommended with async / await)

async function fetchUser(id){
    try {
        const res=await fetch (`https://api.example.com/user/${id}`);
        // fetch() only rejects on NETWORK errors ,NOT 4xx / 5xx
        // you must manually check response.ok:

        if(!res.ok){
            throw new Error (`HTTP error: ${res.status} ${res.statusText}`);
        }
        const user =await res.json();
        return user;
    }
    catch (error){
        //catches: network failurs, bad JSON , throw erros above
        if(error.name==='TypeError'){
            console.error('Network error - check your internet');
        }
        else {
            console.error('API error:',error.message);
        }
        throw error // re-thorw so the caller knows it failed
    }
    finally{
        // always runs -hide spinners , release locks , etc.
        setLoading(false);
    }
}