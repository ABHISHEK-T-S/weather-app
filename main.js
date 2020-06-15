function getWeather(city) {
  let temperature = document.getElementById("temp");
  let humidity = document.getElementById("humidity");
  let wind = document.getElementById("wind");
  let pressure = document.getElementById("pres");



    let url =
    "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&lang=en&appid=06ce5938ce2ea2a5951e0f6bc624cb7b";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let temp = data.main.temp;
        temperature.innerHTML = temp + "  ° c";
        let humidi = data.main.humidity;
        humidity.innerHTML=humidi+"  %";
        let windval = data.wind.speed;
        wind.innerHTML=windval+"  km/hr";
        let presval = data.main.pressure;
        pressure.innerHTML=presval+"  pa";
        let citytitle= document.getElementById("titlecity1");
        citytitle.innerHTML=city;

        
      });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

function myfunction(){

  let x = document.getElementById("city").value;


getWeather(x);
}