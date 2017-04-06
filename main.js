'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

let willQuitApp = false;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;


function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    frame: true, //Change to true for Windows 10/Linux
    titleBarStyle: 'hidden-inset',
    icon: 'icon.png'
  })

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  //mainWindow.loadURL(`http://photos.google.com`);




  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
                     
                     app.on('ready', function () {
                            createWindow();
                            
                            const template = [
                                                  {
                                                  role: 'window',
                                                  submenu: [
                                                            {
                                                            role: 'minimize'
                                                            },
                                                            {
                                                            role: 'close'
                                                            }
                                                            ]
                                                  },
                                                  {
                                                  role: 'help',
                                                  submenu: [
                                                            {
                                                            label: 'Learn More',
                                                            click () { require('electron').shell.openExternal('http://sites.google.com/view/gphotos') }
                                                            },
																																																												{
                                                            label: 'Send Feedback',
                                                            click () { require('electron').shell.openExternal('https://1drv.ms/xs/s!AqAaycGgaoCjgewOb56ZrQ2BYzOBtw') }
                                                            },
                                                            {
                                                              label: 'Build 2.0.0459'
                                                            }
                                                            ]
                                                  }
                                                  ]
                            
                            if (process.platform === 'darwin') {
                            template.unshift({
                                             label: app.getName(),
                                             submenu: [
                                                       {
                                                       role: 'about'
                                                       },
                                                       {
                                                       type: 'separator'
                                                       },
                                                       {
                                                       role: 'services',
                                                       submenu: []
                                                       },
                                                       {
                                                       type: 'separator'
                                                       },
																																																							{
																																																							role: 'togglefullscreen'
																																																							},
                                                       {
                                                       role: 'hide'
                                                       },
                                                       {
                                                       role: 'hideothers'
                                                       },
                                                       {
                                                       role: 'unhide'
                                                       },
                                                       {
                                                       type: 'separator'
                                                       },
                                                       {
                                                       role: 'quit'
                                                       }
                                                       ]
                                             })
                            
                            // Window menu.
                            template[1].submenu = [
                                                   {
                                                   label: 'Close',
                                                   accelerator: 'CmdOrCtrl+W',
                                                   role: 'close'
                                                   },
                                                   {
                                                   label: 'Minimize',
                                                   accelerator: 'CmdOrCtrl+M',
                                                   role: 'minimize'
                                                   },
                                                   {
                                                   label: 'Zoom',
                                                   role: 'zoom'
                                                   },
                                                   {
                                                   type: 'separator'
                                                   },
                                                   {
                                                   label: 'Bring All to Front',
                                                   role: 'front'
                                                   },
																																																			{
                                                   label: 'Open Developer Mode',
																																																			accelerator: 'CmdOrCtrl+I',
                                                   click () {mainWindow.openDevTools()}
                                                   }
                                                   ]
                            }

                            const menu = Menu.buildFromTemplate(template);
                            Menu.setApplicationMenu(menu);
                            });
// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
