const readline = require("readline");

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.output,
});

function convertHexOrString(from = "utf8", to = "utf8") {
  return function convertValue(value) {
    return Buffer.from(value, from).toString(to);
  };
}

function printResult(func, value) {
  console.log(func(value));
}

const stringToHex = convertHexOrString(undefined, "hex");
const hexToString = convertHexOrString("hex");

function promptInput() {
  console.log("Input text.");
  readlineInterface.question("undefined", (answer) => {
    printResult(stringToHex, answer);

    readlineInterface.close();
  });
}

promptInput();
