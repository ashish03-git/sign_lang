import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import AppNavigation from './Src/Navigation/AppNavigation';
const App = () => {
  return (
    <View style={{flex: 1}}>
       <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
      <AppNavigation />
    </View>
  );
};

export default App;
