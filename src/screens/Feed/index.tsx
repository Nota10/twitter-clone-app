import 'react-native-gesture-handler';

import axios from 'axios';
import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { theme } from '../../global/theme';
import { RectButton } from 'react-native-gesture-handler';

const { API_URL } = process.env;

type Data = {
  url: string;
  login: string;
};

const Feed = ({navigation, user}) => {
  const [data, setData] = useState<Data | null>(null);
  console.log(navigation);
  console.log(user);

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
    <View style={theme.container}>
      <Text style={{ ...theme.lead_text, marginTop: 150 }}>Bem-vindo {user.name}, aqui está o seu feed :)</Text>
      <RectButton style={theme.button} onPress={() => navigation.navigate('Welcome')}>
        <Text style={theme.button_text}>Sair</Text>
      </RectButton>
    </View>
  );
}

export {Feed};
