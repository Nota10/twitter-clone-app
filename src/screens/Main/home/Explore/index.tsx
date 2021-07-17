import 'react-native-gesture-handler';

import axios from 'axios';
import { SafeAreaView, ScrollView, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../../../../components/Header';

import { Tweet } from '../../../../components/Tweet';
import { exploreStyles } from './styles';
import { ThemeContext } from '../../../../utils/ThemeHandler';
import { colors } from '../../../../global/colors';

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const Explore = () => {
  const [data, setData] = useState<Array<User>>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get<{ data: User[] }>(
          `https://reqres.in/api/users`
        );
        setData(data.data);
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
        exploreStyles.container,
        { backgroundColor: colors[`darkest${context.theme}`] },
      ]}
    >
      <Header title="Explorar" />
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={[
            exploreStyles.scrollView,
            { backgroundColor: colors[`darkest${context.theme}`] },
          ]}
        >
          {data.map(({ id, first_name, last_name, avatar }) => {
            const post = {
              id,
              body: 'Tweet fake',
              userName: first_name,
              userTag: `@${last_name}`,
              avatarUrl: avatar,
            };

            return <Tweet key={post.id} post={post} />;
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export { Explore };
