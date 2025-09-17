// ===== CANVAS SETUP =====
const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

// ===== GAME STATE =====
let snake;        // array of body segments
let dx;           // horizontal movement speed
let dy;           // vertical movement speed
let food;         // current food location
let score;        // player score
let game;         // reference to the game loop interval

// ===== GRID =====
function drawGrid() {
  ctx.strokeStyle = "#555";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  const cellSize = 20;
  ctx.strokeStyle = "#333";

  // vertical lines
  for (let x = 0; x <= canvas.width; x += cellSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  // horizontal lines
  for (let y = 0; y <= canvas.height; y += cellSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
}

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
  ctx.fillStyle = "#0f0"; // green
  snake.forEach(part => ctx.fillRect(part.x, part.y, 20, 20));
}

function advanceSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  // ==== collision check (walls or self) ====
  if (
    head.x < 0 || head.x >= canvas.width ||
    head.y < 0 || head.y >= canvas.height ||
    snake.slice(1).some(p => p.x === head.x && p.y === head.y)
  ) {
    clearInterval(game); // stop game loop
    alert(`Game Over! Score: ${score}`);
    return;
  }

  // ==== food check ====
  if (head.x === food.x && head.y === food.y) {
    snake.unshift(head); // add new head without removing tail
    score += 10;
    document.getElementById("score").textContent = `Score: ${score}`;
    food = randomFood(); // new food
  } else {
    snake.unshift(head);
    snake.pop(); // remove tail
  }
}

// ===== INPUT =====
document.addEventListener("keydown", changeDirection);

function changeDirection(e) {
  const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

  // Prevent reverse movement
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

// ===== GAME LOOP =====
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  drawFood();
  advanceSnake();
  drawSnake();
}

// ===== RESET / START GAME =====
function resetGame() {
  clearInterval(game); // stop old game if running

  // reset snake, direction, score, food
  snake = [
    { x: 80, y: 40 },
    { x: 60, y: 40 },
    { x: 40, y: 40 }
  ];
  dx = 20;   // start moving right
  dy = 0;
  score = 0;
  document.getElementById("score").textContent = `Score: ${score}`;
  food = randomFood();

  // start new loop
  game = setInterval(gameLoop, 150);
}

// ===== EVENT: Restart Button =====
document.getElementById("RestartBtn").addEventListener("click", resetGame);

// ===== INITIAL GAME START =====
resetGame();