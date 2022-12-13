// Create a canvas element
let canvas = document.createElement('canvas');
canvas.width = 600;
canvas.height = 600;
document.body.appendChild(canvas);

// Get the canvas 2D context
let ctx = canvas.getContext('2d');

// Setup a few variables
let x = 0;
let y = 0;
let stepX = 10;
let stepY = 10;
let color = '#000';

// Animation loop
let animationLoop = () => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 10, 10);

  // Update x and y
  x += stepX;
  y += stepY;

  // Change direction when hitting a wall
  if (x > canvas.width || x < 0) {
    stepX = -stepX;
    color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  if (y > canvas.height || y < 0) {
            stepY = -stepY;
}