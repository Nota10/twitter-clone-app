import 'react-native-gesture-handler';
import React from 'react';

import { Welcome }  from './src/screens/Welcome';
import { SignUp }   from './src/screens/SignUp';
import { SignIn }   from './src/screens/SignIn';
import { Main }     from './src/screens/Main';

import { enableScreens } from 'react-native-screens';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Alert, AsyncStorage } from 'react-native';

enableScreens();
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        mode='card'
        screenOptions= {{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          name="Main"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
