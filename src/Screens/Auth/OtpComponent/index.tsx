import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const OTPInput = ({navigation, route}: {navigation: any; route: any}) => {
  const length = 4;
  const [otp, setOtp] = useState(new Array(length).fill(''));
  // console.log(new Array(length).fill(''));

  const [timer, setTimer] = useState(60);

  const inputRefs = useRef<Array<TextInput | null>>([]);

  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 1) {
          setCanResend(true);
        }
        return prevTimer > 0 ? prevTimer - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleChange = (text, index) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Move to the next input field automatically
      if (text && index < length - 1) {
        inputRefs.current[index + 1].focus();
      }

      // Check if all OTP inputs are filled
      if (newOtp.join('').length === length) {
        route.params?.onComplete?.(newOtp.join(''));
      }
    }
  };
  const handleResendOTP = () => {
    if (canResend) {
      // Reset timer
      setTimer(60);
      setCanResend(false);
      // Add your OTP resend API call here
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>OTP verification</Text>
        <Text style={styles.subtitle}>
          Enter the OTP sent to your mobile number
        </Text>
      </View>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            style={styles.input}
            ref={ref => (inputRefs.current[index] = ref)}
          />
        ))}
      </View>

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn’t receive code?</Text>
        <TouchableOpacity onPress={handleResendOTP} disabled={!canResend}>
          <Text
            style={[
              styles.resendButton,
              !canResend && styles.resendButtonDisabled,
            ]}>
            Resend
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.timerText}>Time left: {timer} seconds</Text>
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          // if (otp.join('').length === length) {
          //   route.params?.onComplete?.(otp.join(''));
          // }
          navigation.navigate('Home');
        }}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.changeNumberButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.changeNumberText}>Want to Change Number ?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('5%'),
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: hp('3%'),
  },
  title: {
    color: '#101010',
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  subtitle: {
    fontSize: wp('4%'),
    color: '#878787',
  },
  timerText: {
    fontSize: wp('4%'),
    marginBottom: hp('2%'),
    color: '#333',
  },
  otpContainer: {
    flexDirection: 'row',
    marginBottom: hp('3%'),
  },
  input: {
    borderWidth: 1,
    borderRadius: hp('1%'),
    borderColor: '#000',
    padding: wp('2%'),
    margin: wp('1%'),
    textAlign: 'center',
    fontSize: wp('5%'),
    width: wp('12%'),
    height: wp('12%'),
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  resendText: {
    fontSize: wp('4%'),
    color: '#878787',
    paddingRight: wp('2%'),
  },
  resendButton: {
    color: '#FE8C00',
    fontSize: wp('4%'),
  },
  resendButtonDisabled: {
    color: '#999',
  },
  changeNumberButton: {
    marginBottom: hp('2%'),
  },

  submitButton: {
    backgroundColor: '#FE8C00',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('25%'),
    borderRadius: hp('3%'),
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  changeNumberText: {
    color: '#007AFF',
    fontSize: wp('4%'),
    paddingVertical: hp('1.5%'),
  },
});
