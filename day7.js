/*
Quick solution to Day 7 of Advent of Code '25
*/
async function run7(inputFile) {
  let input = await getInput7(inputFile);
  let tidied = tidyInput(input);
  console.log(processInput7(tidied));
};
function processInput7(input){
    let splitCount = 0;
    for (let idx = 0; idx < input.length - 1; idx++){
        for (let col = 0; col < input[idx].length; col++){
            if (input[idx][col] === "S"){
                input[idx+1][col] = "|"
            }
            if (idx-1 > 0 && input[idx-1][col] === "|" && input[idx][col] === "."){
                input[idx][col] = "|"
                if (input[idx+1][col] === "."){
                    input[idx+1][col] = "|";
                }
            }
            if (input[idx][col] === "^"  && input[idx-1][col] === "|"){
                splitCount++
            }
            if (col - 1 >= 0 && input[idx][col] === "^" && input[idx][col-1] === "."){
                input[idx][col - 1] = "|";
                //splitCount++;
            }
            if (col + 1 < input[idx].length && input[idx][col] === "^" && input[idx][col+1] === "."){
                input[idx][col + 1] = "|";
                //splitCount++;
            }
        }
    };
    console.log("Split count", splitCount);
    return input;
};
function tidyInput(input){
    let tidied = [];
    //make in to array of arrays for ease of updating
    input.forEach(element => {
        const newLine = element.split("");
        tidied.push(newLine);
    });
    return tidied;
}
async function getInput7(inputFile) {
  let result = await fetch(inputFile);
  if (result.ok) {
    const uneditedInput = await result.text();
    const input = uneditedInput.split("\r\n");
    return input;
  }
  return [];
};