import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../../Utils/Colors';
import {useLazyAuthUsersQuery} from '../../../APIServices/hostApiServices';

const Login = ({navigation}: {navigation: any}) => {
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [getUsersAPI, usersData] = useLazyAuthUsersQuery();

  const onLoginHandler = async () => {
    if (!username.trim()) {
      Alert.alert('Enter email');
    } else if (!password.trim()) {
      Alert.alert('Enter password');
    } else {
      setLoading(true);
      try {
        const response = await getUsersAPI({}).unwrap();

        const currentUser = response?.find(
          (user: any) =>
            user?.gmail === username && user?.password === password,
        );

        if (currentUser) {
          navigation?.navigate('Home', {
            userData: currentUser || 'Nouser',
          });
          // setUsername('');
          // setpassword('');
        } else {
          Alert.alert('User Notfound');
        }
      } catch (err) {
        Alert.alert('Login Error', 'Unable to login. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
  };

  // const signupHandler = () => {
  //   navigation.navigate('SignUp');
  // };
  // const forgetHandler = () => {
  //   navigation.navigate('ForgetPassword');
  // };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.titleText]}>Login</Text>
        <Text style={styles.paraText}>Please sign in to your Phone</Text>
      </View>

      <View style={{marginVertical: hp('13%')}}>
        <Text style={styles.label}>Phone Number</Text>

        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter Mobile Number"
        />
        {/* <Text style={styles.label}>PASSWORD</Text>

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setpassword}
          placeholder="Enter Password"
          secureTextEntry
        /> */}
        {/* <TouchableOpacity
          disabled={loading}
          style={styles.button}
          onPress={() => navigation.navigate('OtpComponent')}>
          <Text style={styles.buttonText}>
            {loading ? 'Loading....' : 'Login'}
          </Text>
        </TouchableOpacity> */}
      </View>
      <View>
        <TouchableOpacity
          disabled={loading}
          style={styles.button}
          onPress={() => navigation.navigate('OtpComponent')}>
          <Text style={styles.buttonText}>
            {loading ? 'Loading....' : 'Login'}
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View>
        <View style={styles.bottomText}>
          <TouchableOpacity onPress={signupHandler}>
            <Text style={{color: '#00C7FE', textAlign: 'center'}}>Signup</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={forgetHandler}>
          <Text style={{color: '#00C7FE', textAlign: 'center'}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: hp('2.3%'),
  },
  titleContainer: {
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: '#101010',
  },
  paraText: {
    marginVertical: hp('2%'),
    textAlign: 'left',
    color: '#878787',
    width: wp('55%'),
  },
  label: {
    color: '#101010',
    fontSize: hp('2%'),
    marginBottom: hp('1%'),
  },
  input: {
    borderWidth: hp('0.1%'),
    borderColor: '#00223E',
    borderRadius: hp('1%'),
    height: hp('5%'),
    marginBottom: hp('3%'),
    paddingLeft: hp('2%'),
  },
  button: {
    backgroundColor: '#FE8C00',
    color: 'white',
    textAlign: 'center',
    borderRadius: hp('2%'),
    height: hp('5%'),
    marginBottom: hp('3%'),
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    padding: hp('1.5%'),
  },
  bottomText: {paddingBottom: hp('2%')},
});
