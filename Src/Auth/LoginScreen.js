import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import Font5 from 'react-native-vector-icons/FontAwesome5';
import loginStyles from './loginStyle';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const LoginScreen = () => {
  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.topContainer}>
        <Image source={require('../assets/Rectangle1.png')} />
        <Image
          source={require('../assets/Rectangle_5.png')}
          style={loginStyles.ImageStyle}
        />
      </View>
      <View style={loginStyles.inputFiledContainer}>
        <View style={{marginHorizontal: responsiveWidth(5)}}>
          <Text style={loginStyles.LoginFont}>Login</Text>
          <View style={{marginTop: responsiveHeight(1)}}>
            <Text style={loginStyles.textInputeText}>Email</Text>
            <TextInput style={loginStyles.textInpute} />
            <Text
              style={[
                loginStyles.textInputeText,
                {marginTop: responsiveHeight(1.5)},
              ]}>
              Password
            </Text>
            <TextInput style={loginStyles.textInpute} />
            {/* forgote password ui  */}
            <View
              style={{
                alignItems: 'flex-end',
                marginRight: responsiveWidth(9),
                marginTop: responsiveFontSize(1),
              }}>
              <Text style={loginStyles.textInputeText}>Forgot Password?</Text>
            </View>
            <View style={{flexDirection: 'row', gap: responsiveWidth(3)}}>
              <View style={loginStyles.socialIcon}>
                <Image
                  source={require('../assets/google.png')}
                  resizeMode="contain"
                  style={loginStyles.IconStyle}
                />
              </View>
              <View style={loginStyles.socialIcon}>
                <Image
                  source={require('../assets/facebook.png')}
                  resizeMode="contain"
                  style={loginStyles.IconStyle}
                />
              </View>
              <View style={loginStyles.socialIcon}>
                <Image
                  source={require('../assets/apple.png')}
                  resizeMode="contain"
                  style={loginStyles.IconStyle}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={loginStyles.bottomContainer}>
        <Image source={require('../assets/Rectangle3.png')} />
        <View
          style={{
            position: 'absolute',
            bottom: responsiveHeight(2),
            paddingHorizontal: responsiveWidth(3),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View>
            <Text style={[loginStyles.textInputeText, {color: '#fff'}]}>
              New Here? Register
            </Text>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              paddingHorizontal: responsiveWidth(3.5),
              paddingVertical: responsiveWidth(1.5),
              borderWidth: responsiveWidth(0.3),
              borderRadius: responsiveWidth(1),
              borderColor: '#fff',
              marginLeft: responsiveWidth(28),
            }}>
            <Text style={[loginStyles.LoginFont, {color: '#fff'}]}>Login</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
