const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const url = require('url');

//Window Object (init win)
let win;

function createWindow(){
    // create window
    win = new BrowserWindow({
      width:800,
      height:600,
      icon:__dirname+'/img/Main-Blue.png',
      webPreferences: {
        nodeIntegration: true
      }
    })

    // load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //DEV MODE ONLY - Open devtools
    var devmode = true;
    if (devmode) {
        win.webContents.openDevTools();
    } else {
        Menu.setApplicationMenu(false)
    }
    
    win.on('closed', () => {
        win = null;
    });
}

// Run create window when ready
app.on('ready', createWindow);

// Quit when all windows closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
});
