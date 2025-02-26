import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}: {navigation: any}) => {
  const loginNavHandler = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    setTimeout(() => {
      loginNavHandler();
    }, 5000);
  }, []);
  return (
    <View>
      <Text>Splash</Text>

      <TouchableOpacity
        onPress={() => {
          loginNavHandler();
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
