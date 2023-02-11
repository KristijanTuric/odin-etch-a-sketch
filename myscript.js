//#region Making a starting container and grid 16x16

// The grid size used for generating the grid
var gridSize = 16;

// The color used for drawing
var color = 'black';
var flag = 0;

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

// Checks if the left mouse button is held down,
// if it is then we change the color otherwise nothing happens
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

container.addEventListener('mouseover', function (event) {
    if (mouseDown)
    {
        event.target.style.backgroundColor = color;
    }
    
});

//#endregion

//#region UI Functionality

// Button for clearing the drawing area (grid)
let btnClear = document.getElementById("btnClear");

btnClear.addEventListener('click', function() {
    RemoveAllChildren();
    MakeNewGrid(gridSize);
});

// Change the grid value text
let gridText = document.getElementById("gridValue");

// Grid Size Slider
let inputGridSlider = document.getElementById("gridValueSlider");

inputGridSlider.addEventListener('input', function() {
    gridText.textContent = inputGridSlider.value.toString() + " x " + inputGridSlider.value.toString();
});

inputGridSlider.addEventListener('change', function() {
    gridSize = inputGridSlider.value;
    RemoveAllChildren();
    MakeNewGrid(gridSize);
});

// Button for Eraser
let btnEraser = document.getElementById("btnEraser");

btnEraser.addEventListener('click', function() {
    color = 'white';
    flag = 0;
    btnEraser.style.backgroundColor = "black";
    btnDraw.style.backgroundColor = "burlywood";
    btnRainbow.style.backgroundColor = "burlywood";
});

// Take the input from the color picker to change the color of the brush
let inputColor = document.getElementById("inputColorPicker");

inputColor.addEventListener('change', function() {
    color = inputColor.value.toString();
});

// Button that switches to drawing mode with the selected color
let btnDraw = document.getElementById("btnDraw");

btnDraw.addEventListener('click', function() {
    color = inputColor.value.toString();
    flag = 0;
    btnEraser.style.backgroundColor = "burlywood";
    btnDraw.style.backgroundColor = "black";
    btnRainbow.style.backgroundColor = "burlywood";
});

// Button that makes randomizes the color in each cell while you draw
let btnRainbow = document.getElementById("btnRainbow");
btnRainbow.addEventListener('click', function() {
    flag = 1;
    btnEraser.style.backgroundColor = "burlywood";
    btnDraw.style.backgroundColor = "burlywood";
    btnRainbow.style.backgroundColor = "black";
});

container.addEventListener('mouseover', function (event) {
    if (mouseDown && flag == 1)
    {
        color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).slice(1, 7);
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