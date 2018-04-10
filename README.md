# electron-demo-cryptoapp

## Introduce
This is a demo for [Electron](https://electronjs.org/). It is referenced from [Creating Desktop Apps with Electron Tutorial](https://coursetro.com/courses/22/Creating-Desktop-Apps-with-Electron-Tutorial).

> Only for learning, copyright is owned by the original author.

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
<<<<<<< HEAD
You can replace the icon in the `asset/icon/{mac|win|png}/` directory with your own [icon](http://www.iconarchive.com/). And then, 
```
# Build Mac App
electron run packager-mac
# Build win App
electron run packager-win
# Build Linux App
electron run packager-linux
=======
You can replace the icon in the `asset/icon/{mac|win|png}/` directory with your own icon. And then, 
```
# Build Mac App
electron packager-mac
# Build win App
electron packager-win
# Build Linux App
electron packager-linux
>>>>>>> master
```
Or, you can read the both of following and then customize your app: 
- [Electron App Deployment Tutorial](https://coursetro.com/posts/code/124/Electron-App-Deployment-Tutorial)
- [Electron packager tutorial](https://www.christianengvall.se/electron-packager-tutorial/)


## Conclusion
Updating...