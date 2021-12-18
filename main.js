const { app, BrowserWindow, Menu } = require("electron");
const { join } = require("path");

let win = null;
const indexHtml = "./app/index.html";

const isMac = process.platform === "darwin";
// note: remove devtools when in production
const menu = [
  {
    label: "Window",
    submenu: [
      { role: "reload" },
      { role: "forceReload" },
      { role: "toggleDevTools" },
      { type: "separator" },
      isMac ? { role: "close" } : { role: "quit" },
    ],
  },
  {
    label: "Edit",
    submenu: [
      { role: "cut" },
      { role: "copy" },
      { role: "paste" },
      { type: "separator" },
      { role: "selectAll" },
    ],
  },
  {
    label: "View",
    submenu: [{ role: "togglefullscreen" }, { role: "minimize" }],
  },
];

function createMenu() {
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);
}

function createWindow(obj, loadPath) {
  const newWindow = new BrowserWindow(
    obj
      ? obj
      : {
          width: 500,
          height: 600,
          resizable: false,
          webPreferences: {
            preload: join(__dirname, "./app/js/preload.js"),
          },
        }
  );

  newWindow.loadFile(loadPath ? loadPath : indexHtml);

  return newWindow;
}

app.on("ready", () => {
  win = createWindow();
  createMenu();

  win.on("closed", () => (win = null));
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on("window-all-closed", () => {
  if (!isMac) app.quit();
});
