/*
Quick solution to Day 9 of Advent of Code '25
*/
async function run9(inputFile) {
  let input = await getInput8(inputFile);
};

async function getInput8(inputFile) {
  let result = await fetch(inputFile);
  if (result.ok) {
    const uneditedInput = await result.text();
    const input = uneditedInput.split("\r\n");
    return input;
  }
  return [];
};