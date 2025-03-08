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
import {useNewUsersRegisterMutation} from '../../../APIServices/hostApiServices';

const SignUp = ({navigation}: {navigation: any}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const [dpImg, setDpImg] = useState(
    'https://i.pinimg.com/736x/6b/cb/e1/6bcbe10420ae10b82b550b3d4adeb13e.jpg',
  );

  //Loading || disable
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  //Api call
  const [postRequestToUpdateInfo] = useNewUsersRegisterMutation();

  const onSubmitButton = async () => {
    console.log(name, mobile, username, password, dpImg);
    setIsSubmitLoading(true);
    const formData = {
      name: name,
      mobile: mobile,
      gmail: username,
      password: password,
      photo: dpImg,
    };

    try {
      const response = await postRequestToUpdateInfo(formData).unwrap();

      if (response) {
        // console.log('successfull Response:---', response);
        setName('');
        setMobile('');
        setUsername('');
        setpassword('');
      } else {
        console.log('Failed Response:---', response);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitLoading(false);
      navigation.navigate('Login');
    }
  };
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.titleText}>Register</Text>
        <Text style={styles.paraText}>
          Register your account with User ID & Password provided by admin
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
        />
        <Text style={styles.label}>NAME</Text>

        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter Name"
        />
        <Text style={styles.label}>MOBILE</Text>

        <TextInput
          style={styles.input}
          value={mobile}
          onChangeText={setMobile}
          placeholder="Enter Mobile Number"
        />

        <TouchableOpacity style={styles.button} onPress={onSubmitButton}>
          <Text style={styles.buttonText}>
            {isSubmitLoading ? 'Loading...' : 'Submit'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: hp('2.3%'),
  },
  titleText: {
    fontSize: hp('4'),
    fontWeight: 'bold',
    color: COLORS.DarkMidnightBlue,
  },
  paraText: {
    textAlign: 'center',
    width: wp('85%'),
    marginVertical: hp('2%'),
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
