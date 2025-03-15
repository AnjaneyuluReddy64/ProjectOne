import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonHeader from '../../../Components/CommonHeader';

const BuyNow = ({route, navigation}: {route: any; navigation: any}) => {
  const {itemData} = route.params;

  return (
    <View>
      <CommonHeader title="Buy Now" />
    </View>
  );
};

export default BuyNow;

const styles = StyleSheet.create({});
