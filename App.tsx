import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { Welcome } from './src/screens/Welcome';
import { SignIn } from './src/screens/SignIn';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
