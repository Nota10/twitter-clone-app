import 'react-native-gesture-handler';
import React from 'react';

import { Welcome } from './src/screens/Welcome';
import { SignUp } from './src/screens/SignUp';
import { SignIn } from './src/screens/SignIn';
import { Main } from './src/screens/Main';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { PURPLE_THEME } from './src/global/colors/purple.theme';

import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

enableScreens();
const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider initialValue={PURPLE_THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <Stack.Navigator
          mode="card"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
