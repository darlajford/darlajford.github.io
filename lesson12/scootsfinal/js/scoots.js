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

let fulldate = dayname + ", " + d.getDate() + " " + monthname + " " + year;

document.getElementById("currentdate").textContent = fulldate;

// //to control font loading
function webfontload() {
WebFont.load({
  google: {
    families: [
      'Oleo+Script', 'Bangers', 'Montserrat'
    ]
  }
});
}