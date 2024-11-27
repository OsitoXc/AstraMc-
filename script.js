// Selección del canvas
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

// Ajustar tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Arrays para estrellas y meteoritos
const stars = [];
const meteorites = [];

// Crear estrellas
function createStars() {
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      opacity: Math.random()
    });
  }
}

// Crear meteoritos
function createMeteorites() {
  for (let i = 0; i < 10; i++) {
    meteorites.push({
      x: Math.random() * canvas.width,
      y: -Math.random() * canvas.height,
      speed: Math.random() * 5 + 2,
      length: Math.random() * 80 + 20
    });
  }
}

// Dibujar estrellas
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fill();
  });
}

// Dibujar meteoritos
function drawMeteorites() {
  meteorites.forEach((meteorite, index) => {
    ctx.beginPath();
    ctx.moveTo(meteorite.x, meteorite.y);
    ctx.lineTo(
      meteorite.x - meteorite.length,
      meteorite.y + meteorite.length
    );
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Movimiento de los meteoritos
    meteorite.x -= meteorite.speed;
    meteorite.y += meteorite.speed;

    // Reiniciar meteorito cuando sale de la pantalla
    if (
      meteorite.x + meteorite.length < 0 ||
      meteorite.y - meteorite.length > canvas.height
    ) {
      meteorites[index] = {
        x: Math.random() * canvas.width,
        y: -Math.random() * canvas.height,
        speed: Math.random() * 5 + 2,
        length: Math.random() * 80 + 20
      };
    }
  });
}

// Animación
function animate() {
  drawStars();
  drawMeteorites();
  requestAnimationFrame(animate);
}

// Inicializar animación
createStars();
createMeteorites();
animate();
