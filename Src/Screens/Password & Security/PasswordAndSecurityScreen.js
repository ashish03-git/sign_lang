import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Font6 from 'react-native-vector-icons/FontAwesome6';
import Matrerial from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const PasswordAndSecurityScreen = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleChangePasswordPress = () => {
    navigation.navigate('changePasswordScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.backIconeContainer}>
        <Font6
          name="arrow-left-long"
          size={30}
          color={'black'}
          onPress={handleBackPress}
        />
      </View>
      <View style={styles.screenHeadingContainer}>
        <Text style={styles.screenHeadingText}>Password and Security</Text>
      </View>
      <View style={styles.loginRecoveryContainer}>
        <Text style={styles.loginRecoveryHeadingText}>Login & recovery</Text>
        <Text
          style={{
            fontSize: responsiveScreenFontSize(1.8),
            marginTop: responsiveScreenWidth(2),
          }}>
          Manage your passwords, login preferences and recovery methods.
        </Text>
      </View>
      {/* services container */}
      <View style={styles.bottomContainer}>
        <View style={styles.servicesContainer}>

          <View style={styles.itemContainer}>
            <View style={styles.itemHeadingContainer}>
              <Text style={styles.itemText}>Change Password</Text>
            </View>
            <TouchableOpacity
              onPress={handleChangePasswordPress}
              style={styles.itemIcon}>
              <Text
                style={{
                  fontSize: responsiveScreenFontSize(2.8),
                  color: 'black',
                }}>
                {'>'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.itemHeadingContainer}>
              <Text style={styles.itemText}>Two-factor authentications</Text>
            </View>
            <View style={styles.itemIcon}>
              <Text
                style={{
                  fontSize: responsiveScreenFontSize(2.8),
                  color: 'black',
                }}>
                {'>'}
              </Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.itemHeadingContainer}>
              <Text style={styles.itemText}>Saved Login</Text>
            </View>
            <View style={styles.itemIcon}>
              <Text
                style={{
                  fontSize: responsiveScreenFontSize(2.8),
                  color: 'black',
                }}>
                {'>'}
              </Text>
            </View>
          </View>

        </View>
      </View>
    </View>
  );
};

export default PasswordAndSecurityScreen;
