let grid = document.getElementById("gridContainer");

for (let i = 0; i < 256; i++) {
  let gridBox = document.createElement("p");
  gridBox.classList.add("gridBox");
  grid.appendChild(gridBox);
}

const boxes = document.querySelectorAll('.gridBox')
boxes.forEach((gridBox) => (
  gridBox.addEventListener('mouseover', () => {
    gridBox.classList.add('colorChange');
  })
))

let optionsContainer = document.getElementById('optionsContainer');
let greyScaleButton = document.createElement("btn");
let resetButton = document.createElement("btn");
let rainbowButton = document.createElement("btn");


resetButton.textContent = 'RESET GRID';
resetButton.addEventListener('click', () => {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  let newSideLength = Number(prompt("Enter a new amount of blocks per side (Default: 16)"));
  let newGridBoxWidth = 800 / newSideLength;
  let newGridBoxHeight = 800 / newSideLength;
  let amountOfBoxes = newSideLength ** 2;

  for (let i = 0; i < amountOfBoxes; i++) {
    let gridBox = document.createElement("p");
    gridBox.classList.add("gridBox");
    gridBox.addEventListener('mouseover', () => {
      gridBox.classList.add('colorChange');
    });
    gridBox.style.width = newGridBoxWidth + 'px';
    gridBox.style.height = newGridBoxHeight + 'px';
    grid.appendChild(gridBox);
  }
});
optionsContainer.appendChild(resetButton);
