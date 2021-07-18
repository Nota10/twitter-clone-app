import 'react-native-gesture-handler';
import React from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { homeStyles } from './styles';

// Screens
import { Feed } from './Feed';
import { Explore } from './Explore';
import { useNavigation } from '@react-navigation/native';
import { useThemeObject } from '../../../hooks/theme.hook';
import { useThemeContext } from '../../../contexts/ThemeContext';

const Tab = createBottomTabNavigator();

export function Home() {
  const navigation = useNavigation();
  const styles = useThemeObject(homeStyles);
  const { theme } = useThemeContext();

  navigation.addListener('beforeRemove', e => {
    // Prevent default behavior of leaving the screen
    e.preventDefault();

    console.log('OPA');

    // Prompt the user before leaving the screen
    Alert.alert(
      'Tem certeza?',
      'Você irá sair de sua conta e voltará para a tela inicial',
      [
        {
          text: 'Voltar',
          style: 'cancel',
          onPress: () => {
            return;
          },
        },
        {
          text: 'Sair',
          style: 'default',
          onPress: () => {
            AsyncStorage.removeItem('email');
            AsyncStorage.removeItem('password');
            navigation.dispatch(e.data.action);
          },
        },
      ]
    );
  });

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: theme.colors.common.white,
        inactiveTintColor: theme.colors.secondary.light,
        activeBackgroundColor: theme.colors.secondary.main,
        inactiveBackgroundColor: theme.colors.secondary.main,
        style: {
          ...styles.tabNavigator,
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Feed}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="bells" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Feed}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="mail" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
