// state management pattern
// one function per state -clean ,maintaiable,debuggable

function setState(state, data = {}) {
    // Hide all state containers first
    ['#idle', '#loading', '#result', '#error', '#empty'].forEach(sel => {
        document.querySelector(sel).style.display = 'none';
    });


    // show the right one
    switch (state) {
        case 'idle':
            document.querySelector('#idle').style.display = 'block';
            break;

        case 'loading':
            document.querySelector('#loading').style.display = 'block';
            document.querySelector('#loading').style.display = 'block';
            break;

        case 'success':
            renderWeather(data);          // render function
            document.querySelector('#result').style.display = 'block';
            document.querySelector('#searchBtn').disabled = false;
            break;

        case 'error':

            document.querySelector('#error-msg').textContent = data.message;
            document.querySelector('#error').style.display = 'block';
            document.querySelector('#searchBtn').disabled = false;
            break;
        case 'empty':
            document.querySelector('#empty').style.display = 'block';
            document.querySelector('#searchBtn').disabled = false;
            break;

    }
}

// usage=dead simple:
setState('loading');
const {data,error}=await fetchWeather(city);
if(error) setState('error' , {message: error});
else setState('success',data);