import {View, Text, TouchableOpacity} from 'react-native';
import Font6 from 'react-native-vector-icons/FontAwesome6';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleProfilePress = () => {
    navigation.navigate('profileScreen');
  };
  const handleOpenCamera = () => {
    navigation.navigate('cameraRecognitionScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Font6
          name="circle-user"
          color={'black'}
          size={40}
          style={{margin: 10}}
          onPress={handleProfilePress}
        />
      </View>
      <View style={styles.bodyContainer}>
        <TouchableOpacity onPress={handleOpenCamera} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Open Camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
