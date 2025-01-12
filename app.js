const field = document.getElementById("field");
const ball = document.getElementById("ball");

field.addEventListener("click", function (event) {
  const field = document.getElementById("field");
  const ball = document.getElementById("ball");

  field.addEventListener("click", function (event) {
    const x = event.clientX;
    const y = event.clientY;

    ball.style.left = `${x - 25}px`;
    ball.style.top = `${y - 25}px`;

    ball.style.animation = "none";
    void ball.offsetWidth;
    ball.style.animation = "spin 3s ease-out";
  });
});
