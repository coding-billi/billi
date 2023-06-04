//below is just selecting the buttons from the html code
const startB = document.querySelector('.start-button');
const questionPara = document.querySelector('.displayParaForQuestions');
const countdownPara = document.querySelector('.displayParaForCountdown');
const answerPara = document.querySelector('.displayParaForAnswers');
const picField = document.querySelector('.imgElement');





// below is are questions saved in a array
const questions = [
    'Q1: What is the name of the tallest mountain in the world?',
    'Q2: Which country has the largest population in the world?',
    'Q3: What are the names of the seven continents of the world?',
    'Q4: What are the names of the five oceans of the world?',
    'Q5: What is the name of the longest river in Africa?',
    'Q6: What American city is the Golden Gate Bridge located in?'
];
// below is the code to loop through each question
let questionInterval;
let i = 0;

function looping () {
    questionPara.textContent = questions[i];
    i++;
    if (i === 7) {
        clearInterval(questionInterval);
        questionPara.textContent = 'Thats it!';
        return;
    }
}
function startQuestionInterval () {
    looping();
    questionInterval = setInterval(looping, 10000);
}








//below are answers saved in an array
const answers = [
    'Mount Everest',
    'China',
    'Asia, Africa, North America, South America, Antarctica, Europe, Australia',
    'Atlantic, Pacific, Indian, Arctic, and the Antarctic',
    'The Nile River',
    'San Francisco'
];
// below is the code to loop through each answer
let answerInterval;
let i2 = 0;

function looping2 () {
    answerPara.textContent = answers[i2];
    i2++;
    if (i2 === 7) {
        clearInterval(answerInterval);
        answerPara.textContent = 'The Quiz has Ended!';
        return;
    }
}
function startAnswerInterval () {
    looping2();
    answerInterval = setInterval(looping2, 10000);
}







// below is are pictures saved in a array
const pictures = [
    "/pictures/everest.webp",
    "/pictures/people.jpg",
    "/pictures/erath-at-night.webp",
    "/pictures/ocean.jpg",
    "/pictures/Nile-river.jpg",
    "/pictures/golden-gate-bridge.jpg"
];
// below is the code to loop through each picture
let pictureInterval;
let i3 = 0;

function looping3 () {
    picField.src = pictures[i3];
    i3++;
    if (i3 === pictures.length) {
        clearInterval(pictureInterval);
        picField.innerHTML = '';
        return;
    }
}
function startPictureInterval () {
    looping3();
    pictureInterval = setInterval(looping3, 10000);
}






//below is the code for countdown
let value = 9;
let interval;
let rounds = 0;

function countdown () {
    countdownPara.textContent = value;
    value--;
    if (value < 0) {
        value = 9;
        rounds ++;
    }
    if (rounds === 6) {
        clearInterval(interval);
        countdownPara.textContent = 0;
    }
}
function startInterval () {
    interval = setInterval(countdown, 1000);
}




//below is the code for button operations
startB.addEventListener('click', () => {
    startInterval();
    startQuestionInterval ();
    startAnswerInterval ();
    startPictureInterval();
    startB.disabled = true;
    startB.style.display = 'none';
});




const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');

    content.style.display = content.style.display === 'none' ? 'block' : 'none';
    arrow.style.transform = arrow.style.transform === 'rotate(45deg)' ? 'rotate(-135deg)' : 'rotate(45deg)';
  });
});