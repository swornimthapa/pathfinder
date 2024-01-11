const canvas = document.getElementById("canvas");
// const canvas = document.getElementById("div-container");

canvas.width = window.innerWidth*0.97;
canvas.height = window.innerHeight*0.8;
const sizeOFCell = 25;
const noOfBoxPerRow = Math.floor(canvas.height/sizeOFCell);
const noOfBoxPerColumn = Math.floor(canvas.width/sizeOFCell);
// console.log(noOfBoxPerColumn);
// console.log(noOfBoxPerRow);

let runButton = document.getElementById("run");

// let grid =[];
let xCodiInc = 0;
let yCodiInce =0;

let cellArray = [];
let renderGrid = () =>{
    let index =0;
    for(let row=0;row<noOfBoxPerRow;row++){
        // let localGrid =[];
        for(let column=0;column<noOfBoxPerColumn;column++){
            let cell = new Cell(xCodiInc,yCodiInce,sizeOFCell,index);
            cell.renderCell();
            cellArray.push(cell);
            xCodiInc = xCodiInc +sizeOFCell;
            index++;
            // localGrid.push(cell);
        }
        xCodiInc = 0;
        yCodiInce = yCodiInce+sizeOFCell;
        // grid.push(localGrid);
    
    }
}



window.onload = function() {
    renderGrid();

};


runButton.addEventListener("click",()=>{
    if(startNode && endNode){
        dijkstra(cellArray,startNode,endNode);
    }
})