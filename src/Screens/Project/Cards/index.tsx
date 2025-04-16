import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useFont} from '../../../Utils/Globals';
import {COLORS} from '../../../Utils/Colors';
import {styles} from './styles';
import {cardDummyData} from '../../../APIServices/dummyApis';

const Cards = ({navigation, cartData}: {navigation: any; cartData: any}) => {
  // console.log(cartData);

  const {FONT_SIZE} = useFont();
  const cardInfoHandler = (item: any) => {
    navigation.navigate('CardInfo', {itemData: item});
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <TouchableOpacity
        style={[styles.productCard]}
        onPress={() => cardInfoHandler(item)}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {/* imageContainer */}
          <View style={styles.imageContainer}>
            <Image
              source={{uri: item.img || ''}}
              style={styles.productImage}
              resizeMode="contain"
            />
          </View>

          {/* productInfo */}
          <View style={styles.productInfo}>
            <Text style={styles.productTitle} numberOfLines={1}>
              {item.title}
            </Text>

            <Text style={styles.features} numberOfLines={1}>
              {item.features}
            </Text>

            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>★ {item.ratingNo}/5</Text>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.offerPrice}>₹{item.price.offerPrice}</Text>
              <Text style={styles.actualPrice}>₹{item.price.actualPrice}</Text>
              <Text style={styles.pricePer}>{item.price.pricePer}</Text>
            </View>

            <Text style={styles.offerTitle} numberOfLines={1}>
              {item.offerTitle}
            </Text>

            <View style={styles.deliveryContainer}>
              <Text style={styles.delivery} numberOfLines={1}>
                Delivery by {item.dateOfDelivery}
              </Text>
              <Text style={styles.warranty} numberOfLines={1}>
                {item.warranty}
              </Text>
            </View>
          </View>
          <View style={{}}>
            <Text>fav</Text>
          </View>
        </View>

        <View style={styles.featureList}>
          {item?.feature?.map((feat: any) => (
            <Text
              key={feat.id}
              style={[styles.featureItem, {fontSize: FONT_SIZE.F_15}]}
              numberOfLines={1}>
              {feat.title}
            </Text>
          ))}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: hp('1.5%')}}>
        <FlatList
          data={cartData ? cartData : cardDummyData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Cards;
