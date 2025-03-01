import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const OTPInput = ({onComplete}) => {
  const length = 4;
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const [timer, setTimer] = useState(60); // 1-minute timer
  const inputRefs = useRef([]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown); // Clean up the interval on component unmount
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
        onComplete(newOtp.join(''));
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.timerText}>Time left: {timer} seconds</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  timerText: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    margin: 5,
    textAlign: 'center',
    fontSize: 18,
    width: 40,
    height: 40,
  },
});

export default OTPInput;
