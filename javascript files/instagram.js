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

document.querySelector('.read-more2').addEventListener('click', function(event) {
  event.preventDefault();
  const moreText = document.querySelector('.more-text2');
  const buttonText = document.querySelector('.read-more2');
  const dots = document.querySelector('.dots2');

  if (moreText.style.display === 'none' || moreText.style.display === '') {
    moreText.style.display = 'inline';
    buttonText.style.display = 'none';
    dots.style.display = 'none';
  }
});



const homeIcon = document.querySelector('.home-icon');
const homeIconArray = ['/pictures/instagram/home-icon-clicked.png', '/pictures/instagram/home-icon.png']; // Array of image URLs
let currentIndex1 = 0;

// Function to handle image click event
function handleClick1() {
  currentIndex1 = (currentIndex1 + 1) % homeIconArray.length;
  homeIcon.src = homeIconArray[currentIndex1];
}

// Add the click event listener
homeIcon.addEventListener('click', handleClick1);

// Call the handleClick function initially to change the image on page load
handleClick1();







const searchIcon = document.querySelector('.search-icon');
const searchIconArray = ['/pictures/instagram/search-icon-clicked.png', '/pictures/instagram/search-icon.png']; // Array of image URLs
let currentIndex2 = 0;

// Function to handle image click event
function handleClick2 () {
  currentIndex2 = (currentIndex2 + 1) % searchIconArray.length;
  searchIcon.src = searchIconArray[currentIndex2];
}

// Add the click event listener
searchIcon.addEventListener('click', handleClick2);

// Call the handleClick function initially to change the image on page load
handleClick2();







const exploreIcon = document.querySelector('.explore-icon');
const exploreIconArray = ['/pictures/instagram/explore-icon-clicked.png', '/pictures/instagram/explore-icon.png']; // Array of image URLs
let currentIndex3 = 0;

// Function to handle image click event
function handleClick3() {
  currentIndex3 = (currentIndex3 + 1) % exploreIconArray.length;
  exploreIcon.src = exploreIconArray[currentIndex3];
}

// Add the click event listener
exploreIcon.addEventListener('click', handleClick3);

// Call the handleClick function initially to change the image on page load
handleClick3();





const reelsIcon = document.querySelector('.reels-icon');
const reelsIconArray = ['/pictures/instagram/reels-icon-clicked.png', '/pictures/instagram/reels-icon.png']; // Array of image URLs
let currentIndex4 = 0;

// Function to handle image click event
function handleClick4() {
  currentIndex4 = (currentIndex4 + 1) % reelsIconArray.length;
  reelsIcon.src = reelsIconArray[currentIndex4];
}

// Add the click event listener
reelsIcon.addEventListener('click', handleClick4);

// Call the handleClick function initially to change the image on page load
handleClick4();




const messagesIcon = document.querySelector('.messages-icon');
const messagesIconArray = ['/pictures/instagram/messages-icon-clicked.png', '/pictures/instagram/messages-icon.png']; // Array of image URLs
let currentIndex5 = 0;

// Function to handle image click event
function handleClick5() {
  currentIndex5 = (currentIndex5 + 1) % messagesIconArray.length;
  messagesIcon.src = messagesIconArray[currentIndex5];
}

// Add the click event listener
messagesIcon.addEventListener('click', handleClick5);

// Call the handleClick function initially to change the image on page load
handleClick5();






const notificationsIcon = document.querySelector('.notifications-icon');
const notificationsIconArray = ['/pictures/instagram/heart-icon-clicked.png', '/pictures/instagram/heart-icon.png']; // Array of image URLs
let currentIndex6 = 0;

// Function to handle image click event
function handleClick6() {
  currentIndex6 = (currentIndex6 + 1) % notificationsIconArray.length;
  notificationsIcon.src = notificationsIconArray[currentIndex6];
}

// Add the click event listener
notificationsIcon.addEventListener('click', handleClick6);

// Call the handleClick function initially to change the image on page load
handleClick6();





const createIcon = document.querySelector('.create-icon');
const createIconArrray = ['/pictures/instagram/create-icon-clicked.png', '/pictures/instagram/create-icon.png']; // Array of image URLs
let currentIndex7 = 0;

// Function to handle image click event
function handleClick7() {
  currentIndex7 = (currentIndex7 + 1) % createIconArrray.length;
  createIcon.src = createIconArrray[currentIndex7];
}

// Add the click event listener
createIcon.addEventListener('click', handleClick7);

// Call the handleClick function initially to change the image on page load
handleClick7();





const moreIcon = document.querySelector('.more-icon');
const moreIconArray = ['/pictures/instagram/more-icon-clicked.png', '/pictures/instagram/more-icon.png']; // Array of image URLs
let currentIndex8 = 0;

// Function to handle image click event
function handleClick8() {
  currentIndex8 = (currentIndex8 + 1) % moreIconArray.length;
  moreIcon.src = moreIconArray[currentIndex8];
}

// Add the click event listener
moreIcon.addEventListener('click', handleClick8);

// Call the handleClick function initially to change the image on page load
handleClick8();





const heartIcon = document.querySelector('.heart-icon');
const heartIconArray = ['/pictures/instagram/heart-icon-liked.png', '/pictures/instagram/heart-icon.png']; // Array of image URLs
let currentIndex9 = 0;

// Function to handle image click event
function handleClick9() {
  currentIndex9 = (currentIndex9 + 1) % heartIconArray.length;
  heartIcon.src = heartIconArray[currentIndex9];
}

// Add the click event listener
heartIcon.addEventListener('click', handleClick9);

// Call the handleClick function initially to change the image on page load
handleClick9();



const heartIcon2 = document.querySelector('.heart-icon2');
const heartIconArray2 = ['/pictures/instagram/heart-icon-liked.png', '/pictures/instagram/heart-icon.png']; // Array of image URLs
let currentIndex10 = 0;

// Function to handle image click event
function handleClick10() {
  currentIndex10 = (currentIndex10 + 1) % heartIconArray2.length;
  heartIcon2.src = heartIconArray2[currentIndex10];
}

// Add the click event listener
heartIcon2.addEventListener('click', handleClick10);

// Call the handleClick function initially to change the image on page load
handleClick10();



const saveIcon = document.querySelector('.save-icon');
const saveIconArray = ['/pictures/instagram/save-icon-clicked.png', '/pictures/instagram/save-icon.png']; // Array of image URLs
let currentIndex11 = 0;

// Function to handle image click event
function handleClick11() {
  currentIndex11 = (currentIndex11 + 1) % saveIconArray.length;
  saveIcon.src = saveIconArray[currentIndex11];
}

// Add the click event listener
saveIcon.addEventListener('click', handleClick11);

// Call the handleClick function initially to change the image on page load
handleClick11();




const saveIcon2 = document.querySelector('.save-icon2');
const saveIconArray2 = ['/pictures/instagram/save-icon-clicked.png', '/pictures/instagram/save-icon.png']; // Array of image URLs
let currentIndex12 = 0;

// Function to handle image click event
function handleClick12() {
  currentIndex12 = (currentIndex12 + 1) % saveIconArray2.length;
  saveIcon2.src = saveIconArray2[currentIndex12];
}

// Add the click event listener
saveIcon2.addEventListener('click', handleClick12);

// Call the handleClick function initially to change the image on page load
handleClick12();




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