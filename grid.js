const canvas = document.getElementById("canvas");
const ctx= canvas.getContext("2d");
canvas.width = window.innerWidth*0.97;
canvas.height = window.innerHeight*0.8;
const sizeOFCell = 30;
const noOfBoxPerRow = Math.floor(canvas.height/sizeOFCell);
const noOfBoxPerColumn = Math.floor(canvas.width/sizeOFCell);
// console.log(noOfBoxPerColumn);
// console.log(noOfBoxPerRow);

let xCodiInc = 0;
let yCodiInce =0;

let cellArray = [];
let renderGrid = () =>{
    let index =0;
    for(let row=0;row<noOfBoxPerRow;row++){
        for(let column=0;column<noOfBoxPerColumn;column++){
            let cell = new Cell(xCodiInc,yCodiInce,sizeOFCell,index);
            cell.renderCell();
            cellArray.push(cell);
            xCodiInc = xCodiInc +sizeOFCell;
            index++;
        }
        xCodiInc = 0;
        yCodiInce = yCodiInce+sizeOFCell;
    
    }
}

window.onload = function() {
    renderGrid();
};

console.log(cellArray);