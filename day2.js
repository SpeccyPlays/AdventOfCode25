/*
Quick solution to Day 2 of Advent of Code '25
*/
async function run2(inputFile){
  const ids = await getInput(inputFile);
  const convertedIds = convertInput(ids);
  console.log(convertedIds);
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
        newInput.push(
            {
                "min" : parseInt(values[0]),
                "minLenth" : values[0].length,
                "max" : parseInt(values[1]),
                "maxLength" : values[1].length
            }
        );
    }
    return newInput;
}