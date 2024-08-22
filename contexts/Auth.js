import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import { AuthData, authService } from '../services/authServices';

const AuthContext = createContext({});

// WebBrowser.maybeCompleteAuthSession();

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState();
  const [registerStatus, setRegisterStatus] = useState("")
  const [registerLoading, setRegisterLoading] = useState(false)
  const [ loginStatus, setLoginStatus ] = useState('')
  const [ loginLoading, setLoginLoading ] = useState(false)
  const [userInfo, setUserInfo] = useState()

  // const [request, response, promptAsync] =  Google.useAuthRequest({
  //   androidClientId: "314379367036-2279c5v9va204l8armg4neohj3753mnq.apps.googleusercontent.com",
  //   iosClientId: "314379367036-1qnkfajntaddp2imlugiofmofq8d9p3g.apps.googleusercontent.com",
  //   webClientId: "314379367036-uvpp12l3k2mn1b4t8th5ojv4h1mb1j40.apps.googleusercontent.com"
  // })

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  // useEffect(() => {
  //   handleSignInWithGoogle();
  // },[response])

  async function loadStorageData() {
    try {
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        const _authData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  // const handleSignInWithGoogle = async () => {
  //   const user = await AsyncStorage.getItem('@AuthData')
  //   if(!user) {
  //     if(response?.type === "success") {
  //       await getUserInfo(response.authentication.accessToken)
  //     }
  //   }else {
  //     setAuthData(JSON.parse(user))
  //   }
  // }

  // const handleSignWithGoogleL = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //   //   setState({ userInfo });
  //     console.log({userInfo})
  //     await AsyncStorage.setItem("@AuthData", JSON.stringify(userInfo))
  //     setAuthData(userInfo)


  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };

  // const getUserInfo = async (token) => {
  //   if (!token) return;
  //   try {
  //     const response = await fetch(
  //       "https://www.googleapis.com/userinfo/v2/me",
  //       {
  //         headers: { Authorization: `Bearer ${token}`}
  //       }
  //     )
  //     const user = await response.json();
  //     await AsyncStorage.setItem("@AuthData", JSON.stringify(user))
  //     setAuthData(user)
  //   } catch (error) {
  //     //Error
  //   }
  // }

  const signIn = async (values) => {
    setLoginLoading(true)
    await authService.signIn(values).then((response) => {
        setAuthData(response.data);
        console.log(response.data)
        AsyncStorage.setItem('@AuthData', JSON.stringify(response.data));
        setLoginLoading(false)
    })
    .catch((error) => {
        alert("Email or password is incorrect")
        console.error(error)
        setLoginLoading(false)
    })
  };

  const register = async (values) => {
    setRegisterLoading(true)
    await authService.register(values).then((response) => {
        setRegisterStatus(response.status)
        console.log(response.status, response.data)
        setRegisterLoading(false)
        navigation.navigate('login')

    })
    .catch((error) => {
        console.log(error)
        setRegisterLoading(false)
    })
    // setAuthData(_authData);
    // AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
  }

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      await AsyncStorage.removeItem('@AuthData');
      setAuthData(undefined);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <AuthContext.Provider value={{loadStorageData ,authData, setAuthData, loading, signIn, signOut, register, registerStatus, registerLoading, loginStatus, loginLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };
