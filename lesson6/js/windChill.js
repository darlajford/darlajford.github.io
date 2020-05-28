
function calc(){
  let temp = parseFloat(document.getElementById("temp").textContent);
  let wind = parseFloat(document.getElementById("wind").textContent);
  let result = chill(temp,wind);
  
  document.getElementById("chill").innerHTML = result;
  
}
function chill(temp,wind){
  if (temp <= 50 && wind > 3){
  let f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind,0.16) + 0.4275 * temp * Math.pow(wind,0.16);
   return parseInt(f); 
  } 
  else{
      return f = "N/A";       
  }
}
calc()