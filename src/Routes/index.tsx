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
import ProfileScreen from '../Screens/Auth/ProfileScreen';
import ChangePassword from '../Screens/ChangePassword';
import Cards from '../Screens/Project/Cards';
import CardInfo from '../Screens/Project/CardInfo';
import BuyNow from '../Screens/Project/BuyNow';
import Cart from '../Screens/Project/Cart';

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
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="CardInfo" component={CardInfo} />
        <Stack.Screen name="BuyNow" component={BuyNow} />
        <Stack.Screen name="Cart" component={Cart} />

        {/* Main Screen */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
