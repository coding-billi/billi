const questionInput = document.querySelector('.input');
const name1 = document.querySelector('.nameInput');
const display = document.querySelector('.display');
const displayParaForQuestion = document.querySelector('.displayQuestion');
const button = document.querySelector('.button');


function decision () {
    const userName = name1.value;
    const question = questionInput.value;

    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall;

    if (question === 'should i fuck fazlerabbi phudda?') {
        eightBall = `I would say avoid that, It's nasty!`;
    } else if (randomNumber === 0) {
        eightBall = 'It is certain';
    } else if (randomNumber === 1) {
        eightBall = 'It is decidedly so';
    } else if (randomNumber === 2) {
        eightBall = 'Reply hazy try again';
    } else if (randomNumber === 3) {
        eightBall = 'Cannot predict now';
    } else if (randomNumber === 4) {
        eightBall = 'Do not count on it';
    } else if (randomNumber === 5) {
        eightBall = 'My sources say no';
    } else if (randomNumber === 6) {
        eightBall = 'Outlook not so good';
    } else if (randomNumber === 7) {
        eightBall = 'Signs point to yes';
    } 

    displayParaForQuestion.textContent = `Question : ${question}`;
    display.textContent = `Hi ${userName}! Ans. ${eightBall}`;
    questionInput.value = '';
}

button.addEventListener('click', () => {
    decision();
});

questionInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        decision();
    }
});