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
    height: responsiveScreenHeight(102),
  },
  topContainer: {
    flex: 1.5,
    backgroundColor: '#fff',
  },
  inputFiledContainer: {
    flex: 2,
    // backgroundColor:'red'
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
  LoginHeadingFont: {
    fontSize: responsiveFontSize(4),
    fontWeight: '600',
    color: '#2F80ED',
  },
  LoginFont: {
    fontSize: responsiveFontSize(2.4),
    // fontWeight: '600',
    color: '#2F80ED',
  },
  loginButton: {
    width: responsiveWidth(26),
    height:responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: responsiveWidth(2),
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(1),
    borderColor: '#fff',
    marginLeft: responsiveWidth(28),
  },
  textInputeText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
    color: '#2F80ED',
  },
  textInpute: {
    width: responsiveWidth(85),
    height: responsiveHeight(6),
    backgroundColor: '#D9D9D9',
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(3),
    fontSize: responsiveFontSize(2),
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
