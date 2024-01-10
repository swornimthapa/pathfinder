const divcontainer = document.getElementById("div-container");


class Cell{
    constructor(x,y,sizeOFCell){
        this.x= x;
        this.y = y;
        this.sizeOFCell = sizeOFCell;
        this.div = null;
    }

    // renderCell(){
    //     ctx.beginPath();
    //     ctx.rect(this.x,this.y,this.sizeOFCell,this.sizeOFCell);
    //     ctx.strokeStyle = "black";
    //     ctx.stroke();
    // }

    createDiv() {
        this.div = document.createElement("div");
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.width = this.sizeOFCell + "px";
        this.div.style.height = this.sizeOFCell + "px";
        this.div.style.border = "1px solid red";
        this.div.style.display = "inline-block";
        this.div.id = this.index;
        divcontainer.appendChild(this.div);

        this.div.addEventListener("mouseover",()=>{
            this.div.style.backgroundColor = "blue";

        })
    }

 
}
