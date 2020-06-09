// https://weatherstack.com

// Access key will need to be included if this project is cloned.

const baseURL = `http://api.weatherstack.com/current?access_key=${weatherStackKey}&query=`;
const histURL = `https//api.weatherstack.com/historical?access_key=${weatherStackKey}&query=`
let currentLocation = 'Indianapolis'
let degree = '&units=f'  //calls on unit of measurement

// Locate Elements
let cardLocation = document.querySelector(".locationDisplay");


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

    // Weather
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

    // Display
    //Keeps the icon for card when City/St are injected
    let showIcon = document.createElement('i');
    showIcon.className = "material-icons right";
    showIcon.innerText = 'more_vert';

    cardLocation.innerText = `${theWeather.location.name}, ${theWeather.location.region}` 
    cardLocation.appendChild(showIcon);

    console.log('IP FIND: ', ip);
    console.log('IP query: ', ip.query);
    console.log('IP Provider: ', ip.org);
    console.log('IP City: ', ip.city);
    console.log('IP State: ', ip.region);
    console.log('IP ISP: ', ip.isp);
}