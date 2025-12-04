/*
Quick solution to Day 4 of Advent of Code '25
*/
async function run4(inputFile){
  const input = await getInput4(inputFile);
  console.log("Amount of rolls that can be moved is", processInput4(input));
}
function processInput4(input){
    let canMoveCount = 0;
    const atLimit = 4;
    const adjacentAmount = 8;
    let spaces = [];
    for (let i = 0; i < input.length; i++){
        //why javascript, why?!
        //do below as we're going to mark with x's later
        let markerRow = input[i].split("");
        for (let j = 0; j < input[i].length; j++){
            let rollCount = 0;
            if (input[i][j] === "@"){
                rollCount += checkForAt(input, i-1, j-1); //topLeft
                rollCount += checkForAt(input, i-1, j); //top
                rollCount += checkForAt(input, i-1, j+1); //topRight
                rollCount += checkForAt(input, i, j-1); //left
                rollCount += checkForAt(input, i, j+1); //right
                rollCount += checkForAt(input, i+1, j-1); //bottomLeft
                rollCount += checkForAt(input, i+1, j); //bottom
                rollCount += checkForAt(input, i+1, j+1); //bottomRight
                if (rollCount < atLimit){
                    markerRow[j] = "x"
                    canMoveCount ++;
                }
            }
        }
        markerRow = markerRow.join("");
        spaces.push(markerRow);
    }
    spaces.forEach(space => {
        console.log("Space", space);
    })
    return canMoveCount
}
function checkForAt(input, row, col){
    return input && input[row] && input[row][col] && input[row][col] === "@" ? 1 : 0;
}
async function getInput4(inputFile){
  let result = await fetch(inputFile);
  if (result.ok){
    const uneditedInput = await result.text();
    const input = uneditedInput.split("\r\n");
    return input;
  }
  return [];
}