import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Splash from '../Screens/Auth/Splash';
import Login from '../Screens/Auth/Login';
import SignUp from '../Screens/Auth/SignUp';
import ForgetPassword from '../Screens/Auth/ForgetPassword';
import ResetPassword from '../Screens/Auth/ResetPassword';
import EnterOtp from '../Screens/Auth/EnterOtp';
import OtpComponent from '../Screens/Auth/OtpComponent';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* Auth Screen */}
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="EnterOtp" component={EnterOtp} />
        <Stack.Screen name="OtpComponent" component={OtpComponent} />

        {/* Main Screen */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
