const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

// ===== GRID =====
function drawGrid() {
  ctx.strokeStyle = "#555";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  const cellSize = 20;
  ctx.strokeStyle = "#333";

  for (let x = 0; x <= canvas.width; x += cellSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  for (let y = 0; y <= canvas.height; y += cellSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
}

// ===== SNAKE DATA =====
let snake = [
  { x: 80, y: 40 },
  { x: 60, y: 40 },
  { x: 40, y: 40 }
];

let dx = 20;
let dy = 0;
let food = randomFood();
let score = 0;

// ===== FOOD =====
function randomFood() {
  return {
    x: Math.floor(Math.random() * (canvas.width / 20)) * 20,
    y: Math.floor(Math.random() * (canvas.height / 20)) * 20
  };
}

function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 20, 20);
}

// ===== SNAKE =====
function drawSnake() {
  ctx.fillStyle = "#0f0";
  snake.forEach(part => ctx.fillRect(part.x, part.y, 20, 20));
}

// ===== MOVE =====
function advanceSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  // collisions
  if (
    head.x < 0 || head.x >= canvas.width ||
    head.y < 0 || head.y >= canvas.height ||
    snake.slice(1).some(p => p.x === head.x && p.y === head.y)
  ) {
    clearInterval(game);
    alert(`Game Over! Score: ${score}`);
    return;
  }

  // eat food
  if (head.x === food.x && head.y === food.y) {
    snake.unshift(head);
    score += 10;
    document.getElementById("score").textContent = `Score: ${score}`;
    food = randomFood();
  } else {
    snake.unshift(head);
    snake.pop();
  }
}

// ===== INPUT =====
document.addEventListener("keydown", changeDirection);

function changeDirection(e) {
  const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

  if (e.keyCode === LEFT && dx === 0) {
    dx = -20; dy = 0;
  } else if (e.keyCode === UP && dy === 0) {
    dx = 0; dy = -20;
  } else if (e.keyCode === RIGHT && dx === 0) {
    dx = 20; dy = 0;
  } else if (e.keyCode === DOWN && dy === 0) {
    dx = 0; dy = 20;
  }
}

// ===== LOOP =====
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  drawFood();
  advanceSnake();
  drawSnake();
}

// ===== RESET GAME =====
function resetGame() {
  clearInterval(game);
  snake = [
    { x: 80, y: 40 },
    { x: 60, y: 40 },
    { x: 40, y: 40 }
  ];
  dx = 20;
  dy = 0;
  score = 0;
  document.getElementById("score").textContent = `Score: ${score}`;
  food = randomFood();
  game = setInterval(gameLoop, 150);
}

let game = setInterval(gameLoop, 150);
document.getElementById("RestartBtn").addEventListener("click", resetGame);

// ===== QUOTE BUTTON =====
document.getElementById("QuoteBtn").addEventListener("click", () => {
  fetch("/quote")
    .then(res => res.json())
    .then(data => {
      const box = document.getElementById("quote-box");
      box.textContent = data.quote;
    })
    .catch(err => console.error("Error fetching quote:", err));
});