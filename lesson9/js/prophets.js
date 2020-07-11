const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    //const utah = prophets.filter(prophet => (prophet.birthplace == 'Utah'));  //this line is in addition to const prophets line

    // for (let i = 0; i < prophets.length; i++ ) {
    // utah.forEach(prophet => } //this is to select each prophet with utah info
    prophets.forEach(prophet => { //this replaces the for loop
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let bDay = document.createElement('p');
      let bPlace = document.createElement('p');
      let image = document.createElement('img');
      let alt = document.createElement('alt');

      // alt.setAttribute('alt', prophets[i].name + prophets[i].lastname + ' - ' + prophets[i].order);
      alt.setAttribute('alt', prophet.name + prophet.lastname + ' - ' + prophet.order);
      // image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('src', prophet.imageurl);
      // h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      // h2.textContent = prophet.name + ' ' + prophet.lastname;
      h2.textContent = `${prophet.name} ${prophet.lastname}`; //use of backtics instead of + and '
      // bDay.textContent = 'Birthdate: ' + prophets[i].birthdate;
      bDay.textContent = 'Birthdate: ' + prophet.birthdate;
      // bPlace.textContent = 'Birthplace: ' + prophets[i].birthplace;
      bPlace.textContent = 'Birthplace: ' + prophet.birthplace;
      // bPlace.innerHTML = "<strong>" + prophet.birthplace + "<strong>"; //use of innerHTML instead of textContent
      // bPlace.innerHTML = `<strong>${prophet.birthPlace}</strong>`;  //backtic

      card.appendChild(h2);
      card.appendChild(bDay);
      card.appendChild(bPlace);
      card.appendChild(image);
      card.appendChild(alt);

      document.querySelector('div.cards').appendChild(card);

    });
  });

//   let card = document.createElement('section');
// let h2 = document.createElement('h2');

// h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

// card.appendChild(h2);

// document.querySelector('div.cards').appendChild(card);