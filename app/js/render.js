const inputBox = document.getElementById("input-box");
const outputBox = document.getElementById("output");
const copyButton = document.getElementById("copy-button");
const toStringButton = document.getElementById("to-string");
const toHexButton = document.getElementById("to-hex");

// copy is not working as expected, need to fix
function copyOutput() {
  if (outputBox.value) {
    outputBox.select();
    navigator.clipboard.writeText(outputBox.value);
  }
  return;
}

const convertHexOrString = window.api.convertHexOrString;

function outputValue(func) {
  outputBox.innerText = func(inputBox.value);
  return;
}

const stringToHex = convertHexOrString(undefined, "hex");
const hexToString = convertHexOrString("hex");

copyButton.addEventListener("click", copyOutput);
toStringButton.addEventListener("click", () => outputValue(hexToString));
toHexButton.addEventListener("click", () => outputValue(stringToHex));
