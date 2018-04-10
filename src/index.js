const {remote: {BrowserWindow}, ipcRenderer, Notification} = require('electron');
const path = require('path');
const axios = require('axios');

let price = document.querySelector('h1');

let targetPriceVal; 
let targetPrice = document.getElementById('targetPrice');

const notification = {
    title: 'BTC Alert',
    body: 'BTC just beat your target price!',
    icon: path.join(__dirname, '../assets/images/btc.png')
};

function getBTC () {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
    .then(res => {
        const cryptos = res.data.BTC.USD;
        price.innerHTML = '$' + cryptos.toLocaleString('en');

        if (targetPrice.innerHTML != '' && targetPriceVal < cryptos) {
            const myNotification = new window.Notification(notification.title, notification);
            myNotification.onclick = () => {
                console.log('Notification is clicked.');
            };
<<<<<<< HEAD
=======
            console.log(myNotification.onclick);
>>>>>>> master
        }
    });
}
getBTC();
setInterval(getBTC, 30000);

const notifyBtn = document.getElementById('notifyBtn');
notifyBtn.addEventListener('click', e => {
    let modalWindow = new BrowserWindow({ 
        frame: false, 
        transparent: true, 
        alwaysOnTop: true,
        width: 400, 
        height: 200
    })
    const modalPath = path.join('file://', __dirname, 'add.html');
    modalWindow.loadURL(modalPath);
    modalWindow.on('close', () => {
        win = null;
    });
    modalWindow.show();
});

ipcRenderer.on('targetPriceVal', (e, arg) => {
    targetPriceVal = Number(arg);
    targetPrice.innerHTML = '$' + targetPriceVal.toLocaleString('en');
});
