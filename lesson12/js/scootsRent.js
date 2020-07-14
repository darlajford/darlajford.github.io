let data = [{}, ];

function renderData() {
  fetch("rentals.json")
    .then(response => response.json())
    .then(json => {

      let table = document.getElementById("rentTable");
      let tableInfo = "<tr><th style=background-color:#fddd24 colspan =6>Max Persons and Price Chart (includes tax)</th></tr>";
      tableInfo += "<tr><th colspan =2></th><th colspan=2>Reservation</th><th colspan=2>Walk-In</th></tr>";
      tableInfo +=
        "<tr><th>Rental Type</th><th>Max<br>Persons</th><th>Half Day<br>(3 hours)</th><th>Full Day</th><th>Half Day<br>(3 hours)</th><th>Full Day</th></tr>";
      json.rentals.forEach((item, index) => {
        tableInfo += "<tr><td>" + item.name + "</td><td>" + item.maxPersons + "</td><td>" + item.rHalfDay +
          "</td><td>" + item.rFullDay + "</td><td>" + item.wHalfDay + "</td><td>" + item.wFullDay +
          "</td></tr>"
      })
      table.innerHTML = tableInfo;
    })
}

renderData();


// ==========================================
// my table was built with the following information found at 
// https://stackoverflow.com/questions/50451836/how-to-display-json-data-using-just-javascript-from-a-local-json-file-or-from-a

{/* <table id="myTable" border="2">

</table> */}

// {/* <script> */}

// var data = [
//     {
//         "id": "bitcoin",
//         "name": "Bitcoin",
//         "symbol": "BTC",
//         "rank": "1",
//         "price_usd": "8088.05",
//         "price_btc": "1.0",
//         "24h_volume_usd": "9825660000.0",
//         "market_cap_usd": "137294244348",


//     }, 
//      {
//         "id": "siacoin",
//         "name": "Siacoin",
//         "symbol": "SC",
//         "rank": "36",
//         "price_usd": "0.0144578",
//         "price_btc": "0.00000178",
//         "24h_volume_usd": "17730600.0",
//         "market_cap_usd": "487999542.0",
//         },
//      {
//         "id": "siacoin 3",
//         "name": "Siacoin 3",
//         "symbol": "SCD",
//         "rank": "32",
//         "price_usd": "0.0144578",
//         "price_btc": "0.00000178",
//         "24h_volume_usd": "17730600.0",
//         "market_cap_usd": "487999542.0",
//         }
//     ];
// function renderData(){
//   var table = document.getElementById("myTable");
//   var tableInfo = '';
//   data.forEach((item, index)=> {
//     tableInfo += "<tr><td>"+item.id+"</td><td>"+item.name+"</td><td>"+item.symbol+"</td><td>"+item.rank+"</td></tr>"
//   })
//   table.innerHTML = tableInfo;
// }

// renderData();
// </script>