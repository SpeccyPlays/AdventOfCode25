/*
Quick solution to Day 2 of Advent of Code '25
*/
async function run2(inputFile){
  const ids = await getInput2(inputFile);
  const convertedIds = convertInput2(ids);
  let idCounter = processInput2(convertedIds)
  console.log(idCounter);
  console.log(processInput2Part2(convertedIds))
}
function processInput2(ids){
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
function processInput2Part2(ids){
  let counter = 0;
  ids.forEach(id => {
    const min = id.min;
    const max = id.max;
    for (let i = min; i <= max; i++){
      const iString = String(i);
      let matchCounter = 0;
      //This is nasty and completely brute forced but works.
      for (let j = 0; j <= iString.length / 2; j++){
        const partA = iString.slice(0, j);
        if (partA === ""){
          continue
        }
        for (let g = 0; g <= iString.length; g++){
          
          if (partA.repeat(g) === iString){
            console.log("Number is", i, "Part A", partA.repeat(g), "Part B", iString);
            matchCounter ++;
            console.log("Match counter", matchCounter);
          }
        }
      }
      if (matchCounter > 0){
        counter += i;
      }
    }
  });
  return counter;
}
async function getInput2(inputFile){
  let result = await fetch(inputFile);
  if (result.ok){
    const uneditedInput = await result.text();
    const input = uneditedInput.split(",");
    return input;
  }
  return [];
}
function convertInput2(input){
    //convert to min/max values
    let newInput = [];
    for (let i = 0; i < input.length; i++){
        const value = String(input[i]);
        const values = value.split("-");
        newInput.push(
            {
                "min" : parseInt(values[0]),
                "max" : parseInt(values[1])
            }
        );
    }
    return newInput;
}