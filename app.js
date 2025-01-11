const field = document.getElementById('field');
const ball = document.getElementById('ball');

field.addEventListener('click', function (event) {
  const x = event.clientX;
  const y = event.clientY; 
  ball.style.transform = `translate(${x - 25}px, ${y - 25}px)`;
});     