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
// document.getElementById("year").textContent = year;

//to display pancake message on fridays
const banner = document.getElementById("eventMessage");

if (daynames[d.getDay()] == "Friday" || daynames[d.getDay()] == "Saturday") {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}
// ----------------------------------------------------
// fetching json for town general info
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    const special = towns.filter(town => (town.name == 'Preston') || (town.name == 'Fish Haven') || (town.name == 'Soda Springs')); //this line is in addition to const prophets line
    special.forEach(town => {
      let townSection = document.createElement('section');
      let h2 = document.createElement('h2');
      let motto = document.createElement('h3');
      let year = document.createElement('p');
      let population = document.createElement('p');
      let rainfall = document.createElement('p');
      let image = document.createElement('img');
      let alt = document.createElement('alt');

      alt.setAttribute('alt', town.name);
      image.setAttribute('src', `images/${town.photo}`);
      h2.textContent = town.name;
      motto.innerHTML = town.motto;
      if (town.name == 'Fish Haven') motto.innerHTML += "<br><br>";
      year.textContent = 'Year Founded: ' + town.yearFounded;
      population.textContent = 'Population: ' + town.currentPopulation;
      rainfall.textContent = 'Annual Rain Fall: ' + town.averageRainfall;

      townSection.appendChild(h2);
      townSection.appendChild(motto);
      townSection.appendChild(year);
      townSection.appendChild(population);
      townSection.appendChild(rainfall);
      townSection.appendChild(image);
      townSection.appendChild(alt);

      document.querySelector('div.towns').appendChild(townSection);
    });
  });

//-------------------------------------------

//to control font loading
WebFont.load({
  google: {
    families: [
      'Open Sans', 'Roboto'
    ]
  }
});