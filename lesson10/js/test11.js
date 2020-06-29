// fetching json
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    // console.table(jsonObject);  // temporary checking for valid response and data parsing

    // const special = towns.filter(town => (town.name == 'Preston') || (town.name == 'Fish Haven') || (town.name == 'Soda Springs')); //this line is in addition to const prophets line
    const special = towns.filter(town => (town.name == 'Fish Haven')); //this line is in addition to const prophets line
    special.forEach(town => {
      // let townSection = document.createElement('section');
      // let h2 = document.createElement('h2');
      // let motto = document.createElement('h3');
      // let year = document.createElement('p');
      // let population = document.createElement('p');
      // let rainfall = document.createElement('p');
      // let image = document.createElement('img');
      // let alt = document.createElement('alt');
      let townDiv = document.createElement('div');
      let h6 = document.createElement('h6');
      let events = document.createElement('p');

      // alt.setAttribute('alt', town.name);
      // image.setAttribute('src', `images/${town.photo}`);
      // h2.textContent = town.name;
      // motto.innerHTML = town.motto;
      // if (town.name == 'Fish Haven') motto.innerHTML += "<br><br>";
      // year.textContent = 'Year Founded: ' + town.yearFounded;
      // population.textContent = 'Population: ' + town.currentPopulation;
      // rainfall.textContent = 'Annual Rain Fall: ' + town.averageRainfall;
      h6.textContent = 'Upcoming Events ';           + town.events;
      events.innerHTML = town.events[0] + '<br>' + town.events[1] + '<br>' + town.events[2] + '<br' + town.events[3];

      // townSection.appendChild(h2);
      // townSection.appendChild(motto);
      // townSection.appendChild(year);
      // townSection.appendChild(population);
      // townSection.appendChild(rainfall);
      // townSection.appendChild(image);
      // townSection.appendChild(alt);
      townDiv.appendChild(h6);
      townDiv.appendChild(events);


      document.querySelector('div.towns').appendChild(townDiv);
    });
  });