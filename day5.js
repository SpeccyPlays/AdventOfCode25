/*
Quick solution to Day 5 of Advent of Code '25
*/
async function run5(inputFile) {
  let input = await getInput5(inputFile);
  let newInput = splitInput(input);
  console.log(processInput5(newInput));
}
function processInput5(input){
    let freshCount = 0;
    const available = input.available;
    const ranges = input.ranges;
    for (let ing = 0; ing < available.length; ing++){
        const ingNum = parseInt(available[ing]);
        for (let range = 0; range < ranges.length; range++){
            const values = ranges[range].split("-");
            const min = parseInt(values[0]);
            const max = parseInt(values[1]);
            if (ingNum >= min && ingNum <= max){
                freshCount++;
                break;
            }
        }
    }
    return freshCount;
}
function splitInput(input){
    let ranges = [];
    let available = [];
    input.forEach(element => {
        if (element === ""){
            
        }
        else if (element.includes("-")){
            ranges.push(element);
        }
        else {
            available.push(element)
        }
    });
    return {
        "ranges" : ranges,
        "available" : available
    }
}
async function getInput5(inputFile) {
  let result = await fetch(inputFile);
  if (result.ok) {
    const uneditedInput = await result.text();
    const input = uneditedInput.split("\r\n");
    return input;
  }
  return [];
}