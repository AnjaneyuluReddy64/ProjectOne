import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const categories = [
  {
    name: 'Burger',
    image:
      'https://img.freepik.com/free-photo/classic-cheese-burger-with-beef-cutlet-vegetables-onions-isolated-white-background_123827-29709.jpg',
  },
  {
    name: 'Taco',
    image:
      'https://img.freepik.com/free-photo/delicious-taco-studio_23-2150770545.jpg',
  },
  {
    name: 'Drink',
    image:
      'https://img.freepik.com/free-psd/refreshing-orange-cocktail-martini-glass-garnished-with-orange-slice-perfect-summer-day-any-occasion-delicious-drink_632498-28278.jpg',
  },
  {
    name: 'Pizza',
    image:
      'https://img.freepik.com/premium-photo/pepperoni-pizza-cheese-pizza-food-pizza-pizza-pepperoni-mozzarella-mozzarella-cheese-cheese_812450-2.jpg',
  },
];

const dummydata = {
  burger: [
    {
      img: 'https://img.freepik.com/free-photo/burger-with-meat-cutlet-tomatoes-lettuce-cheese_141793-1132.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Classic Cheeseburger',
      rating: 4.7,
      distance: '1.2 km',
      price: '$5.99',
    },
    {
      img: 'https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'BBQ Bacon Burger',
      rating: 4.5,
      distance: '2.5 km',
      price: '$6.99',
    },
    {
      img: 'https://img.freepik.com/free-photo/burger-with-meat-cutlet-tomatoes-lettuce-cheese_141793-1132.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Classic Cheeseburger',
      rating: 4.7,
      distance: '1.2 km',
      price: '$5.99',
    },
    {
      img: 'https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'BBQ Bacon Burger',
      rating: 4.5,
      distance: '2.5 km',
      price: '$6.99',
    },
    {
      img: 'https://img.freepik.com/free-photo/burger-with-meat-cutlet-tomatoes-lettuce-cheese_141793-1132.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Classic Cheeseburger',
      rating: 4.7,
      distance: '1.2 km',
      price: '$5.99',
    },
    {
      img: 'https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'BBQ Bacon Burger',
      rating: 4.5,
      distance: '2.5 km',
      price: '$6.99',
    },
  ],
  taco: [
    {
      img: 'https://img.freepik.com/free-photo/mexican-food-concept-high-angle_23-2148629376.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Spicy Chicken Taco',
      rating: 4.8,
      distance: '0.8 km',
      price: '$3.50',
    },
    {
      img: 'https://img.freepik.com/free-photo/mexican-food-concept-high-angle_23-2148629376.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Beef Supreme Taco',
      rating: 4.6,
      distance: '1.8 km',
      price: '$3.99',
    },
    {
      img: 'https://img.freepik.com/free-photo/mexican-food-concept-high-angle_23-2148629376.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Spicy Chicken Taco',
      rating: 4.8,
      distance: '0.8 km',
      price: '$3.50',
    },
    {
      img: 'https://img.freepik.com/free-photo/mexican-food-concept-high-angle_23-2148629376.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Beef Supreme Taco',
      rating: 4.6,
      distance: '1.8 km',
      price: '$3.99',
    },
    {
      img: 'https://img.freepik.com/free-photo/mexican-food-concept-high-angle_23-2148629376.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Spicy Chicken Taco',
      rating: 4.8,
      distance: '0.8 km',
      price: '$3.50',
    },
    {
      img: 'https://img.freepik.com/free-photo/mexican-food-concept-high-angle_23-2148629376.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Beef Supreme Taco',
      rating: 4.6,
      distance: '1.8 km',
      price: '$3.99',
    },
  ],
  drink: [
    {
      img: 'https://img.freepik.com/free-photo/delicious-fresh-drink-table_114579-9248.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Classic Coke',
      rating: 4.3,
      distance: '0.5 km',
      price: '$1.50',
    },
    {
      img: 'https://img.freepik.com/free-psd/refreshing-iced-lemonade-with-lemon-slices-mint_632498-45782.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Fresh Lemonade',
      rating: 4.9,
      distance: '0.7 km',
      price: '$2.00',
    },
    {
      img: 'https://img.freepik.com/free-photo/delicious-fresh-drink-table_114579-9248.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Classic Coke',
      rating: 4.3,
      distance: '0.5 km',
      price: '$1.50',
    },
    {
      img: 'https://img.freepik.com/free-psd/refreshing-iced-lemonade-with-lemon-slices-mint_632498-45782.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Fresh Lemonade',
      rating: 4.9,
      distance: '0.7 km',
      price: '$2.00',
    },
    {
      img: 'https://img.freepik.com/free-photo/delicious-fresh-drink-table_114579-9248.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Classic Coke',
      rating: 4.3,
      distance: '0.5 km',
      price: '$1.50',
    },
    {
      img: 'https://img.freepik.com/free-psd/refreshing-iced-lemonade-with-lemon-slices-mint_632498-45782.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Fresh Lemonade',
      rating: 4.9,
      distance: '0.7 km',
      price: '$2.00',
    },
  ],
  pizza: [
    {
      img: 'https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868922.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Margherita Pizza',
      rating: 4.6,
      distance: '1.5 km',
      price: '$8.99',
    },
    {
      img: 'https://img.freepik.com/free-photo/side-view-pizza-with-slices-bell-pepper-pizza-slices-flour-board-cookware_176474-3185.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Pepperoni Pizza',
      rating: 4.8,
      distance: '2.0 km',
      price: '$9.99',
    },
    {
      img: 'https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868922.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Margherita Pizza',
      rating: 4.6,
      distance: '1.5 km',
      price: '$8.99',
    },
    {
      img: 'https://img.freepik.com/free-photo/side-view-pizza-with-slices-bell-pepper-pizza-slices-flour-board-cookware_176474-3185.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Pepperoni Pizza',
      rating: 4.8,
      distance: '2.0 km',
      price: '$9.99',
    },
    {
      img: 'https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868922.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Margherita Pizza',
      rating: 4.6,
      distance: '1.5 km',
      price: '$8.99',
    },
    {
      img: 'https://img.freepik.com/free-photo/side-view-pizza-with-slices-bell-pepper-pizza-slices-flour-board-cookware_176474-3185.jpg?ga=GA1.1.1361235154.1742552335&semt=ais_hybrid',
      title: 'Pepperoni Pizza',
      rating: 4.8,
      distance: '2.0 km',
      price: '$9.99',
    },
  ],
};

