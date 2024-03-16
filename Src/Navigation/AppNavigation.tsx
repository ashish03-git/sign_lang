
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../Auth/LoginScreen';
import RegistrationScreen from '../Auth/RegistrationScreen';
import PersonalDetailsScreen from '../Screens/Profile Details/PersonalDetails';
import HomeScreen from '../Screens/Home/HomeScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import PasswordAndSecurityScreen from '../Screens/Password & Security/PasswordAndSecurityScreen';
import StorageAndDataScreen from '../Screens/Storage & Data/StorageAndDataScreen';
import ChangePasswordScreen from '../Screens/Change Password/ChangePasswordScreen';
import CameraScreen from '../Screens/Camera Screen/CameraScreen';
import CameraRecoginationScreen from '../Screens/Camera Screen/CameraRecoginationScreen';

const Stack = createStackNavigator();

export type StackNavigationListProps = {
  loginScreen:undefined
  registerScreen:undefined
  homeScreen:undefined
  cameraRecognitionScreen:undefined
}


const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginScreen">
        <Stack.Screen
          name="loginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="registerScreen"
          component={RegistrationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="profileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="passwordAndSecurityScreen"
          component={PasswordAndSecurityScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="personalDetailsScreen"
          component={PersonalDetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="storageDataScreen"
          component={StorageAndDataScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="changePasswordScreen"
          component={ChangePasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="cameraScreen"
          component={CameraScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="cameraRecognitionScreen"
          component={CameraRecoginationScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
