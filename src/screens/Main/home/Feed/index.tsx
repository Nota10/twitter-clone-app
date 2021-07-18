import 'react-native-gesture-handler';

import axios from 'axios';
import { SafeAreaView, ScrollView, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../../../../components/Header';

import { Tweet } from '../../../../components/Tweet';
import { feedStyles } from './styles';
// import { ThemeContext } from '../../../../utils/ThemeHandler';
// import { colors } from '../../../../global/colors';

const Feed: React.FC = () => {
  const [data, setData] = useState<Array<any>>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        //const { data } = await axios.get(`${API_URL}/orgs/Nota10`);
        // setData(data);
        console.log('\nFetching posts...');
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

  // const context = useContext(ThemeContext);

  return (
    <View
      style={[
        feedStyles.container,
        // { backgroundColor: colors[`darkest${context.theme}`] },
      ]}
    >
      <Header title="Últimos Tweets" />
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={[
            feedStyles.scrollView,
            // { backgroundColor: colors[`darkest${context.theme}`] },
          ]}
        >
          {data.map(post => (
            <Tweet key={post.id} post={post} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export { Feed };
