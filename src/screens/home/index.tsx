import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { AntDesign  } from '@expo/vector-icons';
import COLORS from '../../global/colors';

// Screens
import { Feed } from '../Feed';


const Tab = createBottomTabNavigator ();

const { API_URL } = process.env;

type Data = {
  url: string;
  login: string;
};

export function Home({ route, navigation }) {
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

  return (
    <Tab.Navigator
    initialRouteName="Feed"
    tabBarOptions={{
      inactiveTintColor: COLORS.lightPurple,
      activeTintColor: COLORS.white,
      activeBackgroundColor: COLORS.darkPurple,
      inactiveBackgroundColor: COLORS.darkPurple,
      style: {
        height: 70,
        padding: 0,
        paddingTop: 10,
        backgroundColor: COLORS.darkPurple,
        margin: 0,
        borderTopColor: COLORS.darkestPurple,
      }
    }}>
      <Tab.Screen
      name="Feed"
      children={()=><Feed navigation={navigation} user={route.params.user}/>}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <AntDesign  name="home" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen
      name="Explore"
      children={()=><Feed navigation={navigation} user={route.params.user}/>}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <AntDesign  name="search1" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen
      name="Notifications"
      children={()=><Feed navigation={navigation} user={route.params.user}/>}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <AntDesign  name="bells" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen
      name="Messages"
      children={()=><Feed navigation={navigation} user={route.params.user}/>}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <AntDesign  name="message1" color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}
