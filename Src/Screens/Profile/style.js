import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
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
    justifyContent:"center",
    // alignItems:"center",
    paddingHorizontal: responsiveScreenWidth(4),
  },
  profileContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  profileDetailsContainer: {
    flexDirection: 'row',
    width: responsiveScreenWidth(94),
    height: responsiveScreenHeight(12),
    borderRadius: responsiveScreenWidth(4),
    // backgroundColor: 'blue',
  },
  profileImageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: responsiveScreenWidth(20),
    height: responsiveScreenWidth(20),
    borderRadius: responsiveScreenWidth(20),
    backgroundColor: 'white',
  },
  profileText: {
    fontSize: responsiveScreenFontSize(2.8),
    color: 'black',
    fontWeight: '600',
  },
  usernameText: {fontSize: responsiveScreenFontSize(2), color: 'black'},
  profileNameContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  iconeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icontSize: {fontSize: responsiveScreenFontSize(3), color: 'black'},
  profileItemContainer: {
    flex: 9,
  },
  accSettingTextContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: responsiveScreenWidth(5),
  },
  allServicesContainer: {
    flex: 7,
    alignItems: 'center',
  },
  accSettingText: {
    fontSize: responsiveScreenFontSize(2.3),
    color: 'black',
    fontWeight: '700',
  },
  servicesContainer: {
    width: responsiveScreenWidth(93),
    // height: responsiveScreenHeight(50),
    borderRadius: responsiveScreenWidth(3),
    backgroundColor: '#C3DCFD',
  },
  serviceItemIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(5),
    marginVertical: responsiveScreenWidth(1.5),
    borderBottomWidth: 0.4,
  },
  itemHeadingContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: responsiveScreenFontSize(2.1),
    color: 'black',
  },
  itemIcon: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: responsiveScreenWidth(3),
  },
});

export default styles;
