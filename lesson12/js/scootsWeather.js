
// start weather summary
const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&APPID=a442aaa7bf1b55d1a3f7a66de5e262fe';

fetch(requestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    document.getElementById('condition').textContent = jsObject.weather[0].main;
    document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('humid').textContent = jsObject.main.humidity;
   } );
// end weather summary

//================================= 

// begin 5 day forecast

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&APPID=a442aaa7bf1b55d1a3f7a66de5e262fe&units=imperial';

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
        let fiveDayFC = jsObject.list.filter(x => x.dt_txt.includes('15:00:00'));

        let weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;
        fiveDayFC.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            //document.getElementById(`forecast${day+1}`).textContent = forecast.main.temp.toFixed(0);
            document.getElementById(`weekday${day+1}`).textContent = weekdays[d.getDay()]; day++;
        });
        for (let index = 0; index < fiveDayFC.length; index++) {
            const imagesrc = 'https://openweathermap.org/img/w/' + fiveDayFC[index].weather[0].icon + '.png';
            const desc = fiveDayFC[index].weather[0].description;
            document.getElementById(`icon${index+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${index+1}`).setAttribute('alt', desc);
            document.getElementById(`day${index+1}`).innerHTML = `${Math.round(fiveDayFC[index].main.temp)}` + '\xB0 F' ;
        }
    });
  //   const forecastURL =
  //   'https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=a442aaa7bf1b55d1a3f7a66de5e262fe&units=imperial';
    
  // fetch(forecastURL)
  //   .then((response) => response.json())
  //   .then((fcinfo) => {
  //     console.log(fcinfo);
  //     const fclist = fcinfo['list'];
  //     const fcdate = new Date();
  //     const dayNum = fcdate.getDay();
  //     let fcday = dayNum;
  //     let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //     for (let i = 0; i < fclist.length; i++) {
  //       let time = fclist[i].dt_txt;
  //       if (time.includes('18:00:00')) {
  //         fcday += 1;
  //         if (fcday === 7) {
  //           fcday = 0;
  //         }
  //         let dayName = document.createElement('span');
  //         dayName.textContent = days[fcday];

  //         let dayTemp = document.createElement('p');
  //         dayTemp.textContent = fclist[i].main.temp.toFixed(0) + '\xB0';

  //         let iconCode = fclist[i].weather[0].icon;
  //         let iconPath = 'https://openweathermap.org/img/w/' + iconCode + '.png';
  //         let iconImg = document.createElement('img');
  //         iconImg.src = iconPath;

  //         let weekDay = document.createElement('div');
  //         weekDay.appendChild(dayName);
  //         weekDay.appendChild(dayTemp);
  //         weekDay.appendChild(iconImg);

  //         document.getElementById('forecast').appendChild(weekDay);
  //       }
  //     }
  //   });
    // end 5 day forecast



 
