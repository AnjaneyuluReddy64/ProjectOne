import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useLazyAuthUsersQuery} from '../../APIServices/hostApiServices';
import {COLORS} from '../../Utils/Colors';

const Home = ({route, navigation}: {route: any; navigation: any}) => {
  const {userData, username, password} = route.params;
  // console.log(userData);

  const [getUsersAPI, usersData] = useLazyAuthUsersQuery();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await getUsersAPI({}).unwrap();
      if (response) {
        // console.log('Fetch Sucessfully------>', response);
      } else {
        console.log('Fetch Faild');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const signupHandler = () => {
    navigation.navigate('ProfileScreen', {userData, username, password});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textLogo}>Home</Text>
      <TouchableOpacity style={styles.button} onPress={signupHandler}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  textLogo: {color: '#00223E', fontSize: hp('4%')},
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
});
