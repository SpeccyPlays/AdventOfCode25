/*
Quick solution to Day 6 of Advent of Code '25
*/
async function run6(inputFile) {
  let input = await getInput6(inputFile);
  const tidy = tidyInput6(input);
  console.log("Day 6 part 1 answer is", processInput6(tidy));
  const tidy2 = tidyInput6part2(input);
  console.log("Day 6 part 2 answer is:", processInput6part2(tidy2));
};
function processInput6part2(input){
    let total = 0;
    for (let idx = 0; idx < input.length; idx++){
        const op = input[idx][input[idx].length - 1];
        let rowTotal = op === "+" ? 0 : 1;
        for (let item = 0; item < input[idx].length - 1; item++){
            op === "+" ? rowTotal += parseInt(input[idx][item]) : rowTotal *= parseInt(input[idx][item]);
            
        }
        total += rowTotal
    }
    return total;
}
function tidyInput6part2(input){
    let tidiedInput = [];
    const ops = input[input.length - 1].trim().split(/\s+/);
    const width = input[0].length - 1;
    for (let colCount = width; colCount >= 0; colCount--){
        let number = "";
        for (let row = 0; row < input.length - 1; row++){
            number += input[row][colCount];
        }
        tidiedInput.push(number);
    }
    let tidyied2 = [];
    let index = 0;
    let newArray = [];
    tidiedInput.forEach(number => {
        //as my tidy method ends up with a col full of spaces
        //check for it
        if (number.trim().length == 0){
            tidyied2[index] = newArray;
            index++;
            newArray = [];
        }
        else {
            newArray.push(number);
        }
    })
    tidyied2[index] = newArray;
    let idx = 0;
    for (let opCount = ops.length-1; opCount >= 0; opCount--){
        tidyied2[idx].push(ops[opCount]);
        idx++;
    }
    return tidyied2;
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