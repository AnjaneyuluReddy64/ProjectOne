import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Images} from '../../../Utils/Images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Splash = ({navigation}: {navigation: any}) => {
  const loginNavHandler = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    setTimeout(() => {
      loginNavHandler();
    }, 4000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={Images.Splash}
        resizeMode="contain"
        style={styles.logoStyle}
      />
      <Text style={styles.titleLogo}>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleLogo: {
    fontSize: hp('6%'),
    color: '00223E',
  },
  logoStyle: {height: hp('20%'), width: wp('20%')},
});
