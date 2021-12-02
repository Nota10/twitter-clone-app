import 'react-native-gesture-handler';

import axios from 'axios';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Header } from '../../../../components/Header';

import { Notification } from '../../../../components/Notification';
import { notificationsStyles } from './styles';
import { useThemeObject } from '../../../../hooks/theme.hook';
import { RectButton, TextInput } from 'react-native-gesture-handler';

const Notifications: React.FC = () => {
  const [data, setData] = useState<Array<any>>([]);

  const styles = useThemeObject(notificationsStyles);

  useEffect(() => {
    const getData = async () => {
      try {
        //const { data } = await axios.get(`${API_URL}/orgs/Nota10`);
        // setData(data);
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=1`
        );
        setData(data);
        // var posts = data.reduce((acc:Array<any>, post:any) => {
        //   acc.push( <Tweet key={post.id} post={post}/> );
        //   return acc;
        // }, []);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Notificações" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {data.map(post => (
            <Notification key={post.id} post={post} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export { Notifications };
