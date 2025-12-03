async function run3(inputFile){
    const input = await getInput3(inputFile)
    console.log("Voltage is", processInput3(input));
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
async function getInput3(inputFile){
  let result = await fetch(inputFile);
  if (result.ok){
    const uneditedInput = await result.text();
    const input = uneditedInput.split("\r\n");
    return input;
  }
  return [];
}