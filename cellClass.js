const divcontainer = document.getElementById("div-container");
const wallButton = document.getElementById("wall");

const startButton = document.getElementById("start");
const endButton = document.getElementById("end");

let isClicked = false;
let isWallClicked = false;
let isStartClicked = false;
let isEndClicked = false;

let isStartAvailable = true;
let isEndAvailable = true;

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
    this.div.style.border = "1px solid green";
    this.div.style.display = "inline-block";
    this.div.id = `cell-${this.index}`;
    divcontainer.appendChild(this.div);

    this.setEventListeners();
  }
  setEventListeners() {
    this.div.addEventListener("mousedown", () => {
      if (isWallClicked) {
        isClicked = true;
      }
      if(!this.isWall && !this.isStart && !this.isEnd){
        if (isWallClicked == true && isClicked == true) {
            this.div.style.backgroundColor = "black";
            this.isWall = true;
          } else if (isStartClicked == true && isStartAvailable==true) {
            this.div.style.backgroundColor = "green";
            this.isStart = true;
            isStartAvailable=false;
          }else if(isEndClicked == true && isEndAvailable==true){
            this.div.style.backgroundColor = "red";
            this.isEnd = true;
            isEndAvailable=false;
          }
      }
    
    });


    this.div.addEventListener("mouseup", () => {
      isClicked = false;
    });


    this.div.addEventListener("mousemove", () => {
        if(!this.isWall && !this.isStart && !this.isEnd){
            if (isWallClicked == true && isClicked == true) {
                this.div.style.backgroundColor = "black";
                this.isWall = true;

              }
        }
      
    });
  }
}

wallButton.addEventListener("click", () => {
  isWallClicked = !isWallClicked;
  isStartClicked = false;
  isEndClicked = false;
});

startButton.addEventListener("click", () => {
  isStartClicked = !isStartClicked;
  isWallClicked = false;
  isEndClicked = false;
});
endButton.addEventListener("click", () => {
  isEndClicked = !isEndClicked;
  isWallClicked = false;
  isStartClicked = false;
});
