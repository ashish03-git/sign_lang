import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const loginStyles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
  },
  topContainer: {
    flex: 2,
    backgroundColor: '#fff',
  },
  inputFiledContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
    position: 'absolute',
    bottom: responsiveHeight(8),
  },
  ImageStyle: {
    position: 'absolute',
    top: responsiveHeight(7),
    zIndex: -10,
  },
  LoginFont: {
    fontSize: responsiveFontSize(3.4),
    fontWeight: '800',
    color: '#2F80ED',
  },
  textInputeText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
    color: '#2F80ED',
  },
  textInpute: {
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    backgroundColor: '#D9D9D9',
    borderRadius: responsiveWidth(2),
  },
  socialIcon: {
    backgroundColor: '#fff',
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    shadowColor: '#000',
    elevation: 5,
    borderRadius: responsiveWidth(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconStyle: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
  },
});

export default loginStyles;
