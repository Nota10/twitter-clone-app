import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = "@RocketSeat:token";
export const USER_ID   = "@RocketSeat:userid";
export const USER_DATA   = "@RocketSeat:userData";

export const onSignIn =  (data:any) =>  { 
  AsyncStorage.setItem(TOKEN_KEY, data.accessToken);
  AsyncStorage.setItem(USER_ID, data.userId);
}

export const onSignOut =  () =>  {
  AsyncStorage.removeItem(TOKEN_KEY);
  AsyncStorage.removeItem(USER_ID);
}

export const isSignedIn = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);

  return (token !== null) ? true : false;
};

export const getToken = async () => {
  return await AsyncStorage.getItem(TOKEN_KEY);
}

export const getUserid = async () => {
  return await AsyncStorage.getItem(USER_ID);
}
