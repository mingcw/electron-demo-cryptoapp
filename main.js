// Set node enviroment
process.env.NODE_ENV = 'development'; // 'development' or 'production'

// Auto reload electron app when codes change, in non-production enviroment.
if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname);
}

const {app, BrowserWindow, Menu, shell, ipcMain} = require('electron');
const path = require('path');
const url = require('url');

let mainWindow; // instance of main window
let mainMenu = [
    {
        label: 'Menu',
        submenu: [
            { 
                label: 'Adjust Notification Value'
            },
            { 
                label: 'CoinMarketCap',
                click () {
                    shell.openExternal('http://coinmarketcap.com');
                },
                accelerator: 'CmdOrCtrl+Shift+C'
            },
            {
                type: 'separator'
            },
            {
                role: 'reload'
            },
            { 
                label: 'Exit',
                click () {
                    app.quit();
                },
                accelerator: 'CmdOrCtrl+Q'
            }
        ]
    },
    {
        label: 'Info'
    }
];;   // application menu template of main window

function createWindow () {
    // Create the broswer window
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    
    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'src/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Integrating a Custom Menu
    let menu  = Menu.buildFromTemplate(mainMenu);
    Menu.setApplicationMenu(menu);

    // Open Developer Tools if no production
    if (process.env.NODE_ENV !== 'production') {
        mainWindow.webContents.openDevTools();
    }

    // Emmit when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        app.quit();
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow == null) {
        createWindow();
    }
});

ipcMain.on('update-notify-value', (event, arg) => {
    mainWindow.webContents.send('targetPriceVal', arg);
});

// Add Developer Tools if no production
if (process.env.NODE_ENV !== 'production') {
    mainMenu.push(
        {
            label: 'Developer Tools',
            submenu:[
                {
                    label: 'Toggle Developer Tools',
                    click (menuItem, broswerWindow, event) {
                        broswerWindow.webContents.toggleDevTools();
                    },
                    accelerator: 'CmdOrCtrl+Shift+I'
                }
            ]
        }
    );
}