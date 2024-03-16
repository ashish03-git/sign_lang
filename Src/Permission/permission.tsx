import {Platform} from 'react-native';
import {
  check,
  PERMISSIONS,
  request,
  PermissionStatus,
} from 'react-native-permissions';

// Function to request camera permission
export const requestCameraPermission = async () => {
  try {
    let permission: PermissionStatus;
    if (Platform.OS === 'android') {
      permission = await check(PERMISSIONS.ANDROID.CAMERA);
    } else if (Platform.OS === 'ios') {
      permission = await check(PERMISSIONS.IOS.CAMERA);
    } else {
      // Handle unsupported platforms
      console.error('Unsupported platform');
      return;
    }

    if (permission === 'granted') {
      console.log('Camera permission granted');
      return true;
      // Permission already granted
    } else {
      const requestResult = await request(
        Platform.OS === 'android'
          ? PERMISSIONS.ANDROID.CAMERA
          : PERMISSIONS.IOS.CAMERA,
      );
      if (requestResult === 'granted') {
        console.log('Camera permission granted');
        return true;
      } else {
        console.log('Camera permission denied');
        return false;
      }
    }
  } catch (error) {
    console.error('Error requesting camera permission: ', error);
    return false;
  }
};

// Call this function wherever you want to request camera permission
// requestCameraPermission();
