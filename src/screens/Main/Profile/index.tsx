import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Text, View, SafeAreaView, ScrollView, TextInput } from 'react-native';
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
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="white"
              defaultValue={data.name}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="white"
              defaultValue={data.email}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Telefone</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="white"
              defaultValue={data.phone}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Website</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="white"
              defaultValue={data.website}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export { Profile };
