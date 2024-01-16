function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("#controls button[data-create]");
const destroyButton = document.querySelector("#controls button[data-destroy]");
const inputNumber = document.querySelector('#controls input[type="number"]');
const divBoxes = document.querySelector("#boxes");

createButton.addEventListener("click", ev => {
  if (inputNumber.value > 0 && inputNumber.value <= 100) {
    destroyBoxes();
    divBoxes.insertAdjacentHTML("beforeend", createBoxes(inputNumber.value));
    inputNumber.value = '';
  }
})

destroyButton.addEventListener("click", ev => {
  destroyBoxes()
})

function createBoxes(amount) {
  let divSize = 30;
  let boxesMarkup = [];
  for (let i = 0; i < amount; i++) {
    boxesMarkup[i] = `<div style="background-color: ${getRandomHexColor()}; width: ${divSize}px; height: ${divSize}px;"></div>`;
    divSize += 10;
  }
  boxesMarkup = boxesMarkup.join("");
  return boxesMarkup;
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}