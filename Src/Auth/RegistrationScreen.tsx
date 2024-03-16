import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  
} from 'react-native';
import React, {useState} from 'react';
import loginStyles from './loginStyle';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {registerUser} from './authLogic';
import {StackNavigationListProps} from '../Navigation/AppNavigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {ActivityIndicator} from 'react-native';

type NavigationProps = StackNavigationProp<
  StackNavigationListProps,
  'loginScreen'
>;

const RegistrationScreen = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProps>();
  const handleLoginPress = () => {
    navigation.navigate('loginScreen');
  };

  const handleRegisterPress = async () => {
    setLoading(true);
    const values = {
      name: name,
      email: email,
      password: password,
    };
    if (name.length > 0 && email.length > 0 && password.length > 0) {
      let response = await registerUser(values);
      response ? setLoading(false) : setLoading(false);

      // navigation.navigate('loginScreen');
    } else {
      setLoading(false);
      Alert.alert(
        'Registration failed',
        'name,email,and password are required',
        [
          {
            text: 'OK',
            onPress: () => {},
          },
        ],
      );
    }
  };
  return (
    <View style={loginStyles.container}>
      <StatusBar backgroundColor={'#C76363'} barStyle={'light-content'} />
      <View style={loginStyles.topContainer}>
        <Image source={require('../assets/Rectangle1.png')} />
        <Image
          source={require('../assets/Rectangle_5.png')}
          style={loginStyles.ImageStyle}
        />
      </View>
      {/* input fields  */}
      <View style={loginStyles.inputFiledContainer}>
        <View style={{marginHorizontal: responsiveWidth(5)}}>
          <Text style={loginStyles.LoginHeadingFont}>Register</Text>
          <View style={{marginTop: responsiveHeight(1)}}>
            <Text
              style={[
                loginStyles.textInputeText,
                {marginTop: responsiveHeight(1)},
              ]}>
              full name
            </Text>
            <TextInput
              style={loginStyles.textInpute}
              onChangeText={text => setName(text)}
              value={name}
              placeholder="enter password here"
            />
            <Text
              style={[
                loginStyles.textInputeText,
                {marginTop: responsiveHeight(1)},
              ]}>
              email
            </Text>
            <TextInput
              style={loginStyles.textInpute}
              onChangeText={text => setEmail(text)}
              value={email}
              placeholder="enter email here"
            />
            <Text
              style={[
                loginStyles.textInputeText,
                {marginTop: responsiveHeight(1)},
              ]}>
              password
            </Text>
            <TextInput
              style={loginStyles.textInpute}
              onChangeText={text => setPassword(text)}
              value={password}
              maxLength={6}
              placeholder="password must be number of 6 digits"
            />

            <View
              style={{
                flexDirection: 'row',
                marginTop: responsiveWidth(3),
                gap: responsiveWidth(3),
              }}>
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

      {/* bottom container */}
      <View style={loginStyles.bottomContainer}>
        <Image
          source={require('../assets/Rectangle3.png')}
          height={responsiveHeight(10)}
        />
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
              already member? <Text onPress={handleLoginPress}>Login</Text>
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleRegisterPress}
            style={loginStyles.loginButton}>
            <Text style={[loginStyles.LoginFont, {color: '#fff'}]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegistrationScreen;
