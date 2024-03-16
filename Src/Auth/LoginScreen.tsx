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
import Font5 from 'react-native-vector-icons/FontAwesome5';
import loginStyles from './loginStyle';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationListProps} from '../Navigation/AppNavigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {loginUser, LoginProps} from './authLogic';
import {ActivityIndicator} from 'react-native';

type NavigationProps = StackNavigationProp<
  StackNavigationListProps,
  'registerScreen'
>;
const LoginScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoginPress = async () => {
    setLoading(true);
    if (email.length > 0 && password.length > 0) {
      let details: LoginProps = {
        email: email,
        password: password,
      };
      let response = await loginUser(details);
      if (response) {
        setLoading(false);
        navigation.navigate('homeScreen');
      } else {
        setLoading(false);
        Alert.alert('Login failed', 'failed to login', [
          {
            text: 'OK',
            onPress: () => {},
          },
        ]);
      }
    } else {
      setLoading(false);
      Alert.alert(
        'Login failed',
        'email and password both fields are required',
        [
          {
            text: 'OK',
            onPress: () => {},
          },
        ],
      );
    }
    // console.log('user details found', response);

    // navigation.navigate('homeScreen');
  };

  const handleRegisterPress = () => {
    navigation.navigate('registerScreen');
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
      <View style={loginStyles.inputFiledContainer}>
        <View style={{marginHorizontal: responsiveWidth(5)}}>
          <Text style={loginStyles.LoginHeadingFont}>Login</Text>
          <View style={{marginTop: responsiveHeight(1)}}>
            <Text style={loginStyles.textInputeText}>Email</Text>
            <TextInput
              style={loginStyles.textInpute}
              onChangeText={text => setEmail(text)}
              value={email}
              placeholder="enter your email address"
            />
            <Text
              style={[
                loginStyles.textInputeText,
                {marginTop: responsiveHeight(1.5)},
              ]}>
              Password
            </Text>
            <TextInput
              style={loginStyles.textInpute}
              onChangeText={text => setPassword(text)}
              value={password}
              maxLength={6}
              placeholder="enter your password"
            />
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
            width: responsiveScreenWidth(100),
            position: 'absolute',
            bottom: responsiveHeight(1),
            paddingHorizontal: responsiveScreenWidth(3),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // backgroundColor:"red"
          }}>
          <View>
            <Text style={[loginStyles.textInputeText, {color: '#fff'}]}>
              New Here? <Text onPress={handleRegisterPress}>Register</Text>
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleLoginPress}
            style={loginStyles.loginButton}>
            {loading ? (
              <ActivityIndicator size={'large'} color={'white'} />
            ) : (
              <Text style={[loginStyles.LoginFont, {color: '#fff'}]}>
                Login
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
