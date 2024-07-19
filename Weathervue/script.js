document.addEventListener('DOMContentLoaded', function() {
    fetchWeatherData();
});

function fetchWeatherData() {
    // For demonstration purposes, using mock data
    const mockData = {
        location: "Indore, India",
        date: "Thursday, July 19, 2024",
        temperature: "25°C",
        description: "Partly cloudy",
        humidity: "60%",
        windSpeed: "5 km/h"
    };

    // Simulating API call delay
    setTimeout(function() {
        displayWeatherData(mockData);
    }, 1000);
}

function displayWeatherData(data) {
    document.getElementById('location').textContent = data.location;
    document.getElementById('date').textContent = data.date;
    document.getElementById('temperature').textContent = data.temperature;
    document.getElementById('description').textContent = data.description;
    document.getElementById('humidity').textContent = data.humidity;
    document.getElementById('wind-speed').textContent = data.windSpeed;
}
