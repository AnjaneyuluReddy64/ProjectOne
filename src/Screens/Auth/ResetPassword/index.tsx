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
      <View>
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
    marginBottom: 8,
    textAlign: 'center',
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
