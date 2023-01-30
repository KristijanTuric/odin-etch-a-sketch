const gridCellSize = 30;
const gridSize = 16;
const containerWidth = gridCellSize * gridSize;

// Creating the container
let container = document.createElement('div');
container.className = "container";
container.style.width = containerWidth.toString() + "px"; // gridCellSize * gridSize
document.body.appendChild(container);

// Creating the elements for the container (cells)
let div = document.createElement('div');
div.className = "grid";
div.style.width = div.style.height = gridCellSize.toString() + "px";
div.style.backgroundColor = 'white';

// Hover effect over element (doesn't get erased automatically)
container.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'blue';
})

/* Erases the color
container.addEventListener('mouseout', function(event) {
    event.target.style.backgroundColor = 'white';
})
*/

// Appending the appropriate number of children to the container
for(let i = 0; i < gridSize; i++)
{
    for(let j = 0; j < gridSize; j++)
    {
        container.appendChild(div.cloneNode(true));
    }
}