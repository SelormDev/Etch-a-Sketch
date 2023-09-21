const colorPicker = document.querySelector("input[type=color]");
const colorBtn = document.querySelector("input[value=Color]");
const colorValue = colorPicker.value;
const raindowBtn = document.querySelector("input[value=Rainbow]");
const eraserBtn = document.querySelector("input[value=Eraser]");
const clearBtn = document.querySelector("input[value=Clear]");

const gridContainer = document.querySelector(".grid-container");
const grid = document.querySelector(".grid");

const gridRow = document.createElement("div");
const gridColumn = document.createElement("div");

gridColumn.append(gridRow);
gridColumn.style.display = "flex";

grid.append(gridColumn);

const div = document.createElement("div");
div.style.backgroundColor = "#72a4f0";
div.style.border = "0.1px solid black";
div.style.width = "20px";
div.style.height = "11px";

function createGridSize() {
  for (let i = 0; i < 50; i++) {
    gridRow.append(div.cloneNode(true));
  }

  for (let j = 0; j < 49; j++) {
    gridColumn.appendChild(gridRow.cloneNode(true));
  }
}

createGridSize();
