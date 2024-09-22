function geoSuccess(arg) {
  const API_KEY = "3f5c212bc954ceddd2c7b611cbcabdbe";
  const lati = arg.coords.latitude;
  const long = arg.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weatherTemp = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weatherTemp.innerText = `/ ${data.weather[0].main} / ${data.main.temp}℃`;
    });
}

function geoError() {
  alert("can't find you. No weather for you:(");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
