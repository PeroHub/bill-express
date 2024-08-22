import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from '../components/RegisterScreen';
// import { Login } from '../components/auth/login/Login';
// import { ForgetPassword } from '../components/auth/forgetpassword/ForgetPassword';
// import { Reset } from '../components/auth/reset/Reset';
// import { ConfirmPassword } from '../components/auth/confirmpassword/ConfirmPassword';
import WelcomeScreen from "../components/Welcome"

// WebBrowser.maybeCompleteAuthSession()

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="login" component={WelcomeScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      {/* <Stack.Screen name="forget" component={ForgetPassword} />
      <Stack.Screen name="reset" component={Reset} />
      <Stack.Screen name="confirm" component={ConfirmPassword} /> */}
    </Stack.Navigator>
  );
};
