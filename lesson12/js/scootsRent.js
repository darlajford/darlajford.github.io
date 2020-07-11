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
