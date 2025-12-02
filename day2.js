/*
Quick solution to Day 2 of Advent of Code '25
*/
async function run2(inputFile){
  const ids = await getInput(inputFile);
  const convertedIds = convertInput(ids);
  let idCounter = processInput(convertedIds)
  console.log(idCounter);
}
function processInput(ids){
  let counter = 0;
  ids.forEach(id => {
    const min = id.min;
    const max = id.max;
    for (let i = min; i <= max; i++){
      //see if we have a number we can easily split in to two
      if (String(i).length % 2 == 0){
        const iString = String(i);
        const middlePoint = iString.length / 2;
        const partA = parseInt(iString.substring(0, middlePoint));
        const partB = parseInt(iString.substring(middlePoint));
        if (partA === partB){
          counter += i;
        }
      }
    }
  });
  return counter;
}
async function getInput(inputFile){
  let result = await fetch(inputFile);
  if (result.ok){
    const uneditedInput = await result.text();
    const input = uneditedInput.split(",");
    return input;
  }
  return [];
}
function convertInput(input){
    //convert to min/max values
    let newInput = [];
    for (let i = 0; i < input.length; i++){
        const value = String(input[i]);
        const values = value.split("-");
        console.log(values);
        newInput.push(
            {
                "min" : parseInt(values[0]),
                "max" : parseInt(values[1])
            }
        );
    }
    return newInput;
}