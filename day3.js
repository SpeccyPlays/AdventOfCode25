async function run3(inputFile){
    const input = await getInput3(inputFile)
    console.log("Voltage is", processInput3(input));
    console.log("Part 2 joltage is", processInput3Part2(input))
}
function processInput3(input){
    let voltage = 0;
    input.forEach(number => {
        const strNumber = String(number);
        let highest = 0;
        for (let i = 0; i < strNumber.length - 1; i++){
            const char = parseInt(strNumber.charAt(i)) * 10;
            for (let j = i+1; j < strNumber.length; j++){
                const nextChar = parseInt(strNumber.charAt(j));
                if (char + nextChar > highest){
                    highest = char + nextChar;
                }
            }
        }
        voltage += highest
    });
    return voltage;
}
function processInput3Part2(input){
    let voltage = 0;
    
    input.forEach(number => {
        let voltageArray = [];
        const strNumber = String(number);
        let highest = 0;
        const arrayLength = 12;
        let removalAmount = strNumber.length - arrayLength;
        for (let i = 0; i < strNumber.length; i++){
            const number = parseInt(strNumber[i])
            while (voltageArray.length > 0 && removalAmount > 0 && voltageArray[voltageArray.length -1] < number){
                voltageArray.pop();
                removalAmount --;
            }
            voltageArray.push(number);
        }
        voltageArray = voltageArray.slice(0, arrayLength);
        let voltNumber = "";
        voltageArray.forEach(digit => {
            voltNumber += digit;
        })
        const fullNum = parseInt(voltNumber) || 0;
        voltage += fullNum;
    });
    
    return voltage;
}
async function getInput3(inputFile){
  let result = await fetch(inputFile);
  if (result.ok){
    const uneditedInput = await result.text();
    const input = uneditedInput.split("\r\n");
    return input;
  }
  return [];
}