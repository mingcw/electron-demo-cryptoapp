const {remote, ipcRenderer} = require('electron');
const path = require('path');

const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', event => {
    let modalWindow = remote.getCurrentWindow();
    modalWindow.close();
});

const updateBtn = document.getElementById('updateBtn');
updateBtn.addEventListener('click', () => {
    ipcRenderer.send('update-notify-value', document.getElementById('notifyVal').value);

    // Close the window
    let win = remote.getCurrentWindow();
    win.close();
});
