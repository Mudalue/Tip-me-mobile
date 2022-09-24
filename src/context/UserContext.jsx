import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useState, useEffect } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [profile, setProfile] = useState({});
//check user
const checkUser = async () => {
    const token = await AsyncStorage.getItem("@token");
    console.log(token);
    if (token) {
        setIsLoggedIn(true);
    }else{
        setIsLoggedIn(false)
    }
} 


  useEffect(() => {
  checkUser();
  },[])
  
  return (
    <LoginContext.Provider
      value={{ isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;