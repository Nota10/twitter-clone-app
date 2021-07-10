import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

// Screens
import { Feed } from '../Feed';

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
    <Tab.Navigator>
      <Tab.Screen
      name="Feed"
      children={()=><Feed navigation={navigation} user={route.params.user}/>}
      />
    </Tab.Navigator>
  );
}
