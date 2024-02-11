const { app, BrowserWindow, ipcMain} = require('electron');;
const path = require('path');
const ipc = ipcMain

const createWindow = () => {
    const win = new BrowserWindow({
        /*width: 1200,
        height: 700,*/
        minWidth: 683,
        minHeight: 600,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
            preload: path.join(__dirname, 'preload.js')
        },
    })
    win.maximize()
    win.loadFile('src/html/actuality/main.html')

    //Close App
    ipc.on('closeApp', () => {
        win.close()
    })

    //Minimize App
    ipc.on('minApp', () => {
        win.minimize()
    })

    //Maximize App
    ipc.on('maxresApp', () => {
        if (win.isMaximized()) {
            win.restore()
        } else {
            win.maximize()
        }
    })
}

app.whenReady().then(() => {
    createWindow();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})