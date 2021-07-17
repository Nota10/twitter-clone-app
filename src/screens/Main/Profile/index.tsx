import 'react-native-gesture-handler';

import axios from 'axios';
import { Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../../../components/Header';
import { profileStyles } from './styles';
import { colors } from '../../../global/colors';
import { ThemeContext } from '../../../utils/ThemeHandler';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

const Profile: React.FC = () => {
  const [data, setData] = useState<User>({} as User);

  useEffect(() => {
    const getData = async () => {
      try {
        //const { data } = await axios.get(`${API_URL}/orgs/Nota10`);
        // setData(data);
        console.log('\nFetching posts...');
        const { data } = await axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/1`
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const context = useContext(ThemeContext);

  return (
    <View
      style={[
        profileStyles.container,
        { backgroundColor: colors[`dark${context.theme}`] },
      ]}
    >
      <Header title="Perfil" />
      {Object.keys(data).length > 0 && (
        <View
          style={[
            profileStyles.dataContainer,
            { backgroundColor: colors[`dark${context.theme}`] },
          ]}
        >
          <View>
            <Text style={profileStyles.dataLabel}>Nome:</Text>
            <Text style={profileStyles.dataValue}>{data.name}</Text>
            <Text style={profileStyles.dataLabel}>Email:</Text>
            <Text style={profileStyles.dataValue}>{data.email}</Text>
            <Text style={profileStyles.dataLabel}>Telefone:</Text>
            <Text style={profileStyles.dataValue}>{data.phone}</Text>
            <Text style={profileStyles.dataLabel}>Website:</Text>
            <Text style={profileStyles.dataValue}>{data.website}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export { Profile };
