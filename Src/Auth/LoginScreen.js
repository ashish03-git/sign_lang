import {View, Text,Image} from 'react-native';
import React from 'react';
import Font5 from 'react-native-vector-icons/FontAwesome5';
import loginStyles from './loginStyle';

const LoginScreen = () => {
  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.topContainer}>
        <Image source={require("../assets/Rectangle1.png")}/>
        <Image source={require("../assets/Rectangle1.png")}/>
      </View>
      <View style={loginStyles.inputFiledContainer}></View>
      <View style={loginStyles.bottomContainer}></View>
    </View>
  );
};

export default LoginScreen;
