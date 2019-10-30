export default {
    getLocs,
    getPosition,
    getLocByName
}

// var locs = [{ lat: 11.22, lng: 22.11 }]

function getLocByName(name) {
    if(!name) return Promise.reject('Please Enter a Place')
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=AIzaSyCw8djD1Hif_FagSIHuaLdcPXB-KgWGiiw`)
        .then(res => {
            return res.data.results[0].geometry.location
        })
        .catch(() => {
            throw 'Please Enter A Valid Place'
        })
}

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