/*
Quick solution to Day 9 of Advent of Code '25
*/
async function run8(inputFile) {
  const input = await getInput8(inputFile);
  let tidied = tidyInput8(input);
  const withDistances = findDistances(tidied);
  const sorted = sortDistances(withDistances);
  console.log(sorted);
  sortIntoBoxes(sorted);
};
function sortIntoBoxes(input){
    let box = [];
    box.push([input[0].firstIndex])
    for (let i = 1; i < 10; i++){
        for (let j = 0; j < box.length; j++){
            if (box[j].includes(input[i].firstIndex)){
                if (!box[j].includes(input[i].secondIndex)){
                    box[j].push(input[i].secondIndex);
                }
            }
            else if (box[j].includes(input[i].secondIndex)){
                if (!box[j].includes(input[i].firstIndex)){
                    box[j].push(input[i].firstIndex);
                }
            }
            else {
                box.push([input[i].firstIndex, input[i].secondIndex])
            }
        }
    }
    console.log(box);
    return box;
}
function sortDistances(input){
    input.sort((a, b) =>{
        return a.distanceBetween - b.distanceBetween
    });
    return input;
}
function findDistances(input){
    let withDistances = [];
    for (let first = 0; first < input.length; first++){
        let firstIndex = input[first].index;
        for (let second = 0; second < input.length; second++){
            if (first === second){
                continue;
            }
            let distanceBetween = calcDistance(input[first], input[second]);
            withDistances.push({
                "firstIndex" : firstIndex,
                "secondIndex" : input[second].index,
                "distanceBetween" : distanceBetween
            });
        }
    }
    return withDistances;
}
//takes two points and calcs distance between them.
function calcDistance(p, q){
    const p1 = p.x;
    const p2 = p.y;
    const p3 = p.z;
    const q1 = q.x;
    const q2 = q.y;
    const q3 = q.z;
    let distance = Math.sqrt(Math.pow((p1 - q1), 2) + Math.pow((p2 - q2), 2) + Math.pow((p3 - q3), 2));
    return distance;
}
function tidyInput8(input){
    let tidied = [];
    input.forEach(element => {
        const values = element.split(",")
        tidied.push({
            "x" : parseInt(values[0]),
            "y" : parseInt(values[1]),
            "z" : parseInt(values[2]),
            "index" : element
        })
    });
    return tidied;
}
async function getInput8(inputFile) {
  let result = await fetch(inputFile);
  if (result.ok) {
    const uneditedInput = await result.text();
    const input = uneditedInput.split("\r\n");
    return input;
  }
  return [];
};