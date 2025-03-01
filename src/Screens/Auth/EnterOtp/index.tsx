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

const EnterOtp = ({navigation}: {navigation: any}) => {
  const [username, setUsername] = useState('');

  const onLoginHandler = () => {
    navigation.navigate('ResetPassword');
  };
  return (
    <View style={styles.container}>
      <View>
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
      <View style={styles.bottomText}>
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
    padding: 16,
  },
  titleText: {
    textAlign: 'center',
    fontSize: hp('4'),
    fontWeight: 'bold',
    color: '#00223E',
  },
  paraText: {
    textAlign: 'center',
  },
  label: {
    color: '#00C7FE',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#00223E',
    color: 'white',
    textAlign: 'center',
    borderRadius: hp('1.5'),
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    padding: 11,
  },
  bottomText: {paddingTop: 2},
});
