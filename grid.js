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


// class Cell{
//     constructor(x,y,sizeOFCell){
//         this.x= x;
//         this.y = y;
//         this.sizeOFCell = sizeOFCell;
//         this.div = null;
//     }

//     // renderCell(){
//     //     ctx.beginPath();
//     //     ctx.rect(this.x,this.y,this.sizeOFCell,this.sizeOFCell);
//     //     ctx.strokeStyle = "black";
//     //     ctx.stroke();
//     // }

//     createDiv() {
//         this.div = document.createElement("div");
//         this.div.style.position = "absolute";
//         this.div.style.left = this.x + "px";
//         this.div.style.top = this.y + "px";
//         this.div.style.width = this.sizeOFCell + "px";
//         this.div.style.height = this.sizeOFCell + "px";
//         this.div.style.border = "1px solid red";
//         this.div.style.display = "inline-block";
//         this.div.id = this.index;
//         divcontainer.appendChild(this.div);

//         this.div.addEventListener("mouseover",()=>{
//             // this.div.style.backgroundColor = "blue";

//         })
//     }

 
// }


let cellArray = [];
let renderGrid = () =>{
    for(let row=0;row<noOfBoxPerRow;row++){
        for(let column=0;column<noOfBoxPerColumn;column++){
            let cell = new Cell(xCodiInc,yCodiInce,sizeOFCell);
            // cell.renderCell();
            cell.createDiv();
            cellArray.push(cell);
            xCodiInc = xCodiInc +sizeOFCell;
            
        }
        xCodiInc = 0;
        yCodiInce = yCodiInce+sizeOFCell;
    
    }
}

window.onload = function() {
    renderGrid();
};