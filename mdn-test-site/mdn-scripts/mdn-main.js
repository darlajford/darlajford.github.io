
// js to change from one image to another by clicking on image
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'mdn-images/firefox-icon.png') {
      myImage.setAttribute('src','mdn-images/firefox2.jpg');
    } else {
      myImage.setAttribute('src','mdn-images/firefox-icon.png');
    }
}

// js for personalized welcome message to user
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}
myButton.onclick = function() {
  setUserName();
}