const likeButton = document.querySelector('.like-button');
const heartIcon = document.querySelector('.heart-icon');

likeButton.addEventListener('click', () => {
  heartIcon.classList.toggle('liked');
});