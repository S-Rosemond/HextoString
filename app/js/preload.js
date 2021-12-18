const { contextBridge, ipcRenderer } = require("electron");

function convertHexOrString(from = "utf8", to = "utf8") {
  return function convertValue(value) {
    return Buffer.from(value, from).toString(to);
  };
}
// Buffer can't be used/passed/called in main renderer process
const API = {
  ipc: ipcRenderer,
  convertHexOrString,
};

contextBridge.exposeInMainWorld("api", API);
