'use strict';
const {app, BrowserWindow} = require('electron');

let win;

function createWindow () {
    win = new BrowserWindow({
        autoHideMenuBar: true,
        width: 520,
        height: 600,
        minWidth: 520,
        minHeight: 210
    });

    win.loadURL(`file://${__dirname}/src/index.html`)

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});