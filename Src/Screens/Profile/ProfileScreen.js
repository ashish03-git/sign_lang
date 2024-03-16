import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {Icon} from '@rneui/base';
import Font from 'react-native-vector-icons/FontAwesome6';
import {LinearGradient} from 'react-native-linear-gradient';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
const ProfileScreen = () => {
  const navigation = useNavigation();
  const services = [
    {icon: 'house-lock', serviceName: 'Password and Security', index: 0},
    {icon: 'address-card', serviceName: 'Personal Details', index: 1},
    {icon: 'language', serviceName: 'App Language', index: 2},
    {icon: 'headset', serviceName: 'Help', index: 3},
    {icon: 'database', serviceName: 'Storage and Data', index: 4},
    {icon: 'clipboard-list', serviceName: 'Support Words', index: 5},
    {icon: 'user-plus', serviceName: 'Invite a friend', index: 6},
  ];
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleServicePress = index => {
    switch (index) {
      case 0:
        navigation.navigate('passwordAndSecurityScreen');
        break;
      case 1:
        navigation.navigate('personalDetailsScreen');
        break;
      case 2:
        console.log('app language press');
        break;
      case 3:
        console.log('help press');
        break;
      case 4:
        navigation.navigate('storageDataScreen');
        break;
      case 5:
        console.log('support word press'); 
        break;
      case 6:
        console.log('invite friend press'); 
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* go back button */}
      <View style={styles.backIconeContainer}>
        <Font
          name="arrow-left-long"
          size={30}
          color={'black'}
          onPress={handleBackPress}
        />
      </View>
      {/* profile details */}
      <View style={styles.profileContainer}>
        <LinearGradient
          colors={['#C3DCFD', '#D8D8D8']}
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
              data={services}
              renderItem={({item}) => (
                <View style={styles.itemContainer}>
                  <View style={styles.serviceItemIcon}>
                    <Font name={`${item.icon}`} size={22} />
                  </View>
                  <View style={styles.itemHeadingContainer}>
                    <Text style={styles.itemText}>{item.serviceName}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleServicePress(item.index)}
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
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
