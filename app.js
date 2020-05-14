'use strict';

var parent = document.getElementById('photo-display');
var allPhotos = [];
var clickCounts = 0;
var results = document.getElementById('results');

function productImage(url, alt, title){
  this.filePath = url;
  this.alt = alt;
  this.title = title;
  this.votes = 0;
  this.views = 0;
  allPhotos.push(this);
}

new productImage('img/bag.jpg', 'bag', 'bag');
new productImage('img/banana.jpg', 'banana', 'banana');
new productImage('img/bathroom.jpg', 'bathroom', 'bathroom');
new productImage('img/boots.jpg', 'boots', 'boots');
new productImage('img/breakfast.jpg', 'breakfast', 'breakfast');
new productImage('img/bubblegum.jpg', 'bubblegum', 'bubblegum');
new productImage('img/chair.jpg', 'chair', 'chair');
new productImage('img/cthulhu.jpg', 'cthulhu', 'cthulhu');
new productImage('img/dog-duck.jpg', 'dog-duck', 'dog-duck');
new productImage('img/dragon.jpg', 'dragon', 'dragon');
new productImage('img/pen.jpg', 'pen', 'pen');
new productImage('img/pet-sweep.jpg', 'pet-sweep', 'pet-sweep');
new productImage('img/scissors.jpg', 'scissors', 'scissors');
new productImage('img/shark.jpg', 'shark', 'shark');
new productImage('img/sweep.png', 'sweep', 'sweep');
new productImage('img/tauntaun.jpg', 'tauntaun', 'tauntaun');
new productImage('img/unicorn.jpg', 'unicorn', 'unicorn');
new productImage('img/usb.gif', 'usb', 'usb');
new productImage('img/water-can.jpg', 'water-can', 'water-can');
new productImage('img/wine-glass.jpg', 'wine-glass', 'wine-glass');

productImage.prototype.post = function(){
var imageElement = document.createElement('img');
imageElement.setAttribute('src', this.filePath);
imageElement.setAttribute('alt', this.alt);
imageElement.setAttribute('title', this.title);
parent.appendChild(imageElement);
}

function randomNumber(min=0, max){
  return Math.floor(Math.random()* (max - min + 1)) + min;
}

// for(var i = 0; i < testingRounds; i++){
  function getRandomImage(){
    parent.textContent = '';
    var randomIndex = randomNumber(0, allPhotos.length-1);
    var secondRandomIndex = randomNumber(0, allPhotos.length-1);
    var thirdRandomIndex = randomNumber(0, allPhotos.length-1);

    while(randomIndex === secondRandomIndex){
    secondRandomIndex = randomNumber(0, allPhotos.length-1);
    }
    while(randomIndex === thirdRandomIndex){
    thirdRandomIndex = randomNumber(0, allPhotos.length-1);
  }
    // for(var i = 0; i < 3; i++){ // Wanted to try and create a loop here.
 
  allPhotos[randomIndex].post();
  allPhotos[randomIndex].views++;
  // }
  allPhotos[secondRandomIndex].post();
  allPhotos[secondRandomIndex].views++

  allPhotos[thirdRandomIndex].post();
  allPhotos[thirdRandomIndex].views++
  
}
// Sometimes the first photo is still the same as the third.

getRandomImage();


function handleClickOnClickEvent(){
  var productClickedOn = event.target.title;
  for(var i = 0; i < allPhotos.length; i++){
    if(productClickedOn === allPhotos[i].title){
      allPhotos[i].votes++;
      getRandomImage();
      clickCounts++;
      console.log(event.target.title + ' has ' + allPhotos[i].votes + ' votes.');
    }
    if(clickCounts === 25) {
    parent.removeEventListener('click', handleClickOnClickEvent);
    console.log('You\'ve hit 25 votes!');
    totalResults();
    }
  }
}

function totalResults(){
  for(var i = 0; i < allPhotos.length; i++){
    var listElement = document.createElement('li');
    listElement.textContent = allPhotos[i].title + ' received ' + allPhotos[i].votes + ' votes and ' + allPhotos[i].views + ' views.';
    results.appendChild(listElement);
  }
}

parent.addEventListener('click', handleClickOnClickEvent);

var stringPhotos = JSON.stringify(allPhotos);
console.log('This is the JSON for the allPhotos array.');

localStorage.setItem('products', stringPhotos);

var productsFromLocalStorage = localStorage.getItem('products');
console.log('These are my producdts from Local Storage.', productsFromLocalStorage);

var productsTurnedBackIntoJavaScript = JSON.parse(productsFromLocalStorage);
console.log('My parsed products', productsTurnedBackIntoJavaScript);

// placeholder