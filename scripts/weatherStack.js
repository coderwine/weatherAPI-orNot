// https://weatherstack.com

// Access key will need to be included if this project is cloned.

const baseURL = `http://api.weatherstack.com/current?access_key=${weatherStackKey}&query=`;
const histURL = `https//api.weatherstack.com/historical?access_key=${weatherStackKey}&query=`
let currentLocation = 'Indianapolis'
let degree = '&units=f'  //calls on unit of measurement

function fetchWeatherStack(e) {
    
    let buildURL = `${baseURL}${currentLocation}${degree}`;
    // e.preventDefault();
    
    fetch(buildURL)
        .then(console.log(buildURL))
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => setItems(data))
        .catch((error) => {
            console.log('Errors Suck: ', error);
        })

    
}

fetchWeatherStack()

function setItems(data) {
    // console.log('Current: ', data.current)
    console.log('Temp: ', data.current.temperature)
    console.log('Humidity: ', data.current.humidity)
    console.log('Precip: ', data.current.precip)
    console.log('UV: ', data.current.uv_index)
    console.log('Wind Speed: ', data.current.wind_speed)
    console.log('Wind Direction: ', data.current.wind_dir)
    console.log('Description: ', data.current.weather_descriptions[0])
    console.log('icon: ', data.current.weather_icons[0])

    // console.log('Location: ', data.location)
    console.log('City: ', data.location.name) //City
    console.log('State: ', data.location.region) //State
}