export default function App({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Default to first category

  const renderItem = ({item}: {item: any}) => {
    // console.log(item);

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate('CardInfo', {itemData: item});
        }}>
        {/* First Half: Image and Favorite Icon */}
        <View style={styles.cardImageContainer}>
          <Image source={{uri: item?.img}} style={styles.cardImage} />
          <TouchableOpacity style={styles.favoriteIcon}>
            <Text>Fav</Text>
          </TouchableOpacity>
        </View>

        {/* Second Half: Title, Rating, Distance, and Price */}
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={styles.ratingRow}>
            {/* <MaterialIcons name="star" size={16} color="gold" /> */}
            <Text style={styles.ratingText}>{item.rating}</Text>
            <Text style={styles.distanceText}>{item.distance}</Text>
          </View>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground style={styles.container}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View>
          <Text style={styles.title}>Nani</Text>
          <Text style={styles.title}>Galiveedu</Text>
        </View>
        <Text>Search Icon | Fav Icon</Text>
      </View>

      {/* Category Tabs */}
      <View style={styles.tabContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tab,
              selectedCategory.name === category.name && styles.activeTab,
            ]}
            onPress={() => setSelectedCategory(category)}>
            <Image source={{uri: category.image, width: 50, height: 50}} />
            <Text
              style={[
                styles.tabText,
                selectedCategory.name === category.name && styles.activeTabText,
              ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Display Category Data */}
      <FlatList
        data={dummydata[selectedCategory.name.toLowerCase()]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  title: {fontSize: 20, fontWeight: 'bold'},
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tab: {alignItems: 'center', padding: 10},
  activeTab: {backgroundColor: '#FE8C00', borderRadius: 5},
  tabText: {fontSize: 14, marginTop: 5},
  activeTabText: {color: '#fff', fontWeight: 'bold'},
  listContainer: {paddingVertical: 10},
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 2},
  },
  cardImageContainer: {position: 'relative', flex: 1},
  cardImage: {width: wp('45%'), height: hp('15%')},
  favoriteIcon: {position: 'absolute', top: 10, right: 10},
  cardContent: {padding: 10},
  cardTitle: {fontSize: 16, fontWeight: 'bold', marginBottom: 5},
  ratingRow: {flexDirection: 'row', alignItems: 'center', marginBottom: 5},
  ratingText: {marginLeft: 5, marginRight: 10},
  distanceText: {color: '#555'},
  priceText: {fontSize: 14, fontWeight: 'bold', color: '#FE8C00'},
});
