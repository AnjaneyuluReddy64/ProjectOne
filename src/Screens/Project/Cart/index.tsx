import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonHeader from '../../../Components/CommonHeader';
import Cards from '../Cards';

const Cart = ({route, navigation}: {route: any; navigation: any}) => {
  const {cartData} = route.params;
  console.log('cartData--->', cartData);

  return (
    <View style={{flex: 1}}>
      <CommonHeader title="Cart" />
      <View style={{flex: 1}}>
        <Cards cartData={cartData} navigation={navigation} />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
