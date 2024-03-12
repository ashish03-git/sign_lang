import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './style';
import {Icon} from '@rneui/base';
import Font from 'react-native-vector-icons/FontAwesome5';
import {LinearGradient} from 'react-native-linear-gradient';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
const ProfileScreen = () => {
  const data = new Array(6);

  return (
    <View style={styles.container}>
      {/* go back button */}
      <View style={styles.backIconeContainer}>
        <Font name="home" size={30} />
      </View>
      {/* profile details */}
      <View style={styles.profileContainer}>
        <LinearGradient
          colors={['#2F80ED', '#B7B6BC']}
          style={styles.profileDetailsContainer}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}></View>
          </View>
          <View style={styles.profileNameContainer}>
            <Text style={styles.profileText}>Profile</Text>
            <Text style={styles.usernameText}>username</Text>
          </View>
          <View style={styles.iconeContainer}>
            <Text style={styles.icontSize}>{'>'}</Text>
          </View>
        </LinearGradient>
      </View>
      {/* profile items */}
      <View style={styles.profileItemContainer}>
        <View style={styles.accSettingTextContainer}>
          <Text style={styles.accSettingText}>Account Settings</Text>
        </View>
        <View style={styles.allServicesContainer}>
          <View style={styles.servicesContainer}>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <View style={styles.itemContainer}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Font name="home" size={30} />
                  </View>
                  <View style={styles.itemHeadingContainer}>
                    <Text style={styles.itemText}>Password and Security</Text>
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
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
