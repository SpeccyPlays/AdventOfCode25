/*
Quick solution to Day 4 of Advent of Code '25
*/
async function run4(inputFile){
  const input = await getInput4(inputFile);
  console.log(input);
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