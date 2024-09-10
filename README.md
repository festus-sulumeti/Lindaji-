# Lindaji Mobile App

**Lindaji** is a security-focused mobile application built using **React Native** and **Expo**. It enhances device security by offering features such as lock screen protection, Face ID authentication, and privacy overlays to ensure personal data is kept safe from unauthorized access.

The app is ideal for users who value privacy and need a reliable, user-friendly solution for securing their mobile devices.

## Features

- **Lock Screen Protection**: Customize your lock screen to prevent unauthorized access.
- **Face ID Authentication**: Integrates biometric security with Face ID for seamless login.
- **Privacy Overlay**: Protect your sensitive data when switching between apps by applying an overlay.
- **Responsive Design**: Designed for both iOS and Android platforms using React Native.

## Prerequisites

Before setting up the app, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 20.11.1 or higher)
- npm or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Installation

Follow these steps to install and set up the **Lindaji** mobile app.

### 1. Clone the Repository

Clone the project to your local machine using the following command:

```bash
git clone https://github.com/festus-sulumeti/Lindaji-.git

```

2. Install Dependencies
Navigate to your project folder and install the required dependencies:

```bash

cd lindaji
npm install

```

3. Install Additional Packages
To enable specific features of the app, install additional packages using:

```bash

npx expo install expo-local-authentication react-native-reanimated expo-haptics

```
Here's why these packages are needed:

    1. expo-local-authentication: Provides biometric authentication capabilities like Face ID or fingerprint recognition, which are essential for the app's secure login feature.
    2. react-native-reanimated: Enables smooth and complex animations for a responsive and interactive user interface.
    3. expo-haptics: Adds haptic feedback to enhance user experience by providing tactile responses to user interactions.



4. Run the Application
To run the app on an iOS or Android simulator (or a real device), use:

```bash

npx expo start

```
You can scan the QR code with the Expo Go app or run it on a simulator by pressing i for iOS or a for Android.


### Technologies Used
1. React Native: The framework used to build cross-platform apps.
2. Expo: A set of tools for rapid mobile app development.
3. Expo Router: For easy and declarative navigation between screens.
4. Expo Local Authentication: For integrating biometric authentication like Face ID.


## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
