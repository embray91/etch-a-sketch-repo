const container = document.querySelector('#container');
const button = document.getElementById('clear');


function random(min,max) {
let rnum = Math.floor(Math.random()*(max-min) + min);
  return rnum; 
}

function randomColor() {
  return `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`;
}
  const hvfn = (e) => {
e.target.classList.add('hover');
};

const fn = (e) => {
for (let i=0; i<e; i++) {
  const gridRow = document.createElement('div');
  gridRow.classList.add('row');
  container.appendChild(gridRow);
for (let j=0; j<e; j++) {
const gridDiv = document.createElement('div');
gridDiv.classList.add('grid');
gridRow.appendChild(gridDiv);
gridDiv.addEventListener('mouseover', hvfn);
}
}
};

fn(16);


const newGrid = () => {
 let num = prompt(`Enter number of columns for new grid.`);
fn(num);
};

const clearGrid = () => {
while (container.firstChild) {
container.removeChild(container.firstChild);
}
};

button.addEventListener('click', clearGrid);
button.addEventListener('click', newGrid);






