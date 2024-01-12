let visitedNode = [];


async function dijkstra(cellArray, startNode ,endNode) {

    // animation();

    let unvisitedNode = cellArray.slice(); // Copy the array
    let distanceTable = {};
    let currentNode = startNode;

    for (cell of cellArray) {
        distanceTable[cell.index] = {
            disFromSource: Infinity,
            preNode: null,
        };
    }

    distanceTable[startNode.index] = { disFromSource: 0, preNode: null };
    // visitedNode.push(currentNode);
    
    unvisitedNode = unvisitedNode.filter(node => node !== currentNode);
    // console.log(unvisitedNode);
        while (unvisitedNode.length > 0) {
            setTimeout(()=>{

            },100);
            let neiArray = findNeighbours(currentNode, cellArray);
    
            for (let neighbor of neiArray) {
                if(!neighbor.isWall){
                    let newDistance = distanceTable[currentNode.index].disFromSource + neighbor.weight;
                     neighbor.div.style.backgroundColor = "#7AE582";
                     await new Promise(resolve => setTimeout(resolve, 1));
                    if (newDistance < distanceTable[neighbor.index].disFromSource) {
                        distanceTable[neighbor.index] = { disFromSource: newDistance, preNode: currentNode};
                    }
                }
                
            }
            visitedNode.push(currentNode);
            currentNode.div.style.backgroundColor = "#00A5CF";
            // Find the next unvisited node with the smallest tentative distance
            let minDistance = Infinity;
            let nextNode = null;
    
            for (let node of unvisitedNode) {
                if (distanceTable[node.index].disFromSource < minDistance) {
                    minDistance = distanceTable[node.index].disFromSource;
                    nextNode = node;
                }
            }
    
            if (nextNode === null) {
                // All remaining nodes are unreachable, break the loop
                break;
            }
            
           if(nextNode.isEnd == true){
            break;
           }
    
            currentNode = nextNode;
            unvisitedNode = unvisitedNode.filter(node => node !== currentNode);
        }
        console.log(visitedNode);
        findShortesPath(endNode,distanceTable);
}




function findShortesPath(endNode ,distanceTable){
    let shortestPathArray = [];
    let node = endNode;
   shortestPathArray.push(node);
    while(node!=null){
        shortestPathArray.push(distanceTable[node.index].preNode);
        node = distanceTable[node.index].preNode;
       
    }
    shortestPathArray.pop();
    // console.log(shortestPathArray);
    for(let path of shortestPathArray){
       path.div.style.backgroundColor = "yellow";
    }
}


function findNeighbours(currentNode,cellArray){
    let neighbours=[];
    // console.log(currentNode.x,currentNode.y)
    // console.log(cellArray.length);
    for(let i=0;i<cellArray.length;i++){   
        if(currentNode.x==(cellArray[i].x) && (currentNode.y-sizeOFCell)==(cellArray[i].y)){  //upNode
            if(!visitedNode.includes(cellArray[i])){
               
                neighbours.push(cellArray[i]);
            }
        }
        if(currentNode.x==(cellArray[i].x) && (currentNode.y+sizeOFCell)==(cellArray[i].y)){ //downNode
            if(!visitedNode.includes(cellArray[i])){
              
                neighbours.push(cellArray[i]);

            }
        }
        if((currentNode.x-sizeOFCell)==(cellArray[i].x) && currentNode.y == cellArray[i].y){ //leftNode
            if(!visitedNode.includes(cellArray[i])){
             
                neighbours.push(cellArray[i]);

            }
        }
        if((currentNode.x+sizeOFCell)==(cellArray[i].x) && currentNode.y == cellArray[i].y){ //rightNode
            if(!visitedNode.includes(cellArray[i])){
             
                neighbours.push(cellArray[i]);

            }
        }
   
    }
    // console.log(neighbours);
    return neighbours;
 
}