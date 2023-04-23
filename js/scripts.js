paddy = document.querySelector(".paddy");
paddy.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
  console.log("Menu bar clicked")
}

const logo = document.getElementById('centrallogo');
let opacity = 0;
let direction = 1;

function fadeInOut() {
  if (opacity < 0.1 || opacity > 0.9) {
    direction *= -1;
  }
  opacity += direction * 0.1;
  requestAnimationFrame(fadeInOut);
}

fadeInOut();

const columns = document.querySelectorAll(".column");
columns.forEach(column => {
  column.addEventListener("click", () => {
    columns.forEach(c => {
      c.classList.remove("active");
    });
    column.classList.add("active");
  });
});

