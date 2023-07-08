// $(document).ready(() => {
//   let one = 1;
//   $('.one').on('click', () => {
//     $('.display-screen').append(one);
//   });

//   let two = 2;
//   $('.two').on('click', () => {
//     $('.display-screen').append(two);
//   });

//   let three = 3;
//   $('.three').on('click', () => {
//     $('.display-screen').append(three);
//   });

//   let four = 4;
//   $('.four').on('click', () => {
//     $('.display-screen').append(four);
//   });

//   let five = 5;
//   $('.five').on('click', () => {
//     $('.display-screen').append(five);
//   });

//   let six = 6;
//   $('.six').on('click', () => {
//     $('.display-screen').append(six);
//   });

//   let seven = 7;
//   $('.seven').on('click', () => {
//     $('.display-screen').append(seven);
//   });

//   let eight = 8;
//   $('.eight').on('click', () => {
//     $('.display-screen').append(eight);
//   });

//   let nine = 9;
//   $('.nine').on('click', () => {
//     $('.display-screen').append(nine);
//   });

//   let zero = 0;
//   $('.zero').on('click', () => {
//     $('.display-screen').append(zero);
//   });

//   let minus = '-';
//   $('.minus').on('click', () => {
//     $('.display-screen').append(minus);
//   });

//   let add = '+';
//   $('.add').on('click', () => {
//     $('.display-screen').append(add);
//   });

//   let multiply = 'x';
//   $('.multiply').on('click', () => {
//     $('.display-screen').append(multiply);
//   });

//   let divide = '/';
//   $('.divide').on('click', () => {
//     $('.display-screen').append(divide);
//   });

//   let equals = '=';
//   $('.equals').on('click', () => {
//     $('.display-screen').append(equals);
//   });

//   $('.clear-button').on('click', () => {
//     $('.display-screen').empty();
//   });

  
// });




// $(document).ready(() => {
//   let currentNumber = ''; // Variable to store the current number

//   $('.buttons').on('click', function() {
//     const digit = $(this).text();
//     if (digit === '=') {
//       $('.display-screen').append('=');
//       console.log('Current number:', currentNumber); // Perform calculations with the saved number
//       currentNumber = ''; // Reset the current number for the next calculation
//     } else if (digit === 'AC') {
//       $('.display-screen').empty();
//       currentNumber = ''; // Reset the current number
//     } else {
//       $('.display-screen').append(digit);
//       currentNumber += digit; // Append the digit to the current number
//     }
//   });
// });



let currentNumber = ''; // Variable to store the current number

$(document).ready(() => {
  $('.buttons').on('click', function() {
    const input = $(this).text();

    if (input === '=') {
      $('.display-screen').append('=');
      calculateResult();
      console.log(input);
    } else if (input === 'AC') {
      clearDisplay();
      console.log(input);
    } else if (isOperator(input)) {
      handleOperator(input);
      console.log(input);
    } else {
      $('.display-screen').append(input);
      currentNumber += input;
      console.log(currentNumber);
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