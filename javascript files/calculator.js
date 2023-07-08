let currentNumber = ''; // Variable to store the current number

$(document).ready(() => {
  $('.buttons').on('click', function() {
    const input = $(this).text();

    if (input === '=') {
      $('.display-screen').append('=');
      calculateResult();
    } else if (input === 'AC') {
      clearDisplay();
    } else if (isOperator(input)) {
      handleOperator(input);
    } else {
      $('.display-screen').append(input);
      currentNumber += input;
    }
  });
});

function calculateResult() {
  const result = eval(currentNumber);
  currentNumber = String(result);
  $('.display-screen').empty().append(currentNumber);
}

function clearDisplay() {
  $('.display-screen').empty();
  currentNumber = '';
}

function isOperator(input) {
  return input === '+' || input === '-' || input === '×' || input === '÷';
}

function handleOperator(input) {
  $('.display-screen').append(input);
  currentNumber += input;
}