import { app, BrowserWindow } from "electron";
import * as path from "path";

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (process.env.NODE_ENV === "development") {
    win.loadURL("https://crypto-dashboard-pro.vercel.app");
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, "../index.html"));
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
