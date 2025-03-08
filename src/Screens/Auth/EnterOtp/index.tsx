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
import OtpComponent from '../OtpComponent';
import {COLORS} from '../../../Utils/Colors';

const EnterOtp = ({navigation}: {navigation: any}) => {
  const [username, setUsername] = useState('');

  const onLoginHandler = () => {
    navigation.navigate('ResetPassword');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleCard}>
        <Text style={styles.titleText}>Enter OTP</Text>
        <Text style={styles.paraText}>
          4 digit verification code has been sent on your registered email
          address
        </Text>
      </View>

      <View>
        <OtpComponent />

        <TouchableOpacity style={styles.button} onPress={onLoginHandler}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonText}>
        <TouchableOpacity>
          <Text style={{color: '#00C7FE', textAlign: 'center'}}>
            Didn't receive otp? Resend again
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EnterOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: hp('2%'),
  },
  titleCard: {alignItems: 'center', marginVertical: wp('5%')},
  titleText: {
    fontSize: hp('4'),
    fontWeight: 'bold',
    color: COLORS.DarkMidnightBlue,
  },
  paraText: {textAlign: 'center', width: wp('60%')},

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
