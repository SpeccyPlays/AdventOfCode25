/*
Quick solution to Day 5 of Advent of Code '25
*/
async function run5(inputFile) {
  let input = await getInput5(inputFile);
  let newInput = splitInput(input);
  console.log("Part 1 answer is:", processInput5(newInput));
  console.log("Part 2 answer is:", processInput5part2(newInput));
}
function processInput5part2(input){
    let freshCount = 0;
    let ranges = input.ranges;
    let newRanges = [];
    for (let range = 0; range < ranges.length; range++){
        const values = ranges[range].split("-");
        const firstMin = parseInt(values[0]);
        const firstMax = parseInt(values[1]);
        newRanges.push({
            rangeMin : firstMin,
            rangeMax : firstMax,
        });
    }
    let sorted = newRanges.sort((a, b) => a.rangeMin - b.rangeMin)
    let withoutOverlap = [];
    let currentMin = sorted[0].rangeMin;
    let currentMax = sorted[0].rangeMax;
    for (let i = 0; i < sorted.length - 1; i++){  
        const nextMin = sorted[i+1].rangeMin;
        const nextMax = sorted[i+1].rangeMax
        if (nextMin <= currentMax){
            currentMax = Math.max(currentMax, nextMax);
        }
        else {
            withoutOverlap.push({
                min : currentMin,
                max : currentMax
            });
            currentMin = nextMin;
            currentMax = nextMax;
        }
    }
    withoutOverlap.push({
        min : currentMin,
        max : currentMax
    });
    withoutOverlap.forEach(range => {
        freshCount += range.max - range.min + 1;
    })
    return freshCount;
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