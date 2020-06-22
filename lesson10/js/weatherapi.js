const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=a442aaa7bf1b55d1a3f7a66de5e262fe';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
  });






// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);
//   });