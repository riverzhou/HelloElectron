const { app, screen, Menu, BrowserWindow } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({ show: false });
  win.maximize();
  Menu.setApplicationMenu(null);
  win.show();

  var winW = screen.getPrimaryDisplay().workAreaSize.width;
  var winH = screen.getPrimaryDisplay().workAreaSize.height;

  win.loadURL(`http://127.0.0.1:5000/?w=${winW}&h=${winH}`);

  //win.loadURL('http://ie.icoa.cn')
  //win.webContents.openDevTools()

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
