import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Alert, View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { AntDesign  } from '@expo/vector-icons';
import COLORS from '../../../global/colors';

// Screens
import { Feed } from './Feed';
import { Explore } from './Explore';

const Tab = createBottomTabNavigator ();

const { API_URL } = process.env;

type Data = {
  url: string;
  login: string;
};

export function Home({ route }) {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/orgs/Nota10`);
        console.log('data', data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  navigation.addListener('beforeRemove', (e) => {
    // Prevent default behavior of leaving the screen
    e.preventDefault();

    console.log('OPA');

    // Prompt the user before leaving the screen
    Alert.alert(
      'Tem certeza?',
      'Você irá sair de sua conta e voltará para a tela inicial',
      [
        {
          text: "Voltar",
          style: "cancel",
          onPress: () => {}
        },
        {
          text: "Sair",
          style: "default",
          onPress: () => {
            AsyncStorage.removeItem('email');
            AsyncStorage.removeItem('password');
            navigation.dispatch(e.data.action);
          }
        },
      ]
    )
  });

  return (
    <Tab.Navigator
    initialRouteName="Feed"
    tabBarOptions={{
      inactiveTintColor: COLORS.secondary,
      activeTintColor: COLORS.white,
      activeBackgroundColor: COLORS.secondary_dark,
      inactiveBackgroundColor: COLORS.secondary_dark,
      style: {
        height: 70,
        padding: 0,
        paddingTop: 10,
        backgroundColor: COLORS.secondary_dark,
        margin: 0,
        borderTopColor: COLORS.secondary_darkest,
      }
    }}>
      <Tab.Screen
      name="Feed"
      children={()=><Feed user={route.params.user}/>}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <AntDesign  name="home" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen
      name="Explore"
      children={()=><Explore/>}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <AntDesign  name="search1" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen
      name="Notifications"
      children={()=><Feed user={route.params.user}/>}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <AntDesign  name="bells" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen
      name="Messages"
      children={()=><Feed user={route.params.user}/>}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <AntDesign  name="mail" color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}
