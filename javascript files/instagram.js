document.querySelector('.read-more').addEventListener('click', function(event) {
  event.preventDefault();
  const moreText = document.querySelector('.more-text');
  const buttonText = document.querySelector('.read-more');
  const dots = document.querySelector('.dots');

  if (moreText.style.display === 'none' || moreText.style.display === '') {
    moreText.style.display = 'inline';
    buttonText.style.display = 'none';
    dots.style.display = 'none';
  }
});


const image1 = document.querySelector('.home-icon');
const images1 = ['/pictures/instagram/home-icon-clicked.png', '/pictures/instagram/home-icon.png']; // Array of image URLs
let currentIndex1 = 0;

// Function to handle image click event
function handleClick1() {
  currentIndex1 = (currentIndex1 + 1) % images1.length;
  image1.src = images1[currentIndex1];
}

// Add the click event listener
image1.addEventListener('click', handleClick1);

// Call the handleClick function initially to change the image on page load
handleClick1();







const image11 = document.querySelector('.search-icon');
const images11 = ['/pictures/instagram/search-icon-clicked.png', '/pictures/instagram/search-icon.png']; // Array of image URLs
let currentIndex11 = 0;

// Function to handle image click event
function handleClick11() {
  currentIndex11 = (currentIndex11 + 1) % images11.length;
  image11.src = images11[currentIndex11];
}

// Add the click event listener
image11.addEventListener('click', handleClick11);

// Call the handleClick function initially to change the image on page load
handleClick11();







const image2 = document.querySelector('.explore-icon');
const images2 = ['/pictures/instagram/explore-icon-clicked.png', '/pictures/instagram/explore-icon.png']; // Array of image URLs
let currentIndex2 = 0;

// Function to handle image click event
function handleClick2() {
  currentIndex2 = (currentIndex2 + 1) % images2.length;
  image2.src = images2[currentIndex2];
}

// Add the click event listener
image2.addEventListener('click', handleClick2);

// Call the handleClick function initially to change the image on page load
handleClick2();





const image3 = document.querySelector('.reels-icon');
const images3 = ['/pictures/instagram/reels-icon-clicked.png', '/pictures/instagram/reels-icon.png']; // Array of image URLs
let currentIndex3 = 0;

// Function to handle image click event
function handleClick3() {
  currentIndex3 = (currentIndex3 + 1) % images3.length;
  image3.src = images3[currentIndex3];
}

// Add the click event listener
image3.addEventListener('click', handleClick3);

// Call the handleClick function initially to change the image on page load
handleClick3();




const image4 = document.querySelector('.messages-icon');
const images4 = ['/pictures/instagram/messages-icon-clicked.png', '/pictures/instagram/messages-icon.png']; // Array of image URLs
let currentIndex4 = 0;

// Function to handle image click event
function handleClick4() {
  currentIndex4 = (currentIndex4 + 1) % images4.length;
  image4.src = images4[currentIndex4];
}

// Add the click event listener
image4.addEventListener('click', handleClick4);

// Call the handleClick function initially to change the image on page load
handleClick4();






const image6 = document.querySelector('.notifications-icon');
const images6 = ['/pictures/instagram/heart-icon-clicked.png', '/pictures/instagram/heart-icon.png']; // Array of image URLs
let currentIndex6 = 0;

// Function to handle image click event
function handleClick6() {
  currentIndex6 = (currentIndex6 + 1) % images6.length;
  image6.src = images6[currentIndex6];
}

// Add the click event listener
image6.addEventListener('click', handleClick6);

// Call the handleClick function initially to change the image on page load
handleClick6();





const image7 = document.querySelector('.create-icon');
const images7 = ['/pictures/instagram/create-icon-clicked.png', '/pictures/instagram/create-icon.png']; // Array of image URLs
let currentIndex7 = 0;

// Function to handle image click event
function handleClick7() {
  currentIndex7 = (currentIndex7 + 1) % images7.length;
  image7.src = images7[currentIndex7];
}

// Add the click event listener
image7.addEventListener('click', handleClick7);

// Call the handleClick function initially to change the image on page load
handleClick7();





const image8 = document.querySelector('.more-icon');
const images8 = ['/pictures/instagram/more-icon-clicked.png', '/pictures/instagram/more-icon.png']; // Array of image URLs
let currentIndex8 = 0;

// Function to handle image click event
function handleClick8() {
  currentIndex8 = (currentIndex8 + 1) % images8.length;
  image8.src = images8[currentIndex8];
}

// Add the click event listener
image8.addEventListener('click', handleClick8);

// Call the handleClick function initially to change the image on page load
handleClick8();





const image9 = document.querySelector('.heart-icon');
const images9 = ['/pictures/instagram/heart-icon-liked.png', '/pictures/instagram/heart-icon.png']; // Array of image URLs
let currentIndex9 = 0;

// Function to handle image click event
function handleClick9() {
  currentIndex9 = (currentIndex9 + 1) % images9.length;
  image9.src = images9[currentIndex9];
}

// Add the click event listener
image9.addEventListener('click', handleClick9);

// Call the handleClick function initially to change the image on page load
handleClick9();




const image10 = document.querySelector('.save-icon');
const images10 = ['/pictures/instagram/save-icon-clicked.png', '/pictures/instagram/save-icon.png']; // Array of image URLs
let currentIndex10 = 0;

// Function to handle image click event
function handleClick10() {
  currentIndex10 = (currentIndex10 + 1) % images10.length;
  image10.src = images10[currentIndex10];
}

// Add the click event listener
image10.addEventListener('click', handleClick10);

// Call the handleClick function initially to change the image on page load
handleClick10();










//this is for input and comment section first time using jquery
$(document).ready(function() {
  const textarea = $('.write-comment-input');
  textarea.on('input', function() {
    this.style.height = '18px'; // Reset height to initial value

    // Calculate the scroll height
    const scrollHeight = this.scrollHeight;

    // Set the height of the textarea based on the scroll height
    if (scrollHeight > 18) {
      this.style.height = scrollHeight + 'px';
    }
  });
});