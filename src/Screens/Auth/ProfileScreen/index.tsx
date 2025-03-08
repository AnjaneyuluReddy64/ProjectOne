import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

const ProfileScreen = ({route}: {route: any}) => {
  // Dummy data
  // const userData = {
  //   id: '123456',
  //   name: 'John Doe',
  //   email: 'johndoe@gmail.com',
  //   password: 'password123',
  //   mobile: '+1 234 567 890',
  //   photo:
  //     'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid%27',
  // };
  const {username, password, userData} = route?.params || {};
  console.log(userData);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Back</Text>
        <Text>Bio-Data</Text>
      </View>
      <Image source={{uri: userData.photo}} style={styles.profileImage} />
      <Text style={styles.name}>{userData.name}</Text>
      <Text style={styles.email}>Email: {userData.gmail}</Text>
      <Text style={styles.email}>Password: {userData.password}</Text>
      <Text style={styles.mobile}>Mobile: {userData.mobile}</Text>
      <Text style={styles.id}>ID: {userData.id}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Edit Profile clicked')}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    width: 400,
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
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;
