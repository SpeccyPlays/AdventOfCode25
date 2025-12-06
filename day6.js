/*
Quick solution to Day 6 of Advent of Code '25
*/
async function run6(inputFile) {
  let input = await getInput6(inputFile);
}
async function getInput6(inputFile) {
  let result = await fetch(inputFile);
  if (result.ok) {
    const uneditedInput = await result.text();
    const input = uneditedInput.split("\r\n");
    return input;
  }
  return [];
}