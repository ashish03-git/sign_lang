/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC0-qtobzm2ZasqgtxaT8Z59ZL2QV9SZnw',
  // authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL:
    'https://signlang-03001-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'signlang-03001',
  storageBucket: 'signlang-03001.appspot.com',
  appId: '1:478109797872:android:19053fa4a77040b439e135',
  messagingSenderId: '478109797872',
};
if (!Firebase.apps.length) {
  Firebase.initializeApp(firebaseConfig);
}

AppRegistry.registerComponent(appName, () => App);
