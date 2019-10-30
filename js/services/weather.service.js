export default {
    getWeather
}
function getWeather(lat, lon, renderWeather) {
    getData(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=7e24799a8597cc7161903936f5c2dabc&units=metric`, renderWeather);
}
function getData(url, cBfn, fnArg) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = () => {
        if (request.readyState != 4 || request.status != 200) return;
        var data = JSON.parse(request.responseText);
        cBfn(data, fnArg);
    }
    request.send();
}