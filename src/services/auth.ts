import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = "@RocketSeat:token";
export const USER_ID   = "@RocketSeat:userid";

export const onSignIn =  (token:string, userId:string) =>  { 
  AsyncStorage.setItem(TOKEN_KEY, token);
  AsyncStorage.setItem(USER_ID, userId);
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
