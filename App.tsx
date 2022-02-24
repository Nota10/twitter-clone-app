import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import { Welcome } from './src/screens/Welcome';
import { SignUp } from './src/screens/SignUp';
import { SignIn } from './src/screens/SignIn';
import { Main } from './src/screens/Main';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { PURPLE_THEME } from './src/global/colors/purple.theme';
import { BLUE_THEME } from './src/global/colors/blue.theme';

import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { isSignedIn } from './src/services/auth';

enableScreens();
const Stack = createStackNavigator();

const App = () => {
  const [signed, setSigned] = useState(false);
  const [signLodaded, setSignedLoaded] = useState(false);

  useEffect(() => {
    isSignedIn()
      .then(res => {
        setSigned(res);
        setSignedLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  return !signLodaded ? null : (
    <ThemeProvider initialValue={BLUE_THEME}>
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
          initialRouteName={signed ? 'Main' : 'SignIn'}
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
};

export default App;
