let gridSize = 16;
let isDrawing = false;

function createGrid() {
  const container = document.getElementById('container');
  container.innerHTML = '';

  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('mousedown', startDrawing);
    pixel.addEventListener('mouseover', draw);
    container.appendChild(pixel);
  }

  document.addEventListener('mouseup', stopDrawing);
}

function startDrawing() {
  isDrawing = true;
  this.style.backgroundColor = 'black';
}

function draw() {
  if (isDrawing) {
    this.style.backgroundColor = 'black';
  }
}

function stopDrawing() {
  isDrawing = false;
}

function changeGridSize() {
  const newSize = prompt('Enter new grid size:');
  if (newSize !== null && newSize !== '') {
    gridSize = parseInt(newSize);
    createGrid();
  }
}

createGrid();