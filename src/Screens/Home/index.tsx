import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useLazyAuthUsersQuery} from '../../APIServices/hostApiServices';
import {COLORS} from '../../Utils/Colors';
import CommonHeader from '../../Components/CommonHeader';
import {useFont} from '../../Utils/Globals';
import Cards from '../Project/Cards';

const Home = ({route, navigation}: {route: any; navigation: any}) => {
  // const {userData, username, password} = route.params;

  // const ProfileScreenHandler = () => {
  //   navigation.navigate('ProfileScreen', {userData, username, password});
  // };

  return (
    <View style={styles.container}>
      <CommonHeader title={'Home'} disableBack />
      <Cards navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LightGray,
  },
  button: {
    backgroundColor: COLORS.DarkMidnightBlue,
    color: 'white',
    textAlign: 'center',
    borderRadius: hp('1%'),
    height: hp('5%'),
    marginBottom: hp('3%'),
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    padding: hp('1.5%'),
  },
  bodyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp('2.3%'),
  },
  textLogo: {
    // fontSize: hp('4%'),

    color: COLORS.DarkMidnightBlue,
  },
});
