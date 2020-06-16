//hamburger menu button
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}


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

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
      let town = document.createElement('section');
      let h2 = document.createElement('h2');
      let motto = document.createElement('p');
      let year = document.createElement('p');
      let population = document.createElement('p');
      let rainfall = document.createElement('p');

      h2.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      year.textContent = 'Year Founded: ' + towns[i].yearFounded;
      population.textContent = 'Population: ' + towns[i].currentPopulation;
      rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

      town.appendChild(h2);      
      town.appendChild(motto);
      town.appendChild(year);
      town.appendChild(population);
      town.appendChild(rainfall);

      document.querySelector('div.towns').appendChild(town); 
 
    }
  });

//to control font loading
WebFont.load({
  google: {
    families: [
      'Open Sans', 'Roboto'
    ]
  }
});