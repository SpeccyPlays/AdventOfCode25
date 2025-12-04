/*
Quick solution to Day 4 of Advent of Code '25
*/
async function run4(inputFile){
  const input = await getInput4(inputFile);
  console.log("Amount of rolls that can be moved is", processInput4(input));
}
function processInput4(input){
    let canMoveCount = 0;
    let amountOfAtAllowed = 3;
    let spaces = [];
    for (let i = 0; i < input.length; i++){
        const row = input[i];
        console.log("Row is ", row);
        let rollCount = 0;
        for (let j = 0; j < row.length; j++){
            if (row[j] === "."){
                spaces.push({
                    spaceRow : i,
                    spaceDigit : j
                })
                console.log("Free space", row[j], j);
            }
        }
    }
    console.log (input);
    console.log("Spaces are", spaces);
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