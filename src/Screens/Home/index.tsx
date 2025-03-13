import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useLazyAuthUsersQuery} from '../../APIServices/hostApiServices';
import {COLORS} from '../../Utils/Colors';
import CommonHeader from '../../Components/CommonHeader';
import {useFont} from '../../Utils/Globals';

const dummyData = [
  {
    imageUrl:
      'https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg',
    title: 'Apple iPhone 13',
    features: 'Starlight, 128GB',
    ratingNo: 4,
    price: {
      actualPrice: 49900,
      offerPrice: 44999,
      pricePer: '+9%',
    },
    offerTitle: '₹44,749 with bank offer',
    dateOfDelivery: '17/03/2025',
    warranty: '1 year warranty by Apple',
    feature: [
      {id: 1, title: '15.49 cm display'},
      {id: 2, title: '12MP + 12MP dual camera'},
    ],
  },
  {
    imageUrl:
      'https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg',
    title: 'Samsung Galaxy S23',
    features: 'Phantom Black, 256GB',
    ratingNo: 5,
    price: {
      actualPrice: 79999,
      offerPrice: 72999,
      pricePer: '+8%',
    },
    offerTitle: '₹71,999 with bank offer',
    dateOfDelivery: '18/03/2025',
    warranty: '1 year warranty by Samsung',
    feature: [
      {id: 1, title: '6.1-inch Dynamic AMOLED display'},
      {id: 2, title: '50MP + 10MP + 12MP triple camera'},
    ],
  },
  {
    imageUrl:
      'https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg',
    title: 'Apple iPhone 13',
    features: 'Starlight, 128GB',
    ratingNo: 4,
    price: {
      actualPrice: 49900,
      offerPrice: 44999,
      pricePer: '+9%',
    },
    offerTitle: '₹44,749 with bank offer',
    dateOfDelivery: '17/03/2025',
    warranty: '1 year warranty by Apple',
    feature: [
      {id: 1, title: '15.49 cm display'},
      {id: 2, title: '12MP + 12MP dual camera'},
    ],
  },
  {
    imageUrl:
      'https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg',
    title: 'Samsung Galaxy S23',
    features: 'Phantom Black, 256GB',
    ratingNo: 5,
    price: {
      actualPrice: 79999,
      offerPrice: 72999,
      pricePer: '+8%',
    },
    offerTitle: '₹71,999 with bank offer',
    dateOfDelivery: '18/03/2025',
    warranty: '1 year warranty by Samsung',
    feature: [
      {id: 1, title: '6.1-inch Dynamic AMOLED display'},
      {id: 2, title: '50MP + 10MP + 12MP triple camera'},
    ],
  },
  {
    imageUrl:
      'https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg',
    title: 'Apple iPhone 13',
    features: 'Starlight, 128GB',
    ratingNo: 4,
    price: {
      actualPrice: 49900,
      offerPrice: 44999,
      pricePer: '+9%',
    },
    offerTitle: '₹44,749 with bank offer',
    dateOfDelivery: '17/03/2025',
    warranty: '1 year warranty by Apple',
    feature: [
      {id: 1, title: '15.49 cm display'},
      {id: 2, title: '12MP + 12MP dual camera'},
    ],
  },
  {
    imageUrl:
      'https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg',
    title: 'Samsung Galaxy S23',
    features: 'Phantom Black, 256GB',
    ratingNo: 5,
    price: {
      actualPrice: 79999,
      offerPrice: 72999,
      pricePer: '+8%',
    },
    offerTitle: '₹71,999 with bank offer',
    dateOfDelivery: '18/03/2025',
    warranty: '1 year warranty by Samsung',
    feature: [
      {id: 1, title: '6.1-inch Dynamic AMOLED display'},
      {id: 2, title: '50MP + 10MP + 12MP triple camera'},
    ],
  },
  {
    imageUrl:
      'https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg',
    title: 'Apple iPhone 13',
    features: 'Starlight, 128GB',
    ratingNo: 4,
    price: {
      actualPrice: 49900,
      offerPrice: 44999,
      pricePer: '+9%',
    },
    offerTitle: '₹44,749 with bank offer',
    dateOfDelivery: '17/03/2025',
    warranty: '1 year warranty by Apple',
    feature: [
      {id: 1, title: '15.49 cm display'},
      {id: 2, title: '12MP + 12MP dual camera'},
    ],
  },
  {
    imageUrl:
      'https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg',
    title: 'Samsung Galaxy S23',
    features: 'Phantom Black, 256GB',
    ratingNo: 5,
    price: {
      actualPrice: 79999,
      offerPrice: 72999,
      pricePer: '+8%',
    },
    offerTitle: '₹71,999 with bank offer',
    dateOfDelivery: '18/03/2025',
    warranty: '1 year warranty by Samsung',
    feature: [
      {id: 1, title: '6.1-inch Dynamic AMOLED display'},
      {id: 2, title: '50MP + 10MP + 12MP triple camera'},
    ],
  },
  {
    imageUrl:
      'https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg',
    title: 'Apple iPhone 13',
    features: 'Starlight, 128GB',
    ratingNo: 4,
    price: {
      actualPrice: 49900,
      offerPrice: 44999,
      pricePer: '+9%',
    },
    offerTitle: '₹44,749 with bank offer',
    dateOfDelivery: '17/03/2025',
    warranty: '1 year warranty by Apple',
    feature: [
      {id: 1, title: '15.49 cm display'},
      {id: 2, title: '12MP + 12MP dual camera'},
    ],
  },
  {
    imageUrl:
      'https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg',
    title: 'Samsung Galaxy S23',
    features: 'Phantom Black, 256GB',
    ratingNo: 5,
    price: {
      actualPrice: 79999,
      offerPrice: 72999,
      pricePer: '+8%',
    },
    offerTitle: '₹71,999 with bank offer',
    dateOfDelivery: '18/03/2025',
    warranty: '1 year warranty by Samsung',
    feature: [
      {id: 1, title: '6.1-inch Dynamic AMOLED display'},
      {id: 2, title: '50MP + 10MP + 12MP triple camera'},
    ],
  },
  {
    imageUrl:
      'https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg',
    title: 'Apple iPhone 13',
    features: 'Starlight, 128GB',
    ratingNo: 4,
    price: {
      actualPrice: 49900,
      offerPrice: 44999,
      pricePer: '+9%',
    },
    offerTitle: '₹44,749 with bank offer',
    dateOfDelivery: '17/03/2025',
    warranty: '1 year warranty by Apple',
    feature: [
      {id: 1, title: '15.49 cm display'},
      {id: 2, title: '12MP + 12MP dual camera'},
    ],
  },
  {
    imageUrl:
      'https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg',
    title: 'Samsung Galaxy S23',
    features: 'Phantom Black, 256GB',
    ratingNo: 5,
    price: {
      actualPrice: 79999,
      offerPrice: 72999,
      pricePer: '+8%',
    },
    offerTitle: '₹71,999 with bank offer',
    dateOfDelivery: '18/03/2025',
    warranty: '1 year warranty by Samsung',
    feature: [
      {id: 1, title: '6.1-inch Dynamic AMOLED display'},
      {id: 2, title: '50MP + 10MP + 12MP triple camera'},
    ],
  },
  {
    imageUrl:
      'https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg',
    title: 'Apple iPhone 13',
    features: 'Starlight, 128GB',
    ratingNo: 4,
    price: {
      actualPrice: 49900,
      offerPrice: 44999,
      pricePer: '+9%',
    },
    offerTitle: '₹44,749 with bank offer',
    dateOfDelivery: '17/03/2025',
    warranty: '1 year warranty by Apple',
    feature: [
      {id: 1, title: '15.49 cm display'},
      {id: 2, title: '12MP + 12MP dual camera'},
    ],
  },
  {
    imageUrl:
      'https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg',
    title: 'Samsung Galaxy S23',
    features: 'Phantom Black, 256GB',
    ratingNo: 5,
    price: {
      actualPrice: 79999,
      offerPrice: 72999,
      pricePer: '+8%',
    },
    offerTitle: '₹71,999 with bank offer',
    dateOfDelivery: '18/03/2025',
    warranty: '1 year warranty by Samsung',
    feature: [
      {id: 1, title: '6.1-inch Dynamic AMOLED display'},
      {id: 2, title: '50MP + 10MP + 12MP triple camera'},
    ],
  },
  {
    imageUrl:
      'https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg',
    title: 'Apple iPhone 13',
    features: 'Starlight, 128GB',
    ratingNo: 4,
    price: {
      actualPrice: 49900,
      offerPrice: 44999,
      pricePer: '+9%',
    },
    offerTitle: '₹44,749 with bank offer',
    dateOfDelivery: '17/03/2025',
    warranty: '1 year warranty by Apple',
    feature: [
      {id: 1, title: '15.49 cm display'},
      {id: 2, title: '12MP + 12MP dual camera'},
    ],
  },
  {
    imageUrl:
      'https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg',
    title: 'Samsung Galaxy S23',
    features: 'Phantom Black, 256GB',
    ratingNo: 5,
    price: {
      actualPrice: 79999,
      offerPrice: 72999,
      pricePer: '+8%',
    },
    offerTitle: '₹71,999 with bank offer',
    dateOfDelivery: '18/03/2025',
    warranty: '1 year warranty by Samsung',
    feature: [
      {id: 1, title: '6.1-inch Dynamic AMOLED display'},
      {id: 2, title: '50MP + 10MP + 12MP triple camera'},
    ],
  },
];
const Home = ({route, navigation}: {route: any; navigation: any}) => {
  const {userData, username, password} = route.params;

  const {FONT_SIZE} = useFont();

  const [getUsersAPI, usersData] = useLazyAuthUsersQuery();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await getUsersAPI({}).unwrap();
      if (response) {
      } else {
        console.log('Fetch Faild');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const ProfileScreenHandler = () => {
    navigation.navigate('ProfileScreen', {userData, username, password});
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <TouchableOpacity style={[styles.productCard]}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {/* imageContainer */}
          <View style={styles.imageContainer}>
            <Image
              source={{uri: item.imageUrl || ''}}
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
      <CommonHeader title={'Home'} disableBack />

      <View style={{marginHorizontal: hp('1.5%')}}>
        <FlatList
          data={dummyData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
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

  //Home
  button: {
    backgroundColor: COLORS.DarkMidnightBlue,
    color: 'white',
    textAlign: 'center',
    borderRadius: hp('1%'),
    height: hp('5%'),
    marginBottom: hp('3%'),
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    padding: hp('1.5%'),
  },
  bodyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp('2.3%'),
  },
  textLogo: {
    // fontSize: hp('4%'),

    color: COLORS.DarkMidnightBlue,
  },
});
