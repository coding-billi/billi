// $(document).ready(() => {
//   $('h1').click(() => {
//     $('p').hide();
//   });
// });

// $(function() {
//   $('h1').click(()=> {
//     $('p').fadeToggle();
//   })
// })











// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.querySelector(".container");

//   function createGrid(size) {
//     container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
//     container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

//     for (let i = 0; i < size size * size i++) {
//       const cell = $(`<div></div>`);div");
//       container.appendChild(gridCelcontainer.appendChild(cell);l);
//     }
//   }

//   function clearGrid() {
//     const gridCells = container.querySelectorAll("div");
//     gridCells.forEach(cell => {
//       cell.style.backgroundColor = "#fff";
//     });
//   }

//   function getRandomColor() {
//     const letters = "size * size    let color = "#";
//     for (let i = 0; i const cell = $(`<div></div>`);size    color += letters[Math.floor(const cell = $(`<dicontainer.appendChild(cell);v></div>`);
//     }container.appendChild(cell);
//     return color;
//   }

//   function changeColor() {
//     this.style.backgroundColor = getRandomColor();
//   }

//   createGrid(16);

//   const clearButton = document.createElement("button");
//   clearButton.textContent = "Clear Grid";
//   document.body.insertBefore(clearButton, container);
//   clearButton.addEventListener("click", clearGrid);

//   const colorButton = document.createElement("button");
//   colorButton.textContent = "Random Color";
//   document.body.insertBefore(colorButton, container);
//   colorButton.addEventListener("click", () => {
  //     const gridCells = container.querySelectorAll("div");
  //     gridCells.forEach(cell => {
    //       cell.addEventListener("mouseover", changeColor);
    //     });
    //   });
    // });
    


$(document).ready(function () {
  const container = $('.container');
  let mousedown = false;
  
  const rangeInput = $('<input class="rangeInput" type="range" min="1" max="32" value="16">');
  const rangeDisplay = $('<span></span>');
  $('.control-panel').append(rangeInput, rangeDisplay);
  let rangeInputValue = rangeInput.val();

  rangeDisplay.text(`${rangeInputValue} x ${rangeInputValue}`);
  
  rangeInput.on('input', () => {
    rangeInputValue = rangeInput.val();
    createGrid(rangeInputValue);
    rangeDisplay.text(`${rangeInputValue} x ${rangeInputValue}`);
  });
  
  const input = $('<input class="colorInput" type="color">');
  $('.control-panel').append(input);
  let inputValue = input.val();
  
  input.on('input', function() {
    inputValue = input.val();
    $('body').css('--hover-color', inputValue);
    hoverColor = inputValue; // Update the hoverColor variable
  });

  let hoverColor = inputValue;

  function createGrid(size) {
    container.css({
      'grid-template-columns': `repeat(${size}, 1fr)`,
      'grid-template-rows': `repeat(${size}, 1fr)`,
      'display': 'grid'
    });

    container.empty(); // Clear existing cells

    for (let i = 0; i < size * size; i++) {
      const cell = $('<div class="cell"></div>');
      container.append(cell);
    }
  }
  
  const clearButton = $('<button>Clear Canvas</button>');
  $('.control-panel').append(clearButton);
  clearButton.click(() => {
    let afterClearDefaultInputValue = inputValue;
    container.find('div').css('background-color', 'transparent');
    inputValue = afterClearDefaultInputValue;
  })
  
  const eraserButton = $('<button>Eraser</button>');
  $('.control-panel').append(eraserButton);
  eraserButton.click(() => {
    inputValue = 'transparent';
  })

  const pencilButton = $('<button>Pencil</button>');
  $('.control-panel').append(pencilButton);
  pencilButton.click(() => {
    inputValue = 'black';
  })

  createGrid(rangeInputValue);

  container.on('mousedown', 'div', function() {
    mousedown = true;
    $(this).css('background-color', inputValue);
  });

  container.on('mouseover', 'div', function() {
    if (mousedown) {
      $(this).css('background-color', inputValue);
    }
  });

  $(document).on('mouseup mouseleave', function() {
    mousedown = false;
  });
});