const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const dino = {
  x: 50,
  y: canvas.height - 50,
  width: 50,
  height: 50,
  isJumping: false,
  jumpHeight: 100,
  velocityY: 0
};

const cactus = {
  x: canvas.width,
  y: canvas.height - 50,
  width: 50,
  height: 50,
  speed: 5
};

function drawDino() {
  ctx.fillStyle = '#000';
  ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
}

function drawCactus() {
  ctx.fillStyle = '#f00';
  ctx.fillRect(cactus.x, cactus.y, cactus.width, cactus.height);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawDino();
  drawCactus();

  if (dino.isJumping) {
    dino.y -= dino.velocityY;
    dino.velocityY -= 1;
    if (dino.y >= canvas.height - dino.height) {
      dino.y = canvas.height - dino.height;
      dino.velocityY = 0;
      dino.isJumping = false;
    }
  }

  cactus.x -= cactus.speed;
  if (cactus.x + cactus.width < 0) {
    cactus.x = canvas.width;
  }

  if (checkCollision()) {
    gameOver();
  } else {
    requestAnimationFrame(update);
  }
}

function jump() {
  if (!dino.isJumping) {
    dino.isJumping = true;
    dino.velocityY = dino.jumpHeight;
  }
}

function checkCollision() {
  return dino.x < cactus.x + cactus.width &&
         dino.x + dino.width > cactus.x &&
         dino.y < cactus.y + cactus.height &&
         dino.y + dino.height > cactus.y;
}

function gameOver() {
  alert('Game Over');
  resetGame();
}

function resetGame() {
  dino.x = 50;
  dino.y = canvas.height - 50;
  cactus.x = canvas.width;
  update();
}

document.addEventListener('keydown', (event) => {
  if (event.key === ' ' || event.key === 'ArrowUp') {
    jump();
  }
});

update();