import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    // width: responsiveScreenWidth(100),
    // height: responsiveScreenHeight(100),
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  bodyContainer: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: responsiveScreenWidth(3),
  },
  buttonText: {
    fontSize: responsiveFontSize(2),
    color: 'white',
  },
});

export default styles;
