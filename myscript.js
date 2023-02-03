//#region Making a starting container and grid 16x16

var gridSize = 16;

// Creating the container
let container = document.createElement('div');
container.className = "container";

// Make the container size constant, we will only change the number of small squares in the container
container.style.width = "500px";
container.style.height = "500px";

container.style.outline = "solid";
container.style.alignSelf = "center";

let content = document.getElementById("content");
content.appendChild(container);



// Creating the elements for the container (cells)
let div = document.createElement('div');
div.className = "grid";

div.style.backgroundColor = 'white';

MakeNewGrid(gridSize);

//#endregion

//#region Drawing on the grid

// Hover effect over element (doesn't get erased automatically)

// Checks if the left mouse button is held down,
// if it is then we change the color otherwise nothing happens
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

container.addEventListener('mouseover', function (event) {
    if (mouseDown)
    {
        event.target.style.backgroundColor = 'lightblue';
    }
    
});

/* Erases the color
container.addEventListener('mouseout', function(event) {
    event.target.style.backgroundColor = 'white';
})
*/

//#endregion

//#region UI Functionality

// Button for clearing the drawing area (grid)
let btnClear = document.getElementById("btnClear");

btnClear.addEventListener('click', function() {
    RemoveAllChildren();
    MakeNewGrid(gridSize);
});

// Button that asks for input and changes gridSize to the input
let btnGrid = document.getElementById("btnGrid");

btnGrid.addEventListener('click', function() {
    let input = prompt("Enter the desired grid size:");
    if (inputCheck(input))
    {
        gridSize = Number(input);
        console.log(gridSize);

        RemoveAllChildren();
        MakeNewGrid(gridSize);
    }
    
});

//#endregion

//#region Helper Methods

// Function to check if the input from the button is correct and in range[1 - 64]
function inputCheck(input)
{
    if (Number(input) < 1 || Number(input) > 64 || isNaN(Number(input))) 
    {
        alert("The input has to be a number between 1 and 64!");
        return false;
    }
    else
    {
        return true;
    }
}

// Removes all the children from the container
function RemoveAllChildren()
{
    while (container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
}

// Adds new children to the container when the gridSize changes
function MakeNewGrid(gridSize)
{
    // Divide the side of the container with the gridSize to get the number side of the small square in the container
    div.style.width = div.style.height = (500/gridSize).toString() + "px" ;
    
    // Appending the appropriate number of children to the container
    for(let i = 0; i < gridSize; i++)
    {
        for(let j = 0; j < gridSize; j++)
        {
            container.appendChild(div.cloneNode(true));
        }
    }
}

//#endregion