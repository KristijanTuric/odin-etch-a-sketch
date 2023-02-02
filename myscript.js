const gridSize = 64;

// Creating the container
let container = document.createElement('div');
container.className = "container";

// Make the container size constant, we will only change the number of small squares in the container
container.style.width = "500px";
container.style.height = "500px";

container.style.outline = "solid";
container.style.alignSelf = "center";

document.body.appendChild(container);

// Creating the elements for the container (cells)
let div = document.createElement('div');
div.className = "grid";

// Divide the side of the container with the gridSize to get the number side of the small square in the container
div.style.width = div.style.height = (500/gridSize).toString() + "px" ;

div.style.backgroundColor = 'white';

// Hover effect over element (doesn't get erased automatically)

// Checks if the left mouse button is held down,
// if it is then we change the color otherwise nothing happens
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

console.log(container.addEventListener('mouseover', function (event) {
    if (mouseDown)
    {
        event.target.style.backgroundColor = 'lightblue';
    }
    
}));





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