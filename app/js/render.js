const inputBox = document.getElementById("input-box");
const outputBox = document.getElementById("output");
const copyButton = document.getElementById("copy-button");
const pasteButton = document.getElementById("paste-button");
const toStringButton = document.getElementById("to-string");
const toHexButton = document.getElementById("to-hex");

// copy is not working as expected, need to fix
async function copyOutput() {
  if (outputBox.innerText) {
    await navigator.clipboard.writeText(outputBox.innerText);
  }

  return;
}

async function pasteInput() {
  const clipboard = await navigator.clipboard.readText();
  inputBox.value = clipboard;
  console.log(inputBox.value, clipboard);
  return;
}

const convertHexOrString = window.api.convertHexOrString;

function outputValue(func) {
  outputBox.innerText = func(inputBox.value);
  return;
}

const stringToHex = convertHexOrString(undefined, "hex");
const hexToString = convertHexOrString("hex");

pasteButton.addEventListener("click", () => pasteInput());
copyButton.addEventListener("click", () => copyOutput());
toStringButton.addEventListener("click", () => outputValue(hexToString));
toHexButton.addEventListener("click", () => outputValue(stringToHex));
