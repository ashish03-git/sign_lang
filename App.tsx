import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import LoginScreen from './Src/Auth/LoginScreen';
import ProfileScreen from './Src/Screens/Profile/ProfileScreen';

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <ProfileScreen />
    </View>
  );
};

export default App;
