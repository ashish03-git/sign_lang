import {StyleSheet} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    backgroundColor: 'white',
  },
  backIconeContainer: {
    flex: 0.5,
    justifyContent: 'center',
    // alignItems:"center",
    paddingHorizontal: responsiveScreenWidth(4),
  },
  screenHeadingContainer: {
    flex: 0.5,
    justifyContent: 'center',
    paddingHorizontal: responsiveScreenWidth(4),
  },
  screenHeadingText: {
    fontSize: responsiveScreenFontSize(2.9),
    fontWeight: '600',
    color: 'black',
  },
  loginRecoveryContainer: {
    flex: 1.5,
    justifyContent: 'center',
    paddingHorizontal: responsiveScreenWidth(4),
  },
  loginRecoveryHeadingText: {
    fontSize: responsiveScreenFontSize(2.4),
    fontWeight: '600',
    color: 'black',
  },
  validPasswordText: {
    fontSize: responsiveScreenFontSize(1.8),
    marginTop: responsiveScreenWidth(2),
    color: 'black',
  },
  textInpute: {
    width: responsiveScreenWidth(88),
    height: responsiveScreenHeight(5),
    backgroundColor: '#D9D9D9',
    borderRadius: responsiveScreenWidth(2),
  },
  bottomContainer: {
    flex: 5,
    paddingVertical: responsiveScreenWidth(5),
    paddingHorizontal: responsiveScreenWidth(2),
  },
  servicesContainer: {
    width: responsiveScreenWidth(96),
    height: responsiveScreenHeight(30),
    borderRadius: responsiveScreenWidth(3),
    backgroundColor: '#C3DCFD',
    justifyContent: 'space-around',
  },
  itemContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(6),
    marginVertical: responsiveScreenWidth(3),
    borderRadius: responsiveScreenWidth(3),
    // paddingHorizontal:responsiveScreenWidth(3),
    backgroundColor: '#C3DCFD',
    // borderBottomWidth: 0.4,
  },
  inputHeadingText: {
    marginVertical: responsiveScreenWidth(2),
  },
  itemHeadingContainer: {
    flex: 4,
    justifyContent: 'center',
    paddingHorizontal: responsiveScreenWidth(4),
    paddingVertical: responsiveScreenWidth(4),
  },
  itemText: {
    fontSize: responsiveScreenFontSize(2),
    fontWeight: '600',
    color: 'black',
  },
  itemIcon: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: responsiveScreenWidth(3),
  },
  serviceItemIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    paddingHorizontal: responsiveScreenWidth(4),
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(5),
    borderRadius: responsiveScreenWidth(3),
    backgroundColor: '#C3DCFD',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  },
  buttonText:{
    fontSize:responsiveScreenFontSize(2),
    color:"black"
  }
});

export default styles;
