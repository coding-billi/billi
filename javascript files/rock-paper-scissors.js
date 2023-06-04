    let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
    }

    displayScore ();

    let autoPlaying = false;
    let id;

    function autoPlay () {

        if (!autoPlaying) {
            id = setInterval (() => {
                const billiMove = makingComputerMove (); theNormalGame (billiMove);
            }, 500);

            autoPlaying = true;
        } else {
            clearInterval (id);
            autoPlaying = false;
        }
    }

    const rockButton1 = document.querySelector('.rockButton');
    rockButton1.addEventListener('click', () => {
        theNormalGame ('rock');
    });
    document.body.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
            theNormalGame ('rock');
        }
    });


    const paperButton1 = document.querySelector('.paperButton');
    paperButton1.addEventListener('click', () => {
        theNormalGame ('paper');
    });
    document.body.addEventListener('keydown', (event) => {
        if (event.key === 'p') {
            theNormalGame ('paper');
        }
    });


    const scissorsButton1 = document.querySelector('.scissorsButton');
    scissorsButton1.addEventListener('click', () => {
        theNormalGame ('scissors');
    });
    document.body.addEventListener('keydown', (event) => {
        if (event.key === 's') {
            theNormalGame ('scissors');
        }
    });


    const resetButton1 = document.querySelector('.resetButton');
    resetButton1.addEventListener('click', () => {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        displayScore();
    });
    document.body.addEventListener('keypress', (event) => {
        if (event.shiftKey && event.key === 'R') {
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.removeItem('score');
            displayScore();
        }
    });


    const autoPlayButton1 = document.querySelector('.autoplayB');
    autoPlayButton1.addEventListener('click', () => {
        changeAutoPlayB ();
        autoPlay ();
    });


    const stopandplayB = document.querySelector('.autoplayB');

    function changeAutoPlayB () {

        if (stopandplayB.innerText === 'AutoPlay') {
            stopandplayB.innerText = 'Stop';
        } else {
            stopandplayB.innerText = 'AutoPlay';
        }
    }

    function makingComputerMove() {

        const random_shit = Math.random();

        let yourMoveMyGuy = '';

        if (random_shit >= 0 && random_shit < 1 / 3) {
        yourMoveMyGuy = 'rock';
        } else if (random_shit >= 1 / 3 && random_shit < 2 / 3) {
        yourMoveMyGuy = 'paper';
        } else if(random_shit >= 2 / 3 && random_shit < 3 / 3) {
        yourMoveMyGuy = 'scissors';
        }

        return yourMoveMyGuy;

    }

    let result = '';

    function theNormalGame (billiMove) {

        const yourMoveMyGuy = makingComputerMove ();

        if (billiMove === 'rock') {

            if (yourMoveMyGuy === 'rock') {
                result ='Tie'
            } else if (yourMoveMyGuy === 'paper') {
                result ='You lose! Better luck next time!'
            } else if (yourMoveMyGuy === 'scissors') {
                result ='You win! keep playing!'
            }

        } else if (billiMove === 'paper') {

            if (yourMoveMyGuy === 'paper') {
            result ='Tie'
            } else if (yourMoveMyGuy === 'scissors') {
            result ='You lose! Better luck next time!'
            } else if (yourMoveMyGuy === 'rock') {
            result ='You win! keep playing!'
            }

        } else if (billiMove === 'scissors') {

            if (yourMoveMyGuy === 'scissors') {
                result ='Tie';
            } else if (yourMoveMyGuy === 'rock') {
                result ='You lose! Better luck next time!';
            } else if (yourMoveMyGuy === 'paper') {
                result ='You win! keep playing!';
            }

        }

        if (result === 'You win! keep playing!') {
            score.wins += 1;
        } else if (result === 'You lose! Better luck next time!') {
            score.losses += 1;
        } else if (result === 'Tie') {
            score.ties +=1;
        }

        displayScore ();
        displayResult ();

        document.querySelector('.movesPara').innerHTML = `You 
            <img src="/pictures/${billiMove}.jpg" class="moveIcon">
        Computer
            <img src="/pictures/${yourMoveMyGuy}.jpg" class="moveIcon">`;


        localStorage.setItem('score' , JSON.stringify(score));

        /*alert(`You picked ${billiMove} The computer picked ${yourMoveMyGuy} ${result} \n Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);*/
    }

    function displayScore () {

        document.querySelector('.scorePara')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function displayResult () {
        document.querySelector('.resultPara').innerHTML = result;
    }