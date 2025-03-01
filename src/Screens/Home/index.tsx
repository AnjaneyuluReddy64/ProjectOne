import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogo}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  textLogo: {color: '#00223E', fontSize: hp('4%')},
});
