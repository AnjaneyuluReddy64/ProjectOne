import {
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
import React, {useState} from 'react';
import {COLORS} from '../../../Utils/Colors';

const ForgetPassword = ({navigation}: {navigation: any}) => {
  const [username, setUsername] = useState('');

  const onLoginHandler = () => {
    navigation.navigate('EnterOtp');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleCard}>
        <Text style={styles.titleText}>Forgot password?</Text>
        <Text style={styles.paraText}>
          Dont worry! It Happens. Please enter the email address associated with
          your accoount
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

        <TouchableOpacity style={styles.button} onPress={onLoginHandler}>
          <Text style={styles.buttonText}>Get OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: hp('2.2%'),
  },
  titleCard: {alignItems: 'center', marginVertical: wp('5%')},
  titleText: {
    fontSize: hp('4'),
    fontWeight: 'bold',
    color: COLORS.DarkMidnightBlue,
  },
  paraText: {
    width: hp('25%'),
    textAlign: 'center',
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
});
