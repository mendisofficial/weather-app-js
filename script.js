const apiKey = "50b56474f621b4387afe974ef514c11a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=colombo";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
}

checkWeather();