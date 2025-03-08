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
  const [getUsersAPI, usersData] = useLazyAuthUsersQuery();

  const onLoginHandler = async () => {
    if (!username.trim()) {
      Alert.alert('Enter email');
    } else if (!password.trim()) {
      Alert.alert('Enter password');
    } else {
      try {
        const response = await getUsersAPI({}).unwrap();

        // const isValidUser = response?.some(
        //   (user: any) =>
        //     user?.gmail === username && user?.password === password,
        // );

        const currentUser = response?.find(
          (user: any) =>
            user?.gmail === username && user?.password === password,
        );

        if (currentUser) {
          //isValidUser
          const userData = usersData;
          navigation?.navigate('Home', {
            // username: username || 'defaultUsername',
            // password: password || 'defaultPassword',
            userData: currentUser || 'Nouser',
            // userData: userData.find(user => user.gmail === username) || {},
          });
          // setUsername('');
          // setpassword('');
        } else {
          Alert.alert('User Notfound');
        }
      } catch (err) {
        Alert.alert('Login Error', 'Unable to login. Please try again later.');
      }
    }
  };

  const signupHandler = () => {
    navigation.navigate('SignUp');
  };
  const forgetHandler = () => {
    navigation.navigate('ForgetPassword');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.titleText, {fontSize: hp('2%')}]}>Login</Text>
        <Text style={styles.paraText}>
          We are happy to see you again. Login to continue
        </Text>
      </View>

      <View>
        <Text style={styles.label}>EMAIL ID</Text>

        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter Email"
        />
        <Text style={styles.label}>PASSWORD</Text>

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setpassword}
          placeholder="Enter Password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={onLoginHandler}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View>
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
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: hp('2.3%'),
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: hp('4'),
    fontWeight: 'bold',
    color: COLORS.DarkMidnightBlue,
  },
  paraText: {
    marginVertical: hp('2%'),
    textAlign: 'center',
    width: wp('55%'),
  },
  label: {
    color: COLORS.VividSkyBlue,
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
  bottomText: {paddingBottom: hp('2%')},
});
