dconst canvas = document.getElementById('gameCanvas');const ctx = canvas.getContext('2d');

const originalTileSize = 16;
const scale = 3;
const tileSize = originalTileSize * scale;
const maxScreenCol = 16;
const maxScreenRow = 12;
const screenWidth = tileSize * maxScreenCol;
const screenHeight = tileSize * maxScreenRow;

canvas.width = screenWidth;
canvas.height = screenHeight;

const player = {
  x: screenWidth / 2,
  y: screenHeight / 2,
  width: tileSize,
  height: tileSize,
  speed: 5
};

const keys = {
  w: false,
  a: false,
  s: false,
  d: false,
};

window.addEventListener('keydown', (e) => {
  if (e.key === 'w') keys.w = true;
  if (e.key === 'a') keys.a = true;
  if (e.key === 's') keys.s = true;
  if (e.key === 'd') keys.d = true;
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'w') keys.w = false;
  if (e.key === 'a') keys.a = false;
  if (e.key === 's') keys.s = false;
  if (e.key === 'd') keys.d = false;
});

function update() {
  if (keys.w) player.y -= player.speed;
  if (keys.a) player.x -= player.speed;
  if (keys.s) player.y += player.speed;
  if (keys.d) player.x += player.speed;
}

function draw() {
  ctx.clearRect(0, 0, screenWidth, screenHeight);
  drawMap();
  ctx.fillStyle = 'red';
  ctx.fillRect(player.x, player.y, player.width, player.height);

gameLoop();