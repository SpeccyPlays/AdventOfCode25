/*
Quick solution to Day 5 of Advent of Code '25
*/
async function run5(inputFile) {
  let input = await getInput5(inputFile);
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