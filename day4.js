/*
Quick solution to Day 4 of Advent of Code '25
*/
async function run4(inputFile){
  const input = await getInput4(inputFile);
  console.log("Amount of rolls that can be moved is", processInput4(input));
}
function processInput4(input){
    let canMoveCount = 0;
    const atLimit = 3;
    const adjacentAmount = 8;
    let spaces = [];
    for (let i = 0; i < input.length; i++){
        //why javascript, why?!
        //do below as we're going to mark with x's later
        let markerRow = row.split("");
        for (let j = 0; j < row.length; j++){
            let rollCount = 0;
            if (input[i][j] === "@"){
                console.log("There's a @")
            }
        }
        markerRow = markerRow.join("");
        spaces.push(markerRow);
    }
    spaces.forEach(space => {
        console.log("Space", space);
    })
    
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