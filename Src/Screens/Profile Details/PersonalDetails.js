import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Font6 from 'react-native-vector-icons/FontAwesome6';
import Matrerial from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const PersonalDetailsScreen = () => {
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
        <Text style={styles.screenHeadingText}>Personal Details</Text>
      </View>
      <View style={styles.loginRecoveryContainer}>
        <Text
          style={{
            fontSize: responsiveScreenFontSize(1.8),
            marginTop: responsiveScreenWidth(2),
          }}>
          App name uses this information to verify your identity and to keep our
          community safe.
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.servicesContainer}>
          <View style={styles.itemContainer}>
            {/* <View style={styles.serviceItemIcon}>
              <Matrerial name="password" size={22} />
            </View> */}
            <View style={styles.itemHeadingContainer}>
              <Text style={styles.itemText}>change password</Text>
              <Text>E-mail, Phone Number</Text>
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
            {/* <View style={styles.serviceItemIcon}>
              <Matrerial name="password" size={22} />
            </View> */}
            <View style={styles.itemHeadingContainer}>
              <Text style={styles.itemText}>Date of birth</Text>
              <Text>01 January 2000</Text>
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
            {/* <View style={styles.serviceItemIcon}>
              <Matrerial name="password" size={22} />
            </View> */}
            <View style={styles.itemHeadingContainer}>
              <Text style={styles.itemText}>Account ownership and control</Text>
              <Text>
                Manage your data, and deactivate or delete your accounts and
                profiles{' '}
              </Text>
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

export default PersonalDetailsScreen;
