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
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: responsiveScreenWidth(4),
  },
  loginRecoveryHeadingText: {
    fontSize: responsiveScreenFontSize(2.4),
    fontWeight: '600',
    color: 'black',
  },
  bottomContainer: {
    flex: 7,
    paddingVertical: responsiveScreenWidth(5),
    // paddingHorizontal:responsiveScreenWidth(2)
    alignItems:"center"
  },
  servicesContainer: {
    width: responsiveScreenWidth(93),
    // height: responsiveScreenHeight(50),
    borderRadius: responsiveScreenWidth(3),
    backgroundColor: '#C3DCFD',
  },
  itemContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(6),
    marginVertical: responsiveScreenWidth(2),
    borderRadius:responsiveScreenWidth(3),
    // paddingHorizontal:responsiveScreenWidth(3),
    backgroundColor:"#C3DCFD",
    // borderBottomWidth: 0.4,
  },
  itemHeadingContainer: {
    flex: 4,
    justifyContent: 'center',
    paddingHorizontal:responsiveScreenWidth(4)
  },
  itemText: {
    fontSize: responsiveScreenFontSize(2),
    fontWeight:'600',
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
});

export default styles;
