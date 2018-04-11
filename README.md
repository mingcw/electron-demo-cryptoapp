# electron-demo-cryptoapp

This is a demo for learning [Electron](https://electronjs.org/). It is referenced from [Creating Desktop Apps with Electron Tutorial](https://coursetro.com/courses/22/Creating-Desktop-Apps-with-Electron-Tutorial) and [Build an Electron App in Under 60 Minutes](https://www.youtube.com/watch?v=kN1Czs0m1SU).

## Installation
```
# 1. Clone repository
git clone https://github.com/mingcw/electron-demo-cryptoapp.git
# 2. Install dependencies
npm install
# 3. Run the app
npm start
```

## Build && Deployment
Use a packager called [electron-packager](https://github.com/electron/electron-packager) to create the OS-specific builds of the Electron app. 
You can replace the icon in the `asset/iconc/{mac|win|png}/` directory with your own [icon](http://www.iconarchive.com/). And then, 
```
# Build Mac App
electron run packager-mac
# Build win App
electron run packager-win
# Build Linux App
electron run packager-linux
```
Or, you can read the both of following and then customize your app: 
- [Electron App Deployment Tutorial](https://coursetro.com/posts/code/124/Electron-App-Deployment-Tutorial)
- [Electron packager tutorial](https://www.christianengvall.se/electron-packager-tutorial/)

## Conclusion
Updating...