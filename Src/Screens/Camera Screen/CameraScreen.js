import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#D9D9D9'} barStyle={'black'} />
      <View style={styles.headerContainer}>
        <View style={styles.menuContainer}>
          <FontAwesome6Icon name="align-left" size={30} color={'black'} />
        </View>
        <View style={styles.screenNameContainer}>
          <Text style={styles.screenNameText}>Camera Page</Text>
        </View>
        <View style={styles.cameraSwitchContainer}>
          <FontAwesome6Icon name="camera-rotate" size={30} color={'black'} />
        </View>
      </View>
      <View style={styles.middleContainer}>
        <FontAwesome6Icon name="camera" size={150} color={'gray'} />
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.videoButton}>
          <FontAwesome6Icon name="video" size={30} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;
