const box1 = document.querySelector('.boxOne');
const box2 = document.querySelector('.boxTwo');
const box3 = document.querySelector('.boxThree');
const input = document.querySelector('.textInput');
const button = document.querySelector('.button');
const Bill = document.querySelector('.displayParaForBill');
const Tip = document.querySelector('.displayParaForTip');
const Total = document.querySelector('.displayParaForTotalBill');

function calc5 () {
    const value = Number(input.value);

    if (isNaN(value)) {
        Bill.textContent = 'Please enter a valid number!';
        Tip.textContent = 'Please enter a valid number!';
        Total.textContent = 'Please enter a valid number!';
    } else if (value === 0) {
        Bill.textContent = 'Please enter a valid number!';
        Tip.textContent = 'Please enter a valid number!';
        Total.textContent = 'Please enter a valid number!';
    } else {
        Bill.textContent = value;
        let tip = Number(value * 0.05);
        Tip.textContent = tip;
        Total.textContent = tip + value;
    }
    input.value = '';
}

function calc10 () {
    const value = Number(input.value);

    if (isNaN(value)) {
        Bill.textContent = 'Please enter a valid number!';
        Tip.textContent = 'Please enter a valid number!';
        Total.textContent = 'Please enter a valid number!';
    } else if (value === 0) {
        Bill.textContent = 'Please enter a valid number!';
        Tip.textContent = 'Please enter a valid number!';
        Total.textContent = 'Please enter a valid number!';
    } else {
        Bill.textContent = value;
        let tip = Number(value * 0.10);
        Tip.textContent = tip;
        Total.textContent = tip + value;
    }
    input.value = '';
}

function calc20 () {
    const value = Number(input.value);

    if (isNaN(value)) {
        Bill.textContent = 'Please enter a valid number!';
        Tip.textContent = 'Please enter a valid number!';
        Total.textContent = 'Please enter a valid number!';
    } else if (value === 0) {
        Bill.textContent = 'Please enter a valid number!';
        Tip.textContent = 'Please enter a valid number!';
        Total.textContent = 'Please enter a valid number!';
    } else {
        Bill.textContent = value;
        let tip = Number(value * 0.20);
        Tip.textContent = tip;
        Total.textContent = tip + value;
    }
    input.value = '';
}





//below is code for one checkbox at a time
box1.addEventListener('change', () => {
    if (box1.checked) {
        box2.checked = false;
        box3.checked = false;
        button.disabled = false;
    }
});

box2.addEventListener('change', () => {
    if (box2.checked) {
        box1.checked = false;
        box3.checked = false;
        button.disabled = false;
    }
});

box3.addEventListener('change', () => {
    if (box3.checked) {
        box1.checked = false;
        box2.checked = false;
        button.disabled = false;
    }
});





//below is adding event listeners

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        if (box1.checked) {
            calc5();
        } else if (box2.checked) {
            calc10();
        } else if (box3.checked) {
            calc20();
        }
    }
});

button.addEventListener('click', () => {
    if (box1.checked) {
        calc5();
    } else if (box2.checked) {
        calc10();
    } else if (box3.checked) {
        calc20();
    }
});