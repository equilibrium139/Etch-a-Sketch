const container = document.querySelector("#container");

let dimension = 16;

function width() {return 100 / dimension;}

function squareDimension () {return 900 / dimension;}

createGrid();

function createSquare() {
    let div = document.createElement("div");
    div.style.cssText = `float: left ; width: ${squareDimension()}px; height: ${squareDimension()}px;`;
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });
    return div;
}

function createGrid() {
    for (let i = 0; i < dimension * dimension; ++i) {
        //addRow();
        container.appendChild(createSquare());
    }
}

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clear);

let resizeButton = document.querySelector("#resize");
resizeButton.addEventListener("click", resize);

function clear() {
    let elements = container.children;
    for(let i = 0; i < elements.length; ++i)
    {
        elements[i].style.backgroundColor = "white";
    }
}

function removeSquares(nSquares)
{
    if(nSquares < 0) { addSquares(-nSquares);}
    for(let i = 0; i < nSquares; ++i)
    {
        container.removeChild(container.firstChild);
    }
}

function addSquares(nSquares)
{
    for(let i = 0; i < nSquares; ++i)
    {
        container.appendChild(createSquare());
    }
}

function resetSquareDims()
{
    let elements = container.children;
    for(let i = 0; i < elements.length; ++i)
    {
        elements[i].style.width = `${squareDimension()}px`;
        elements[i].style.height =  `${squareDimension()}px`;
    }
}

function resize() {
    clear();
    let oldDimension = dimension;
    do {
        dimension = prompt("Enter a number between 1 and 100", dimension);
    } while(dimension > 100 && dimension < 1);
    resetSquareDims();

    if(dimension - oldDimension < 0) {
        removeSquares((oldDimension * oldDimension) - (dimension * dimension));
        console.log("Removing  " + ((oldDimension * oldDimension) - (dimension * dimension)) + " squares");
    }
    else {
        addSquares((dimension * dimension) - (oldDimension * oldDimension)); 
        console.log("Adding " + ((dimension * dimension) - (oldDimension * oldDimension)) + " squares");
    }
    // createGrid();
}