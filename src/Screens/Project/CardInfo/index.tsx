import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../../Utils/Colors';
import {useFont} from '../../../Utils/Globals';
import CommonHeader from '../../../Components/CommonHeader';

const CardInfo = ({route, navigation}: {route: any; navigation: any}) => {
  const {itemData} = route.params;
  // console.log('========', itemData);

  const {FONT_SIZE} = useFont();
  const onBuyNowHandler = (itemData: any) => {
    navigation.navigate('BuyNow', {itemData});
  };

  const [cartData, setCartData] = useState<any | []>([]);

  useEffect(() => {
    // console.log('cartData--->', cartData?.length);
  }, [cartData]);

  const onAddToCart = () => {
    setCartData([...cartData, itemData]);
  };

  const onCartHandler = () => {
    navigation.navigate('Cart', {cartData: cartData});
  };
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader
        title="Product Details"
        rightTitle={`Cart (${cartData?.length})`}
        onRightPress={onCartHandler}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={{uri: itemData.img}}
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>

        {/* Product Info Section */}
        <View style={styles.infoContainer}>
          <Text style={[styles.productTitle, {fontSize: FONT_SIZE.F_20}]}>
            {itemData.title}
          </Text>
          <Text style={styles.features}>{itemData.features}</Text>

          {/* Rating */}
          <View style={styles.ratingContainer}>
            <View style={styles.ratingBox}>
              <Text style={styles.ratingText}>★ {itemData.rating}/5</Text>
            </View>
          </View>

          {/* Price Section */}
          <View style={styles.priceContainer}>
            <Text style={styles.offerPrice}>₹{itemData.price}</Text>
            <Text style={styles.actualPrice}>
              ₹{itemData.price.actualPrice}
            </Text>
            <Text style={styles.pricePer}>{itemData.price.pricePer}</Text>
          </View>

          <Text style={styles.offerTitle}>{itemData.offerTitle}</Text>

          {/* Delivery and Warranty */}
          <View style={styles.deliveryContainer}>
            <Text style={styles.deliveryText}>
              Distance by {itemData.distance}
            </Text>
            <Text style={styles.warrantyText}>{itemData.warranty}</Text>
          </View>

          {/* Features */}
          <View style={styles.featureSection}>
            <Text style={styles.featureTitle}>Highlights</Text>
            <View style={styles.featureList}>
              {itemData?.feature?.map((feat: any) => (
                <View key={feat.id} style={styles.featureItem}>
                  <Text style={styles.featureText}>• {feat.title}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Add Cart || Buy Now */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => {
            onAddToCart();
          }}>
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buyNowButton}
          onPress={() => {
            onBuyNowHandler(itemData);
          }}>
          <Text style={styles.buttonText}>BUY NOW</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LightGray,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: hp('2%'),
    backgroundColor: 'white',
  },
  backButton: {
    fontSize: hp('2%'),
    color: COLORS.Primary,
  },
  headerTitle: {
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
  },
  shareButton: {
    fontSize: hp('2%'),
    color: COLORS.Primary,
  },
  imageContainer: {
    height: hp('40%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: wp('80%'),
    height: hp('35%'),
  },
  infoContainer: {
    padding: hp('2%'),
    backgroundColor: 'white',
    marginTop: hp('1%'),
  },
  productTitle: {
    fontWeight: 'bold',
    color: '#333',
  },
  features: {
    fontSize: hp('2%'),
    color: '#666',
    marginTop: hp('1%'),
  },
  ratingContainer: {
    marginTop: hp('1%'),
  },
  ratingBox: {
    backgroundColor: '#2e7d32',
    padding: hp('0.5%'),
    borderRadius: hp('0.5%'),
    alignSelf: 'flex-start',
  },
  ratingText: {
    color: 'white',
    fontSize: hp('1.8%'),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  offerPrice: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    marginRight: wp('2%'),
  },
  actualPrice: {
    fontSize: hp('2.2%'),
    textDecorationLine: 'line-through',
    color: '#666',
    marginRight: wp('2%'),
  },
  pricePer: {
    fontSize: hp('2%'),
    color: '#2e7d32',
  },
  offerTitle: {
    fontSize: hp('1.8%'),
    color: '#2e7d32',
    marginTop: hp('1%'),
  },
  deliveryContainer: {
    marginTop: hp('2%'),
  },
  deliveryText: {
    fontSize: hp('1.8%'),
    color: '#333',
  },
  warrantyText: {
    fontSize: hp('1.8%'),
    color: '#666',
    marginTop: hp('0.5%'),
  },
  featureSection: {
    marginTop: hp('2%'),
  },
  featureTitle: {
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  featureList: {
    marginLeft: wp('2%'),
  },
  featureItem: {
    marginBottom: hp('0.5%'),
  },
  featureText: {
    fontSize: hp('1.8%'),
    color: '#333',
  },
  bottomButtons: {
    flexDirection: 'row',
    padding: hp('2%'),
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#ff9f00',
    padding: hp('1.5%'),
    borderRadius: hp('0.5%'),
    marginRight: wp('2%'),
    alignItems: 'center',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#fb641b',
    padding: hp('1.5%'),
    borderRadius: hp('0.5%'),
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
});

export default CardInfo;
