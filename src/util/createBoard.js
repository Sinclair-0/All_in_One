import {createCell} from "./createCell";
export function createBoard(side, mimics) {
    const arr = [];
    for (let i = 0; i < side; i++) {
        const row = [];
        for (let j = 0; j < side; j++) {
            row.push(createCell(i,j));
        }
        arr.push(row);
    }
    insertMimics(arr, mimics);

    return arr;
}

function insertMimics(arr, mimics) {
    let mimicsToPlace = mimics;
    while(mimicsToPlace > 0) {
        let row = Math.floor(Math.random() * arr.length);      
        let col = Math.floor(Math.random() * arr.length);
         //00 01 10 11 should not have a mimic
        while((row==col && row==0) || (row==col && row ==1) || (row==0 && col==1) || (row==1 && col==0)) {      //If any of these cases are true, it is in an invalid location
            let rand = Math.floor(Math.random() * 2);           //Decide if you will change the row or col position
                if (rand == 1)
                    row = Math.floor(Math.random() * arr.length);
                else
                    col = Math.floor(Math.random() * arr.length);
        }
        if (!arr[row][col].isMimic) {
            arr[row][col].isMimic = true;
                //Increment surrounding cells
                let rowTemp = row - 1;
                let colTemp = col - 1;
                for(let i = 0; i < 3; i++) {
                    colTemp = col - 1;
                    for (let j = 0; j < 3; j++) {
                        if((rowTemp >= 0 && rowTemp < arr.length) && (colTemp >= 0 && colTemp < arr.length))        //Make sure to not fall out of range as a mimic can be on an edge
                            arr[rowTemp][colTemp].surrounding += 1;
                        colTemp++;
                    }
                    rowTemp++;
                }

            mimicsToPlace--;
        }
    }
}

export function getNeighbors(row, col, arr) {
    const height = arr.length;
    const width = height;
    const neighbors = [];
    if (row - 1 >= 0) neighbors.push([row - 1, col]);
    if (row + 1 < height) neighbors.push([row + 1, col]);
    if (col + 1 < width) neighbors.push([row, col + 1]);
    if (col - 1 >= 0) neighbors.push([row, col - 1]);

    if (row - 1 >= 0 && col - 1 >= 0) neighbors.push([row - 1, col - 1]);
    if (row - 1 >= 0 && col + 1 < width) neighbors.push([row - 1, col + 1]);
    if (row + 1 < height && col - 1 >= 0) neighbors.push([row + 1, col - 1]);
    if (row + 1 < height && col + 1 < width) neighbors.push([row + 1, col + 1]);

    return neighbors;
    
}