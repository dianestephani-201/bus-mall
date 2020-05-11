'use strict';

var parent = document.getElementById('photo-display');
var allPhotos = [];

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
new productImage('img/pet-sweep', 'pet-sweep', 'pet-sweep');
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

function.randomNumber(min=0, max){
  return Math.floor(Math.random()* (max - min + 1)) + min;
}

function.getRandomImage(){
  parent.textContent = '';
  var randomIndex = randomNumber(0, allPhotos.length-1);
  var secondRandomIndex = randomNumber(0, allPhotos.length-1);
  var thirdRandomIndex = randomNumber(0, allPhotos.length-1);

  while(randomIndex === secondRandomIndex || thirdRandomIndex){
    secondRandomIndex = randomNumber(0, allPhotos.length-1);
    
  }
}