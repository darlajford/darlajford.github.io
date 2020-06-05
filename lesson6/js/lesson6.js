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

//to display current year by copyright (although copyright year should remain the same)
document.getElementById("year").textContent = year;

//to display pancake message on fridays

const banner = document.getElementById("eventMessage");


if (daynames[d.getDay()] == "Friday") {
banner.style.display = "block";
}
else {  
banner.style.display = "none";
}

