import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ForgetPassword = ({navigation}: {navigation: any}) => {
  const loginHandler = () => {
    navigation.navigate('Login');
  };
  return (
    <View>
      <Text>ForgetPassword</Text>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
