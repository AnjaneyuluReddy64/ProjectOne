import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useLazyProfileDataQuery} from '../../../APIServices/hostApiServices';
import {COLORS} from '../../../Utils/Colors';
import CommonHeader from '../../../Components/CommonHeader';

const ProfileScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const {userData} = route?.params || {};

  const [profileData, setProfileData] = useState<any>({});

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  console.log('isEditMode---->', isEditMode);

  const [profileApi] = useLazyProfileDataQuery();

  const profileHandler = async () => {
    try {
      const data = {
        id: userData?.id || '',
      };

      const response = await profileApi(data).unwrap();
      if (response) {
        setProfileData(response);
      }
    } catch (error) {
      console.log('profile API error---->', error);
    }
  };

  useEffect(() => {
    if (userData?.id) {
      profileHandler();
    } else {
      Alert.alert('User Id not Found');
    }
  }, []);

  //editProfile

  return (
    <View style={styles.container}>
      <CommonHeader title={'Bio-Data'} />
      <View style={styles.bodyContainer}>
        <View style={styles.dpImgContainer}>
          <Image
            source={{uri: profileData?.photo}}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{profileData?.name}</Text>
        </View>

        <View>
          <Text style={styles.email}>Email: {profileData?.gmail}</Text>
          <Text style={styles.email}>Password: {profileData?.password}</Text>
          <Text style={styles.mobile}>Mobile: {profileData?.mobile}</Text>
          <Text style={styles.id}>ID: {profileData?.id}</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          {isEditMode ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => setIsEditMode(false)}>
              <Text style={styles.buttonText}>Update Profile</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => setIsEditMode(true)}>
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  bodyContainer: {
    flex: 1,
    marginHorizontal: hp('1.8%'),
  },
  dpImgContainer: {
    alignItems: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('4%'),
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  mobile: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  id: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: hp('5%'),
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    width: wp('40%'),
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
