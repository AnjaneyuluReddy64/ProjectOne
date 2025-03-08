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

const ResetPassword = ({navigation}: {navigation: any}) => {
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');

  const onLoginHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={{marginVertical: wp('10%')}}>
        <Text style={styles.titleText}>Reset password</Text>
      </View>

      <View>
        <Text style={styles.label}>New password</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="**********"
        />
        <Text style={styles.label}>Confirm password</Text>

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setpassword}
          placeholder="**********"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={onLoginHandler}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: hp('2.2%'),
  },
  titleText: {
    textAlign: 'center',
    fontSize: hp('3'),
    fontWeight: 'bold',
    color: '#00223E',
  },
  paraText: {
    textAlign: 'center',
  },
  label: {
    color: '#00C7FE',
    fontSize: 18,
    marginBottom: 8,
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
