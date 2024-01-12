const divcontainer = document.getElementById("div-container");
const wallButton = document.getElementById("wall");
const weightButton = document.getElementById("weights");
const startButton = document.getElementById("start");
const endButton = document.getElementById("end");

let isClicked = false;
let isWallClicked = false;
let isStartClicked = false;
let isEndClicked = false;
let isWeightClicked = false;


let isStartAvailable = true;
let isEndAvailable = true;

let startNode;
let endNode;

class Cell {
  constructor(
    x,
    y,
    sizeOFCell,
    index,
    isWall = false,
    isStart = false,
    isEnd = false
  ) {
    this.x = x;
    this.y = y;
    this.sizeOFCell = sizeOFCell;
    this.div = null;
    this.index = index;
    this.isWall = isWall;
    this.isStart = isStart;
    this.isEnd = isEnd;
    this.weight = 1;

    this.isWeightAdded = false;
  }

  // renderCell(){
  //     ctx.beginPath();
  //     ctx.rect(this.x,this.y,this.sizeOFCell,this.sizeOFCell);
  //     ctx.strokeStyle = "black";
  //     ctx.stroke();
  // }

  renderCell() {
    this.div = document.createElement("div");
    this.div.style.position = "absolute";
    this.div.style.left = this.x + "px";
    this.div.style.top = this.y + "px";
    this.div.style.width = this.sizeOFCell + "px";
    this.div.style.height = this.sizeOFCell + "px";
    this.div.style.border = "0.1px solid black";
    this.div.style.display = "inline-block";
    this.div.id = `cell-${this.index}`;
    divcontainer.appendChild(this.div);

    this.setEventListeners();
  }
  setEventListeners() {
    this.div.addEventListener("mousedown", () => {
      // if (isWallClicked) {
        isClicked = true;
        
      // }
      if(!this.isWall && !this.isStart && !this.isEnd &&  !this.isWeightAdded){
        if (isWallClicked == true && isClicked == true) {
            this.div.style.backgroundColor = "black";
            this.isWall = true;
          } else if (isStartClicked == true && isStartAvailable==true) {
            this.div.style.backgroundColor = "green";
            this.isStart = true;
            isStartAvailable=false;
            startNode = this;
          }else if(isEndClicked == true && isEndAvailable==true){
            this.div.style.backgroundColor = "red";
            this.isEnd = true;
            isEndAvailable=false;
            endNode=this;
          }else if(isWeightClicked == true && isClicked == true){
            this.div.style.backgroundColor = "#7F5539";
            this.weight = 5;
            this.isWeightAdded = true;
          }
      }
    
    });


    this.div.addEventListener("mouseup", () => {
         isClicked = false;
        
    });


    this.div.addEventListener("mouseover", () => {
        if(!this.isWall && !this.isStart && !this.isEnd &&  !this.isWeightAdded){
            if (isWallClicked == true && isClicked == true) {
                this.div.style.backgroundColor = "black";
                this.isWall = true;

              }else if(isWeightClicked == true && isClicked == true){
                this.div.style.backgroundColor = "#7F5539";
                this.weight = 5;
                 this.isWeightAdded = true;

              }
        }
      
    });
  }
}

wallButton.addEventListener("click", () => {
  isWallClicked = !isWallClicked;
  isStartClicked = false;
  isEndClicked = false;
  isWeightClicked = false;
});

startButton.addEventListener("click", () => {
  isStartClicked = !isStartClicked;
  isWallClicked = false;
  isEndClicked = false;
  isWeightClicked = false;

});
endButton.addEventListener("click", () => {
  isEndClicked = !isEndClicked;
  isWallClicked = false;
  isStartClicked = false;
  isWeightClicked = false;
  
});
weightButton.addEventListener("click",()=>{
  isWeightClicked = !isWeightClicked;
  isWallClicked = false;
  isStartClicked= false;
  isEndClicked = false;
})