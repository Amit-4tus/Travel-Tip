
export default {
    getLocs,
    getPosition
}

// var locs = [{ lat: 11.22, lng: 22.11 }]

function getLocs(lat, lng) {
    return new Promise((resolve, reject) => {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCw8djD1Hif_FagSIHuaLdcPXB-KgWGiiw`)
            .then(res => {
                resolve(res);
            })
    });

}


function getPosition() {
    console.log('Getting Pos');

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}