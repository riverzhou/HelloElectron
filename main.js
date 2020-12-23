const { app, screen, Menu, BrowserWindow } = require("electron");
var path = require("path");

let win;

function createWindow() {
  Menu.setApplicationMenu(null);
  win = new BrowserWindow({
    width: 500,
    height: 310,
    icon: path.join(__dirname, "baby.ico"),
    resizable: false,
    maximizable: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  win.loadFile("index.html");

  //winW = screen.getPrimaryDisplay().workAreaSize.width;
  //winH = screen.getPrimaryDisplay().workAreaSize.height;
  //win.loadURL(`http://127.0.0.1:9524/?w=${winW}&h=${winH}`);
  //win.loadURL('http://ie.icoa.cn');
  //win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
