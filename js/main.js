
import locService from './services/loc.service.js'
import mapService from './services/map.service.js'
import weatherService from './services/weather.service.js'


// locService.getLocs()
//     .then(locs => console.log('locs', locs))

window.onload = () => {
    const elErrContainer = document.querySelector('.err-container');    

    mapService.initMap()
        .then(() => {
            elErrContainer.classList.add('visibility-hidden');
            // document.querySelector('.search-loc-btn').onclick = () => {
            //     const searchVal = document.querySelector('.search-loc-input').value;
                
            // };
        })
        .catch(err => {
            elErrContainer.classList.remove('visibility-hidden');
            elErrContainer.innerText = `Oops, we could not load the map. Error: ${err.message}`;
        });

    locService.getPosition()
        .then(pos => {
            elErrContainer.classList.add('visibility-hidden');
            const userLat = pos.coords.latitude;
            const userLng = pos.coords.longitude;
            document.querySelector('.my-loc-btn').onclick = () => {
                mapService.panTo(userLat, userLng)
                locService.getLocs(userLat, userLng)
                    .then(locs => document.querySelector('.curr-loc-desc').innerText = locs)
                weatherService.getData(`http://api.openweathermap.org/data/2.5/weather?lat=${posCoords.latitude}&lon=${posCoords.longitude}&APPID=7e24799a8597cc7161903936f5c2dabc&units=metric`, renderWeather);
            }
        })
        .catch(err => {
            document.querySelector('.my-loc-btn').onclick = () => {
                elErrContainer.classList.remove('visibility-hidden');
                elErrContainer.innerText = `Oops, we could not find your location. Error: ${err.message}`;
            }
        })
}

// document.querySelector('.btn').addEventListener('click', (ev) => {
//     console.log('Aha!', ev.target);
//     mapService.panTo(35.6895, 139.6917);
// })

function renderWeather(data) {
    let name = data.name;
    let temp = data.main.temp;
    let iconScr = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let description = data.weather[0].description;
    let windSpeed = data.wind.speed;
    document.querySelector('.weather-info').innerHTML = `
    <img class="icon" src="${iconScr}">
    <span class="name">${name}:</span>
    <span class="description">${description}</span>
    <span class="temp">Temperature: ${temp}°C</span>
    <span class="wind">Wind Speed: ${windSpeed}M/s</span>
    `;
    console.log(data);
}