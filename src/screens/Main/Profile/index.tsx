import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Text, View } from 'react-native';
import { Header } from '../../../components/Header';
import { profileStyles } from './styles';
import { useThemeObject } from '../../../hooks/theme.hook';

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

  const styles = useThemeObject(profileStyles);

  useEffect(() => {
    const getData = async () => {
      try {
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

  return (
    <View style={styles.container}>
      <Header title="Perfil" />
      {Object.keys(data).length > 0 && (
        <View style={styles.dataContainer}>
          <View>
            <Text style={styles.dataLabel}>Nome:</Text>
            <Text style={styles.dataValue}>{data.name}</Text>
            <Text style={styles.dataLabel}>Email:</Text>
            <Text style={styles.dataValue}>{data.email}</Text>
            <Text style={styles.dataLabel}>Telefone:</Text>
            <Text style={styles.dataValue}>{data.phone}</Text>
            <Text style={styles.dataLabel}>Website:</Text>
            <Text style={styles.dataValue}>{data.website}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export { Profile };
