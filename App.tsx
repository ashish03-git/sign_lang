import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import LoginScreen from './Src/Auth/LoginScreen';

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <LoginScreen />
    </View>
  );
};

export default App;
