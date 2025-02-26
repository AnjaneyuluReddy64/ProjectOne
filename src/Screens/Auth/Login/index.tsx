import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Login = ({navigation}: {navigation: any}) => {
  const signupHandler = () => {
    navigation.navigate('SignUp');
  };
  const forgetHandler = () => {
    navigation.navigate('ForgetPassword');
  };
  return (
    <View>
      <Text>Login</Text>
      <View>
        <TouchableOpacity
          onPress={() => {
            signupHandler();
          }}>
          <Text>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            forgetHandler();
          }}>
          <Text>ForgetPassword</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
