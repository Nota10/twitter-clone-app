import 'react-native-gesture-handler';
import React from 'react';

import { Welcome }  from './src/screens/Welcome';
import { SignUp }   from './src/screens/SignUp';
import { SignIn }   from './src/screens/SignIn';
import { Home }     from './src/screens/home';

import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

enableScreens();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
