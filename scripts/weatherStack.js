// https://weatherstack.com

// Access key will need to be included if this project is cloned.

const baseURL = `http://api.weatherstack.com/current?access_key=${weatherStackKey}&query=`;
const histURL = `https//api.weatherstack.com/historical?access_key=${weatherStackKey}&query=`
let currentLocation = 'Indianapolis'
let degree = '&units=f'  //calls on unit of measurement

function fetchWeatherStack(ip) {
    
    let buildURL = `${baseURL}${currentLocation}${degree}`;
    let fetchIP = ip;

    // e.preventDefault();
    
    fetch(buildURL)
        .then(console.log(buildURL))
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => setItems(data, fetchIP))
        .catch((error) => {
            console.log('fetchWeatherStack Errors: ', error);
        })
    
}

// fetchWeatherStack()

function ipFinder() {
    let ipFind = `http://ip-api.com/json/`;
    
        fetch(ipFind)
            .then(response => response.json())
            .then(ipInfo => fetchWeatherStack(ipInfo))
            .catch(error => console.log('ipFinder Errors: ', error));
}


ipFinder();

function setItems(weather, ip) {

    let theWeather = weather;

    console.log('Current: ', theWeather.current)
    console.log('Temp: ', theWeather.current.temperature)
    console.log('Humidity: ', theWeather.current.humidity)
    console.log('Precip: ', theWeather.current.precip)
    console.log('UV: ', theWeather.current.uv_index)
    console.log('Wind Speed: ', theWeather.current.wind_speed)
    console.log('Wind Direction: ', theWeather.current.wind_dir)
    console.log('Description: ', theWeather.current.weather_descriptions[0])
    console.log('icon: ', theWeather.current.weather_icons[0])

    console.log('Location: ', theWeather.location)
    console.log('City: ', theWeather.location.name) //City
    console.log('State: ', theWeather.location.region) //State

    console.log('IP FIND: ', data);
    console.log('IP query: ', data.query);
    console.log('IP Provider: ', data.org);
    console.log('IP City: ', data.city);
    console.log('IP State: ', data.region);
    console.log('IP ISP: ', data.isp);
}