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
        const row = input[i];
        //why javascript, why?!
        //do below as we're going to mark with x's later
        let markerRow = row.split("");
        for (let j = 0; j < row.length; j++){
            if (row[j] === "@"){
                let rollCountForward = 0;
                let rollCountBack = 0;

                for (let count = j; count < adjacentAmount; count ++){
                    //check if we're at the end
                    if (j - count < 0 || j + count > row.length || rollCountBack + rollCountForward > atLimit){
                        break;
                    }
                    if (row[j + count] == "@"){
                        rollCountForward ++;
                    }
                    if (row[j - count] == "@"){
                        rollCountBack ++;
                    }
                }
                if (rollCountBack + rollCountForward > atLimit){
                    continue;
                }
                //check up and down
                let rollCountUp = 0;
                let rollCountDown = 0;

                markerRow[j] = "x";
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