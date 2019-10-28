# Uniwaka Application

## Get Started

### 1. System Requirements

* Installed [node](https://nodejs.org/en/)
* Installed [watchman](https://facebook.github.io/watchman/docs/install.html) (optional)
* Installed [react-native-cli](https://facebook.github.io/react-native/docs/getting-started.html)

### 2. Installation

On the command prompt run the following commands

```sh
$ git clone git@github.com:uniwaka/uniwaka-app.git

$ cd uniwaka-app

$ npm install (or npm i)
```

### 3. Running
#### Running on iOS
* Install XCode and Xcode Command Line Tools.
* Run `npm run ios` or `react-native run-ios` in your terminal
	
#### Running on Android
* Install [Java SE Development Kit 8 (JDK 8)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* Install [Android Studio](https://developer.android.com/studio/index.html)
    * Install Android SDK Platforms
    * Create Android Virtual Devices
* Configure the ANDROID_HOME environment variable
    * For Windows, add ANDROID_HOME and PATH to the User or System environment.
    * For Linux, add the following lines to your $HOME/.bash_profile config file
```    
#!bash
...
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
    
* Make sure that you have an Android emulator running. 
* Run `npm run android` or `react-native run-android` in your terminal

#### Running On Device
See [Running On Device](https://facebook.github.io/react-native/docs/running-on-device)

### 4. Modifying the app
* Open App.js in your text editor of choice and edit some lines.
* iOS: Hit ⌘R in your iOS Simulator to reload the app and see your changes!
* Android: Double tap R on your keyboard to reload.


## Documentation
See the [Documentation](https://github.com/uniwaka/uniwaka-app/docs) for detailed documents.
