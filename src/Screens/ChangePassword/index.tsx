import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, {useState} from 'react';
import {showErrorMessage, showSuccessMessage} from '../../Utils/Globals';
import {useChangePasswordMutation} from '../../APIServices/hostApiServices';

const ChangePassword = ({route, navigation}: {route: any; navigation: any}) => {
  const {userData} = route?.params || {};
  //   console.log(userData);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordApi] = useChangePasswordMutation();

  const handleChangePassword = async () => {
    console.log(!newPassword);

    if (!newPassword) {
      showErrorMessage({message: 'New password is required', duration: 4000});
    } else if (newPassword.length < 8) {
      showErrorMessage({
        message: 'Password must be at least 8 characters long',
        duration: 4000,
      });
    }

    if (!confirmPassword) {
      showErrorMessage({
        message: 'Please confirm your new password',
        duration: 4000,
      });
    } else if (confirmPassword !== newPassword) {
      showErrorMessage({
        message: 'Passwords do not match',
        duration: 4000,
      });
    } else if (confirmPassword === newPassword) {
      try {
        const data = {
          id: userData?.id || '',
        };
        const params = {
          password: newPassword || '',
        };

        const response = await passwordApi({data, params}).unwrap();
        if (response) {
          showSuccessMessage({
            message: 'Profile updated suceesfully',
            duration: 4000,
          });
          setNewPassword('');
          setConfirmPassword('');
          navigation.navigate('Login');
        } else {
          showErrorMessage({message: 'Profile update failed', duration: 4000});
        }
      } catch (error) {
        console.log('error---->', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>

      <View style={styles.inputContainer}>
        <Text style={[styles.input, {color: 'red'}]}>
          <Text>Current Password:</Text> {userData.password}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
          placeholderTextColor="#666"
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholderTextColor="#666"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'),
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginBottom: hp('3%'),
    marginTop: hp('2%'),
    textAlign: 'center',
  },
  inputContainer: {
    width: wp('90%'),
    marginBottom: hp('3%'),
  },
  input: {
    borderWidth: hp('0.2'),
    borderColor: '#ddd',
    borderRadius: wp('2%'),
    padding: wp('3%'),
    marginBottom: hp('1.5%'),
    fontSize: wp('4%'),
    width: '100%',
    backgroundColor: '#f8f8f8',
  },
  errorText: {
    color: 'red',
    fontSize: wp('3%'),
    marginBottom: hp('1%'),
  },
  button: {
    backgroundColor: '#007AFF',
    padding: wp('4%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
    width: wp('90%'),
    marginTop: hp('2%'),
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
});
