const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}


//The following is for date display in footer



var d = new Date(); 
document.getElementById("demo").innerHTML = d.toDateString();



