const ApiKey = '68d85039655ee01fbf2ddc0406f42299';
const Url = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

async function checkWeather(city) {
    try {
        const response = await fetch(`${Url}&q=${city}&appid=${ApiKey}`);
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        const weatherIcon = document.querySelector(".weather-icon");
        if (data.weather && data.weather.length > 0) {
            const weatherMain = data.weather[0].main.toLowerCase();
            if (weatherMain === "clouds") {
                weatherIcon.src = 'images/clouds.png';
            } else if (weatherMain === "rain") {
                weatherIcon.src = 'images/rain.png';
            } else if (weatherMain === "drizzle") {
                weatherIcon.src = 'images/drizzle.png';
            } else if (weatherMain === "snow") {
                weatherIcon.src = 'images/snow.png';
            } else if (weatherMain === "mist") {
                weatherIcon.src = 'images/mist.png';
            }
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to search weather for the city entered by the user
function searchWeather() {
    const cityInput = document.getElementById("cityInput");
    const city = cityInput.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name.");
    }
}

// Display weather for Delhi when the webpage is loaded
window.onload = function() {
    checkWeather("Aligarh");
};
