import {StyleSheet} from 'react-native';
import {COLORS} from '../../../Utils/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LightGray,
  },
  productCard: {
    backgroundColor: 'white',
    marginVertical: hp('1%'),
    borderRadius: hp('1%'),
    padding: hp('1%'),
  },
  imageContainer: {
    width: wp('30%'),
    height: hp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp('2.5%'),
  },
  productImage: {
    width: wp('100%'),
    height: hp('16%'),
    borderRadius: hp('1%'),
  },
  productInfo: {
    flex: 1,
    marginLeft: wp('2%'),
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#333',
  },
  features: {
    fontSize: hp('1.6%'),
    color: '#666',
    marginTop: hp('0.5%'),
  },
  ratingContainer: {
    marginTop: hp('0.5%'),
  },
  rating: {
    fontSize: hp('1.6%'),
    color: '#2e7d32',
    fontWeight: '600',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('0.5%'),
    flexWrap: 'wrap',
  },
  offerPrice: {
    fontSize: hp('1.8%'),
    fontWeight: 'bold',
    marginRight: wp('2%'),
  },
  actualPrice: {
    fontSize: hp('1.6%'),
    textDecorationLine: 'line-through',
    color: '#666',
    marginRight: wp('2%'),
  },
  pricePer: {
    fontSize: hp('1.4%'),
    color: '#2e7d32',
  },
  offerTitle: {
    fontSize: hp('1.4%'),
    color: '#2e7d32',
    marginTop: hp('0.5%'),
  },
  deliveryContainer: {
    marginTop: hp('0.5%'),
  },
  delivery: {
    fontSize: hp('1.4%'),
    color: '#666',
  },
  warranty: {
    fontSize: hp('1.4%'),
    color: '#666',
    marginTop: hp('0.3%'),
  },
  featureList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: hp('0.5%'),
  },
  featureItem: {
    borderColor: 'black',
    borderWidth: wp('0.1%'),
    borderRadius: hp('0.5%'),
    padding: hp('0.5%'),
    marginRight: wp('2%'),
    marginBottom: hp('0.5%'),
    fontSize: hp('1.4%'),
    color: '#666',
    marginVertical: hp('0.2%'),
  },
});
