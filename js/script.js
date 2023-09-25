const colorPicker = document.querySelector("input[type=color]");
const colorBtn = document.querySelector("input[value=Color]");
const colorValue = colorPicker.value;
const raindowBtn = document.querySelector("input[value=Rainbow]");
const eraseBtn = document.querySelector("input[value=Eraser]");
const clearBtn = document.querySelector("input[value=Clear]");
const sizeBtn = document.querySelector("input[value=Size]");

const gridContainer = document.querySelector(".grid-container");
const grid = document.querySelector(".grid");

const gridRow = document.createElement("div");
const gridColumn = document.createElement("div");

sizeBtn.addEventListener("click", gridSize);

let mobile = window.matchMedia("(max-width: 480px)"),
  medium = window.matchMedia("(max-width: 768px)"),
  large = window.matchMedia("(max-width: 1024px)"),
  xlarge = window.matchMedia("(min-width: 1025px)");

// gridColumn.append(gridRow);
gridColumn.style.display = "flex";

grid.append(gridColumn);

let size = 16;
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
  let width;

  if (mobile.matches) {
    width = 280;
  } else if (medium.matches) {
    width = 300;
  } else if (large.matches) {
    width = 550;
  } else if (xlarge.matches) {
    width = 550;
  } else {
    width = 550;
  }

  gridColumn.innerHTML = "";
  gridRow.innerHTML = "";
  let divHeight = width / size;
  let divWidth = width / size;
  let div = document.createElement("div");
  div.style.width = `${divWidth}px`;
  div.style.height = `${divHeight}px`;

  for (let i = 0; i < size; i++) {
    gridRow.append(div.cloneNode(true));
  }
  for (let j = 0; j < size; j++) {
    gridColumn.appendChild(gridRow.cloneNode(true));
  }

  color(gridColumn);
}

function changeCellColor(event) {
  const cell = event.target;
  cell.style.backgroundColor = colorPicker.value;
}

function checkMouseUpAndDown(cell) {
  cell.addEventListener("mousedown", (event) => {
    if (event.button === 0) {
      isRightMouseDown = true;
      event.preventDefault();
    }
  });

  cell.addEventListener("mouseup", () => {
    isRightMouseDown = false;
  });
}

function color(cell) {
  checkMouseUpAndDown(cell);

  cell.addEventListener("mousemove", (event) => {
    if (isRightMouseDown) {
      event.target.style.backgroundColor = colorPicker.value;
    }
  });
}

function erase(cell) {
  checkMouseUpAndDown(cell);

  cell.addEventListener("mousemove", (event) => {
    if (isRightMouseDown) {
      event.target.style.backgroundColor = "#d9d9d9";
    }
  });
}

eraseBtn.addEventListener("click", () => {
  erase(gridColumn);
});

colorBtn.addEventListener("click", () => {
  color(gridColumn);
});

clearBtn.addEventListener("click", () => {
  gridColumn.innerHTML = "";
  gridRow.innerHTML = "";
  createGridSize();
});

raindowBtn.addEventListener("click", () => {
  checkMouseUpAndDown(gridColumn);

  gridColumn.addEventListener("mousemove", (event) => {
    if (isRightMouseDown) {
      event.target.style.backgroundColor = randomColor();
    }
  });
});

function randomColor() {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + color;
}
