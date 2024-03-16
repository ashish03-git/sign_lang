import {StyleSheet} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenNameContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  screenNameText: {
    fontSize: responsiveScreenFontSize(2.8),
    color: 'black',
  },
  cameraSwitchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#A39F9F',
  },
  videoButton: {
    width: responsiveScreenWidth(20),
    paddingVertical: responsiveScreenWidth(4),
    borderRadius: responsiveScreenWidth(4),
    margin:responsiveScreenWidth(3),
    backgroundColor: '#D9D9D9',
    justifyContent:"center",
    alignItems:"center",
    elevation: 10,
  },
});
export default styles;
