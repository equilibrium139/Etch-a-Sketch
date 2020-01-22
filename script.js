const container = document.querySelector("#container");

let dimension = 16;

function width() {return 100 / dimension;}

let grid = [];

createGrid();

function addRow() {
    let row = document.createElement("div");
    container.appendChild(row);
    for (let i = 0; i < dimension; ++i) {
        row.appendChild(createSquare());
    }
    grid.push(row);
}

function createSquare(row) {
    let div = document.createElement("div");
    div.style.cssText = `display: inline-block ; width: ${width()}%; height: 100%;`;
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });
    return div;
}

function createGrid() {
    for (let i = 0; i < dimension; ++i) {
        addRow();
    }
}

function clear() {
    grid.forEach(row => {
        let elements = row.children;
        for(let i = 0; i < elements.length; ++i)
        {
            elements[i].style.backgroundColor = "white";
        }
    });
}

function adjustWidth(row)
{
    let elements = row.children;
    for(let i = 0; i < elements.length; ++i)
    {
        console.log(width());
        elements[i].style.width = `${width()}%`;
    }
}

function removeColumns(columns)
{
    grid.forEach(row => {
        let elements = row.children;
        for(let i = 0; i < columns; ++i)
        {
            row.removeChild(elements[i]);
        }
        adjustWidth(row);
    });
}

function addColumns(columns)
{
    grid.forEach(row => {
        for(let i = 0; i < columns; ++i)
        {
            row.appendChild(createSquare());
        }
        adjustWidth(row);
    });
}


function removeRows(rows)
{
    for(let i = 0; i < rows; ++i)
    {
        container.removeChild(container.lastChild);
    }
}

function addRows(rows)
{
    for(let i = 0; i < rows; ++i)
    {
        addRow();
    }
}

function adjustRowHeight()
{
    grid.forEach(row => {
        row.style.cssText = `height: ${900 / dimension}px`;
    });
}

function resize() {
    let oldDimension = dimension;
    do {
        dimension = prompt("Enter a number between 1 and 100");
    } while(dimension > 100 && dimension < 1);
    if(dimension < oldDimension) {removeRows(oldDimension - dimension); removeColumns(oldDimension - dimension);}
    else if(dimension > oldDimension) {addColumns(dimension - oldDimension); addRows(dimension - oldDimension); console.log(grid.length); }
    adjustRowHeight();
    // createGrid();
}

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clear);

let resizeButton = document.querySelector("#resize");
resizeButton.addEventListener("click", resize);