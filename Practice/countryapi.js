async function getWeather() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/name/india');
    
    // Always check if response is OK
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    
    const data = await response.json(); // Parse JSON
    console.log(data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
getWeather();