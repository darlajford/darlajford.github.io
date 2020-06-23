const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=a442aaa7bf1b55d1a3f7a66de5e262fe';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('wind').textContent = jsObject.wind.speed;
    document.getElementById('condition').textContent = jsObject.weather[0].main;

    //wind chill factor
    // --------------------------------------
    function chill() {
      let temp = parseFloat(document.getElementById("current-temp").textContent);
      let wind = parseFloat(document.getElementById("wind").textContent);

      if (temp <= 50 && wind > 3) {
        let f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        document.getElementById("chill").innerHTML = parseInt(f);
      } else {
        document.getElementById("chill").innerHTML = "N/A";
      }
    }
    chill()
    // -------------------------------------
    //weather icons and description
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);


  });