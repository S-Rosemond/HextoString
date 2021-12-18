const { contextBridge, ipcRenderer } = require("electron");
const { Buffer } = require("buffer");
console.log(Buffer);

// Buffer is not being pass properly
const API = {
  ipc: ipcRenderer,
  buffer: Buffer,
};

contextBridge.exposeInMainWorld("api", API);
