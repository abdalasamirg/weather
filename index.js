navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log(lat)
    console.log(long)
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4bb573aba64022dbfaa35bb1328e0578`

    async function fet() {

        let res = await fetch(api)
        let data = await res.json()
        console.log(data)
        fetchdata(data)

    }
    fet()

});
let content = document.querySelector(".content")


function fetchdata(data) {
    content.innerHTML = `
    <div>Country:<span> ${data.sys.country}</span></div>
    <div>Country:<span> ${data.sys.country}&#176;</span></div>
    <div>city: <span>${data.name}</span></div>
    <div>state: <span>${data.weather[0].description}</span></div>
    <div>lat: <span>${data.coord.lat}</span></div>
    <div>long: <span> ${data.coord.lat}</span></div>
    <div>Wind-Speed: <span> ${data.wind.speed}  K/M</span></div>

`
}

document.appendChild