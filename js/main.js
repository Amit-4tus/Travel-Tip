console.log('Main!');

import locService from './services/loc.service.js'
import mapService from './services/map.service.js'


locService.getLocs()
    .then(locs => console.log('locs', locs))



window.onload = () => {
    mapService.initMap()
        .then(() => {
            mapService.addMarker({ lat: 32.0749831, lng: 34.9120554 });
        })
        .catch(console.log('INIT MAP ERROR'));

    const elErrContainer = document.querySelector('.err-container');    

    locService.getPosition()
        .then(pos => {
            elErrContainer.classList.add('visibility-hidden');
            const posCoords = pos.coords;
            document.querySelector('.my-loc-btn').onclick = () => {
                mapService.panTo(posCoords.latitude, posCoords.longitude)
            }
        })
        .catch(err => {
            console.log('err', err);
            document.querySelector('.my-loc-btn').onclick = () => {
                elErrContainer.classList.remove('visibility-hidden');
                elErrContainer.innerText = `Oops, we could not find your location. Error: ${err.message}`;
            }
        })
}

document.querySelector('.btn').addEventListener('click', (ev) => {
    console.log('Aha!', ev.target);
    mapService.panTo(35.6895, 139.6917);
})
