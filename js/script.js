const colorPicker = document.querySelector("input[type=color]");
const colorBtn = document.querySelector("input[value=Color]");
const colorValue = colorPicker.value;
const raindowBtn = document.querySelector("input[value=Rainbow]");
const eraserBtn = document.querySelector("input[value=Eraser]");
const clearBtn = document.querySelector("input[value=Clear]");
const sizeBtn = document.querySelector("input[value=Size]");

const gridContainer = document.querySelector(".grid-container");
const grid = document.querySelector(".grid");

const gridRow = document.createElement("div");
const gridColumn = document.createElement("div");

gridColumn.append(gridRow);
gridColumn.style.display = "flex";

grid.append(gridColumn);

let size;
function gridSize() {
  size = prompt("Enter grid size");
  while (size > 100) {
    size = prompt("Highest grid size is 100!");
  }
}

gridSize();

let divHeight = 550 / size;
let divWidth = 1000 / size;

const div = document.createElement("div");
div.style.backgroundColor = "#72a4f0";
div.style.border = `2px solid black`;
div.style.width = `${divWidth}px`;
div.style.height = `${divHeight}px`;

function createGridSize() {
  for (let i = 0; i < size; i++) {
    gridRow.append(div.cloneNode(true));
  }

  for (let j = 0; j < size - 1; j++) {
    gridColumn.appendChild(gridRow.cloneNode(true));
  }
}

createGridSize();
