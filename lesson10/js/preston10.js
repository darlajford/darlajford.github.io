//hamburger menu button
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}
//----------------------------------------

//The following is for date display in footer
let daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let shortDays = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let d = new Date();
let dayname = daynames[d.getDay()];
let monthname = months[d.getMonth()];
let year = d.getFullYear();

//let fulldate = dayname + ", " + monthname + " " + d.getDate() +", " + year;  (shows day month date year format)
let fulldate = dayname + ", " + d.getDate() + " " + monthname + " " + year;

document.getElementById("currentdate").textContent = fulldate;
console.log(fulldate);

//to display current year next to copyright (although copyright year should remain the same)
document.getElementById("year").textContent = year;

//to display pancake message on fridays
const banner = document.getElementById("eventMessage");

if (daynames[d.getDay()] == "Friday" || daynames[d.getDay()] == "Saturday") {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}

// weather summary information from api
const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=a442aaa7bf1b55d1a3f7a66de5e262fe';
// const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=a442aaa7bf1b55d1a3f7a66de5e262fe';

fetch(requestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('condition').textContent = jsObject.weather[0].main;
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('wind').textContent = jsObject.wind.speed;

    //wind chill factor
    //--------------------------------------
    function chill() {
      let temp = parseFloat(document.getElementById("current-temp").textContent);
      let wind = parseFloat(document.getElementById("wind").textContent);

      if (temp <= 50 && wind > 3) {
        let f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        document.getElementById("chill").innerHTML = parseInt(f) + '&#176';
      } else {
        document.getElementById("chill").innerHTML = "N/A";
      }
    }
    chill()

    //weather icons and info for 5 day forecast
    // ---------------------------
    // const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=a442aaa7bf1b55d1a3f7a66de5e262fe';

    // fetch(apiURL)
    //   .then((response2) => response2.json())
    //   .then((jsObject2) => {
    //     console.log(jsObject2);


        let dayNum = 1;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById('day' + dayNum).setAttribute('src', imagesrc);
    document.getElementById("temp" + dayNum).setAttribute('text', jsObject.main.temp);
    // document.getElementById('day1').textContent = imagesrc; // informational specification only
    // focus on the setAttribute() method
    // document.getElementById('icon').setAttribute('alt', desc);  

    paragraph.appendChild(text);

  });



//---------------------------------
//to control font loading
WebFont.load({
  google: {
    families: [
      'Open Sans', 'Roboto'
    ]
  }
});

// console.log(document.getElementById("fc").rows[0].cells[0]);

let day = d.getDay() + 1;
for (let count = 0; count < 5; count++) {
  let displayDay = shortDays[day];
  day++;
  document.getElementById("fc").rows[0].cells[count].innerHTML = displayDay;
  // document.getElementById("fc").rows[1].cells[count].innerHTML = displayDay;
}