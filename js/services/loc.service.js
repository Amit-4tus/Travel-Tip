
export default {
    getLocs,
    getPosition
}

// var locs = [{ lat: 11.22, lng: 22.11 }]

function getLocs(lat, lng) {
    return new Promise((resolve) => {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCw8djD1Hif_FagSIHuaLdcPXB-KgWGiiw`)
            .then(res => {
                let locName = res.data.results[1].formatted_address;
                resolve(locName);
            })
    });

}


function getPosition() {

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}