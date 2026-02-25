// Replace with your real API key
const apiKey = "8af363c02f82071481bb83a9ffd438dc";

// Hardcoded city for Part 1
const city = "London";

// API URL
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Fetch weather data using Axios
axios.get(url)
    .then(function (response) {
        console.log("Weather Data:", response.data);
        displayWeather(response.data);
    })
    .catch(function (error) {
        console.error("Error fetching weather:", error);
    });

// Function to display weather data
function displayWeather(data) {
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const icon = document.getElementById("weather-icon");

    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    description.textContent = `Condition: ${data.weather[0].description}`;

    const iconCode = data.weather[0].icon;
    icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}