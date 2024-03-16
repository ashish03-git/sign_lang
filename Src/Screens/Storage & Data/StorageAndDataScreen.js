import {View, Text} from 'react-native';
import React from 'react';
import Font6 from 'react-native-vector-icons/FontAwesome6';
import Matrerial from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const StorageAndDataScreen = () => {
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
        <Text style={styles.screenHeadingText}>Storage and Data</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.servicesContainer}>
          <View style={styles.itemContainer}>
            <View style={styles.serviceItemIcon}>
              <Font6 name="database" size={22} />
            </View>
            <View style={styles.itemHeadingContainer}>
              <Text style={styles.itemText}>Storage Usage</Text>
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
            <View style={styles.serviceItemIcon}>
              <Font6 name="chart-simple" size={22} />
            </View>
            <View style={styles.itemHeadingContainer}>
              <Text style={styles.itemText}>Data Usage</Text>
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

export default StorageAndDataScreen;
