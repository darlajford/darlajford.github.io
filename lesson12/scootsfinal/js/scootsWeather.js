// start weather summary
const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&APPID=a442aaa7bf1b55d1a3f7a66de5e262fe';

fetch(requestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    document.getElementById('condition').textContent = jsObject.weather[0].main;
    document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('humid').textContent = jsObject.main.humidity;
  });
// end weather summary

//================================= 

// begin 5 day forecast

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&APPID=a442aaa7bf1b55d1a3f7a66de5e262fe&units=imperial';

fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    let fiveDayFC = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));

    let weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
    let day = 0;
    fiveDayFC.forEach(forecast => {
      let d = new Date(forecast.dt_txt);
      document.getElementById(`weekday${day+1}`).textContent = weekdays[d.getDay()];
      day++;
    });
    for (let index = 0; index < fiveDayFC.length; index++) {
      const imagesrc = 'https://openweathermap.org/img/w/' + fiveDayFC[index].weather[0].icon + '.png';
      const desc = fiveDayFC[index].weather[0].description;
      document.getElementById(`icon${index+1}`).setAttribute('src', imagesrc);
      document.getElementById(`icon${index+1}`).setAttribute('alt', desc);
      document.getElementById(`day${index+1}`).innerHTML = `${Math.round(fiveDayFC[index].main.temp)}` + '\xB0 F';
    }
  });
// end 5 day forecast