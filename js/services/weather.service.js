export default {
    getData
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