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

sizeBtn.addEventListener("click", gridSize);

// gridColumn.append(gridRow);
gridColumn.style.display = "flex";

grid.append(gridColumn);

let size = 64;
createGridSize();

function gridSize() {
  size = prompt("Enter grid size");
  while (size > 100) {
    size = prompt("Highest grid size is 100!");
  }
  createGridSize();
}

let isRightMouseDown = false;

function createGridSize() {
  gridColumn.innerHTML = "";
  gridRow.innerHTML = "";
  let divHeight = 550 / size;
  let divWidth = 550 / size;
  let div = document.createElement("div");
  div.style.width = `${divWidth}px`;
  div.style.height = `${divHeight}px`;

  for (let i = 0; i < size; i++) {
    gridRow.append(div.cloneNode(true));
  }
  for (let j = 0; j < size; j++) {
    gridColumn.appendChild(gridRow.cloneNode(true));
  }

  gridColumn.addEventListener("mousedown", (event) => {
    if (event.button === 0) {
      isRightMouseDown = true;
      event.preventDefault();
    }
  });

  gridColumn.addEventListener("mouseup", () => {
    isRightMouseDown = false;
  });

  gridColumn.addEventListener("mousemove", (event) => {
    if (isRightMouseDown) {
      event.target.style.backgroundColor = colorPicker.value;
    }
  });
}

function changeCellColor(event) {
  const cell = event.target;
  cell.style.backgroundColor = colorPicker.value;
}
