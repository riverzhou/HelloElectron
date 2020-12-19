const { app, screen, Menu, BrowserWindow } = require("electron");
var path = require('path')
let win;

function createWindow() {
  Menu.setApplicationMenu(null);
  win = new BrowserWindow({ 
    show: false,
    icon: path.join(__dirname, 'baby.ico'),
    webPreferences: {nodeIntegration: true }
  });
  win.maximize();
  win.show();

  var winW = screen.getPrimaryDisplay().workAreaSize.width;
  var winH = screen.getPrimaryDisplay().workAreaSize.height;

  win.loadURL(`http://127.0.0.1:5000/?w=${winW}&h=${winH}`);

  //win.loadURL(`http://127.0.0.1:9524/?w=${winW}&h=${winH}`);
  //win.loadURL('http://ie.icoa.cn');
  //win.webContents.openDevTools();
  //console.log(__dirname);

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
