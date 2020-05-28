
function windChills() {
  var wind = parseFloat(document.getElementById("wind").textContent);
  var temp = parseFloat(document.getElementById("temp").textContent);
  var chill = "N/A"

  if (wind > 3 && temp < 50) {
      var s = Math.pow(wind, 0.16);
      chill = (35.74 + (0.6215 * temp) - (35.75 * s) + (0.4275 * temp * s)).toPrecision(2);;


  }

  document.getElementById("chill").innerHTML = chill;
}