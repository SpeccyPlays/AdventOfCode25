/*
Quick solution to Day 6 of Advent of Code '25
*/
async function run6(inputFile) {
  let input = await getInput6(inputFile);
  const tidy = tidyInput6(input);
  console.log("Day 5 part 1 answer is", processInput6(tidy));
  const tidy2 = tidyInput6part2(input);
};
function processInput6part2(input){

}
function tidyInput6part2(input){

}
function processInput6(input){
    //hopefully all input should be the same length
    const width = input[0].length;
    let totalCount = 0;
    for (let colCount = 0; colCount < width; colCount++){
        //let's get all our numbers
        const op = input[input.length - 1][colCount].trim();
        //if we're multiplying then start at 1
        let colTotal = op === "+" ? 0 : 1;
        for (let idx = 0; idx < input.length - 1; idx++){
            op === "+" ? colTotal += parseInt(input[idx][colCount]) : colTotal *= parseInt(input[idx][colCount]);
        };
        totalCount += colTotal;
    }
    return totalCount;
};
function tidyInput6(input){
    let tidiedInput = [];
    input.forEach(element => {
        const newLine = element.trim().split(/\s+/);
        tidiedInput.push(newLine);
    });
    return tidiedInput
};
async function getInput6(inputFile) {
  let result = await fetch(inputFile);
  if (result.ok) {
    const uneditedInput = await result.text();
    const input = uneditedInput.split("\r\n");
    return input;
  }
  return [];
};