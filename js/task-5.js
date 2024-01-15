function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const body = document.querySelector("body");
const textColor = document.querySelector(".color");

changeColorButton.addEventListener("click", ev => {
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
})