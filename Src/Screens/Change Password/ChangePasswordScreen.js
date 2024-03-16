import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Font6 from 'react-native-vector-icons/FontAwesome6';
import Matrerial from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const ChangePasswordScreen = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
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
        <Text style={styles.screenHeadingText}>Change Password</Text>
      </View>

      <View style={styles.loginRecoveryContainer}>
        <Text style={styles.validPasswordText}>
          You'll be logged out of all sessions except this one to protect your
          account if anyone is trying to gain access.
        </Text>
        <Text style={styles.validPasswordText}>
          Your password must be at least 6 characters and should include a
          combination of numbers, letters and special characters (!$@%).
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.servicesContainer}>
          <View style={styles.itemContainer}>
            {/* <View style={styles.serviceItemIcon}>
              <Matrerial name="password" size={22} />
            </View> */}
            <View style={styles.itemHeadingContainer}>
              <Text>Enter current password</Text>
              <TextInput style={styles.textInpute} />
            </View>
          </View>

          <View style={styles.itemContainer}>
            {/* <View style={styles.serviceItemIcon}>
              <Matrerial name="password" size={22} />
            </View> */}
            <View style={styles.itemHeadingContainer}>
              <Text>Enter your new password</Text>
              <TextInput style={styles.textInpute} />
            </View>
          </View>

          <View style={styles.itemContainer}>
            {/* <View style={styles.serviceItemIcon}>
              <Matrerial name="password" size={22} />
            </View> */}
            <View style={styles.itemHeadingContainer}>
              <Text>Re-Enter your new password</Text>
              <TextInput style={styles.textInpute} />
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
