/*
Quick solution to Day 1 of Advent of Code '25
*/
async function run1(){
  const maxValue = 99;
  const rotations = await getInput();
  let currentValue = 50;
  let zeroCount = 0
  rotations.forEach(rotation => {
    const direction = rotation.slice(0, 1);
    const value = parseInt(rotation.slice(1))
    const step = direction === "L" ? -1 : 1;
    for (let i = value; i > 0; i--){
      currentValue += step;
      if (currentValue < 0){
        currentValue = 99;
      }
      if (currentValue > maxValue){
        currentValue = 0;
      }
    }
    printRotationAndValue(rotation, currentValue);
    if (currentValue === 0){
      zeroCount ++;
    }
  })
  console.log("The password is", zeroCount);
};
function printRotationAndValue(rotation, currentValue){
  console.log("The dial is rotated", rotation, "to point at", currentValue, ".");
}
async function getInput(){
  let result = await fetch("day1input.txt");
  if (result.ok){
    const uneditedInput = await result.text();
    const input = uneditedInput.split("\r\n");
    console.log(input);
    return input;
  }
  return [];
}
