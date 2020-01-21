const container = document.querySelector("#container");

let width = 100 / 20;

for(let i = 0; i < 20; ++i)
{
    let row = document.createElement("div");
    container.appendChild(row);
    for(let j = 0; j < 20; ++j)
    {
        let div = document.createElement("div");
        div.style.cssText = `display: inline-block ; width: ${width}%; height: 100%;`;
        row.appendChild(div);
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black"; 
        });
    }
}
