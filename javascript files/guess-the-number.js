const guess = document.getElementById('numInput');
const randomNumber = Math.floor(Math.random() * 100) + 1;
const message = document.querySelector('.message');

function checkGuess () {

    const playerGuess = parseInt(guess.value);

    if (isNaN (playerGuess)) {
        message.textContent = 'You FUCKING MORON with due respect enter a valid (NUMBER)';
    } else if (playerGuess < 1 || playerGuess > 100) {
        message.textContent = 'Dear Mr.Dumbass enter a number between 1 - 100';
    } else if (playerGuess < randomNumber) {
        message.textContent = 'Go higher!!! Reach the skies';
    } else if (playerGuess > randomNumber) {
        message.textContent = 'Go lower!!! Reach down my pants';
    } else {
        message.textContent = 'Congrats!!! You learned how to use your brain cells! GOD this was a waste of fucking time';
        
        guess.disabled = true;
    }

    guess.value = '';
};


const guessButton1 = document.getElementById('guessButton');

guessButton1.addEventListener('click', checkGuess);

guess.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkGuess();
    }
});


const replayButton1 = document.getElementById('replayButton');

function enableReplay () {
    guess.disabled = false;
    location.reload();
}

replayButton1.addEventListener('click', enableReplay);


const seekButton = document.getElementById('peekAboo');

function displaySeek () {
    document.querySelector('.answer').innerHTML = randomNumber;
}

seekButton.addEventListener('click', displaySeek);
