const inputBox = document.getElementById("input-box");
const outputBox = document.getElementById("output");
const copyButton = document.getElementById("copy-button");
const toStringButton = document.getElementById("to-string");
const toHexButton = document.getElementById("to-hex");
// const buffer = window.api.buffer;
console.log(window.api);
function copyOutput() {
  if (outputBox.value) {
    outputBox.select();
    navigator.clipboard.writeText(outputBox.value);
  }
  return;
}

function convertHexOrString(from = "utf8", to = "utf8") {
  return function convertValue(value) {
    return Buffer.from(value, from).toString(to);
  };
}

function outputValue(func) {
  outputBox.innerText = func(inputBox.value);
  return;
}

const stringToHex = convertHexOrString(undefined, "hex");
const hexToString = convertHexOrString("hex");

copyButton.addEventListener("click", copyOutput);
toStringButton.addEventListener("click", () => outputValue(hexToString));
toHexButton.addEventListener("click", () => outputValue(stringToHex));
